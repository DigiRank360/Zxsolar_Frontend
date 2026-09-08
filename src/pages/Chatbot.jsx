import React, { useState, useRef, useEffect } from 'react'
import { sendChatMessage } from '../services/api'
import logo from '../assets/logo.png'
import {
  Send,
  Sparkles,
  User,
  Sun,
  CheckCheck,
  Zap,
  ShieldCheck,
  Minus,
} from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! Welcome to ZXSOLAR. ☀️\nHow can I help you save on electricity bills today?',
      time: 'Just now',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sessionId, setSessionId] = useState(
    () => window.crypto?.randomUUID?.() || `web-${Date.now()}`
  )
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) scrollToBottom()
  }, [messages, isTyping, isOpen])

  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue
    if (!text.trim() || isTyping) return

    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      time: currentTime,
    }

    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    const history = [...messages, userMsg]
      .filter((m) => m.sender === 'user' || m.sender === 'bot')
      .slice(-10)
      .map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }))

    try {
      const response = await sendChatMessage(text, history, sessionId)
      if (response.sessionId && response.sessionId !== sessionId) {
        setSessionId(response.sessionId)
      }
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: response.reply,
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text:
            error.message ||
            'Assistant unavailable right now. Please contact ZXSOLAR directly.',
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const quickPrompts = [
    { label: 'Get Solar Quote', icon: <Zap className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Battery Storage', icon: <Sun className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: 'Warranty Info', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> },
  ]

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans antialiased">
      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/916232750068"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ZXSOLAR on WhatsApp"
        title="Chat with ZXSOLAR on WhatsApp"
        className="whatsapp-glow fixed bottom-4 left-4 sm:bottom-6 sm:left-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-50"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8 fill-current">
          <path d="M16.01 3.2A12.77 12.77 0 0 0 3.22 15.97c0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.59-1.7a12.78 12.78 0 0 0 6.22 1.61h.01c7.05 0 12.78-5.73 12.78-12.78A12.76 12.76 0 0 0 16.01 3.2Zm0 23.4h-.01a10.62 10.62 0 0 1-5.42-1.49l-.39-.23-3.91 1.01 1.04-3.81-.25-.4a10.61 10.61 0 1 1 8.94 4.92Zm5.82-7.96c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.38.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      {/* ================= CIRCULAR TOGGLE BUTTON ================= */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-glow group relative flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-[#0d1713] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Open Chatbot"
        >
          {/* Subtle Outer Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 opacity-75 blur group-hover:opacity-100 transition duration-300" />
          
          {/* Clean Logo Image */}
          <div className="relative z-10 flex items-center justify-center h-full w-full p-2.5">
            <img
              src="/favicon.png"
              alt="ZXSOLAR Logo"
              className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </button>
      )}

      {/* ================= CHATBOT EXPANDED WINDOW ================= */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[420px] h-[85vh] sm:h-[660px] max-h-[720px] bg-[#090d0b] backdrop-blur-2xl text-white rounded-3xl shadow-2xl border border-emerald-500/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#101714] p-4 sm:p-5 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              {/* High Contrast Logo Display */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl  p-2  shadow-md backdrop-blur-md">
                <img
                  src={logo}
                  alt="ZXSOLAR Logo"
                  className="h-full w-full object-contain "
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#101714]" />
              </div>
              
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm sm:text-base font-bold tracking-wide text-white">ZXSOLAR AI</h3>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs text-gray-400 font-medium">Online • Clean Energy Assistant</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chatbot"
              title="Minimize chatbot"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-95"
            >
              <Minus className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-semibold shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-amber-400 text-black'
                      : 'bg-[#15231d] text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {msg.sender === 'user' ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </div>

                <div className="space-y-1">
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-tr-none'
                        : 'bg-[#131a17] text-gray-200 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`flex items-center gap-1 text-[10px] text-gray-500 px-1 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && (
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-[80%] mr-auto">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#15231d] text-emerald-400 border border-emerald-500/30">
                  <Sun className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3.5 bg-[#131a17] border border-white/10 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2.5 bg-[#0b0f0d] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt.label)}
                className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 text-xs font-medium text-gray-300 hover:text-white transition-all active:scale-95 shrink-0"
              >
                {prompt.icon}
                <span>{prompt.label}</span>
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 sm:p-4 bg-[#101714] border-t border-emerald-500/20 flex items-center gap-2.5"
          >
            <input
              type="text"
              placeholder="Ask about pricing, installation..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label="Message ZXSOLAR AI"
              className="flex-1 bg-white/5 border border-white/10 focus:border-emerald-400/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed text-white shadow-lg transition-all active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  )
}
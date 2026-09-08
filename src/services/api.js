const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function request(path, options) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }

  return data
}

export function submitQuote(payload) {
  return request('/quote', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function sendChatMessage(message, history, sessionId) {
  return request('/chat', {
    method: 'POST',
    body: JSON.stringify({ message, history, sessionId }),
  })
}

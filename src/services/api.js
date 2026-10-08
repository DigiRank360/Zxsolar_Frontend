const API_BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.DEV ? 'http://localhost:3000/api' : ''
)

async function request(path, options) {
  if (!API_BASE_URL) {
    throw new Error('API is not configured. Set VITE_API_URL to the production backend URL.')
  }

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

export function submitReferral(payload) {
  return request('/referrals', {
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

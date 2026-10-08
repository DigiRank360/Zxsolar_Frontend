
const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:3000/api' : '/api')
).replace(/\/$/, '');

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || 'Something went wrong. Please try again.'
    );
  }

  return data;
}

// Quote Form API
export function submitQuote(payload) {
  return request('/quote', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Referral Form API
export function submitReferral(payload) {
  return request('/referrals', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Chatbot API
export function sendChatMessage(message, history, sessionId) {
  return request('/chat', {
    method: 'POST',
    body: JSON.stringify({
      message,
      history,
      sessionId,
    }),
  });
}

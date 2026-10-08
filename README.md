# Zxsolar - Ecology & Solar Energy React App

This is a complete, responsive, production-ready React project designed with Tailwind CSS, matching the Zxsolar UI template design.

## Features Included:
- **Full UI Matching Screenshots**: Header, Navigation, Hero Slider, About, Interactive Service Tabs, Key Stats Counters, Skill Progress Bars, Reviews, Consultancy CTA, and News Grid.
- **Floating Widgets**:
  - Left-hand side WhatsApp quick action button.
  - Right-hand side interactive AI Chatbot drawer modal.
  - Fixed demo panel & smooth scroll-to-top button.
- **Modular Component Architecture**: Separated into components (`common`, `home`) and pages.

## Getting Started

1. **Unzip the downloaded archive**:
   `Zxsolar-app.zip`

2. **Install dependencies**:
   ```bash
   cd Zxsolar-app
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Production API configuration

The frontend `.env` sets `VITE_API_URL` to
`https://api.zxsolarenergies.com/api`, which the production build uses. If the
backend URL changes, update `VITE_API_URL` in `.env` and rebuild the frontend.
When building on a hosting provider, set the same `VITE_API_URL` in its build
environment because local `.env` files may not be included in deployment. Do
not set it to `localhost`; that would point production visitors to their own
computer. The backend's `FRONTEND_URL` must be set to the deployed frontend
origin so the backend accepts browser requests from the site.

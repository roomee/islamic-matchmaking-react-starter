
# NikahWise – Islamic Matchmaking & Learning (React + Vite + TS)

A starter codebase that implements the MVP skeleton from your blueprint.

## ✨ Features in this starter
- Routing for all core pages (Landing, Auth, Onboarding, Dashboard, Learn, Quiz, Matches, Profile, Chat, Mentors, Settings, Admin)
- Tailwind CSS styling with simple utility classes
- Mock services for lessons, quiz, and matches
- Global Shell layout with header, nav, XP bar, and footer
- Zustand auth store (mock user) for quick prototyping

## 🧰 Tech
React 18, Vite 5, TypeScript, Tailwind, React Router v6, Zustand, Recharts (ready), Framer Motion (ready)

## 🚀 Getting Started
```bash
pnpm i   # or npm i / yarn
pnpm dev # starts Vite dev server on http://localhost:5173
```

## 📁 Structure
- `src/routes/App.tsx` – routes
- `src/components/*` – UI building blocks
- `src/pages/*` – screens
- `src/services/api.ts` – mock API data
- `src/store/auth.ts` – mock auth state

## 🔌 Next Steps
- Replace mocks with real API endpoints
- Add compatibility charts with Recharts
- Implement real auth (Firebase/Auth0 or custom JWT)
- Add i18n (Urdu), accessibility, and form validation
- Gate risky features (beauty score) behind hard opt-in flags

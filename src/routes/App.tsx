
import { Route, Routes, Navigate } from 'react-router-dom'
import Landing from '@/pages/Landing'
import Dashboard from '@/pages/Dashboard'
import Learn from '@/pages/Learn'
import Quiz from '@/pages/Quiz'
import Matches from '@/pages/Matches'
import Profile from '@/pages/Profile'
import Chat from '@/pages/Chat'
import Mentors from '@/pages/Mentors'
import Settings from '@/pages/Settings'
import Admin from '@/pages/Admin'
import Auth from '@/pages/Auth'
import Onboarding from '@/pages/Onboarding'
import Shell from '@/components/Shell'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Shell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="*" element={<Navigate to='/' replace />} />
    </Routes>
  )
}

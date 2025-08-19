
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { LogOut, MessageSquare, Star, User } from 'lucide-react'

const NavLink = ({ to, label }: { to: string, label: string }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link to={to} className={`px-3 py-2 rounded-xl ${active ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>
      {label}
    </Link>
  )
}

export default function Shell() {
  const { user, logout } = useAuthStore()
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr]">
      <header className="flex items-center justify-between p-4 border-b bg-white">
        <Link to="/dashboard" className="font-bold text-xl">🌙 NikahWise</Link>
        <nav className="hidden md:flex gap-2 btn btn-danger btn-sm">
          <NavLink   to="/dashboard" label="Dashboard" />
          <NavLink to="/learn" label="Learn" />
          <NavLink to="/quiz" label="Quiz" />
          <NavLink to="/matches" label="Matches" />
          <NavLink to="/chat" label="Chat" />
          <NavLink to="/mentors" label="Mentors" />
          <NavLink to="/settings" label="Settings" />
        </nav>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5" />
          <span className="font-semibold">{user?.xp ?? 0}</span>
          <Link to={`/profile/${user?.id ?? 'me'}`} className="btn"><User className="w-4 h-4 mr-2" />Profile</Link>
          <button onClick={logout} className="btn"><LogOut className="w-4 h-4 mr-2" />Logout</button>
        </div>
      </header>
      <main className="p-4 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="p-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} NikahWise</footer>
    </div>
  )
}

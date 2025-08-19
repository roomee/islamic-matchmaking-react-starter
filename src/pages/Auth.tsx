
import { useAuthStore } from '@/store/auth'
import { useNavigate } from 'react-router-dom'

export default function Auth(){
  const login = useAuthStore(s=>s.login)
  const nav = useNavigate()
  const handleLogin = () => {
    login({ id: 'me', name: 'Demo User', xp: 120 })
    nav('/onboarding')
  }
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="card max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">Welcome</h2>
        <p className="text-gray-600 mb-4">Accept the pledge and sign in to begin.</p>
        <button className="btn w-full" onClick={handleLogin}>Accept Pledge & Continue</button>
      </div>
    </div>
  )
}

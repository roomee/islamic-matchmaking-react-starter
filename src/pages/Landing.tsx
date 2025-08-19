
import { Link } from 'react-router-dom'
export default function Landing(){
  return (
    <div className="min-h-screen grid place-items-center p-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">NikahWise</h1>
        <p className="text-gray-600 mb-6">Faith-centered matchmaking with daily Islamic learning and respectful, AI-assisted compatibility.</p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/auth" className="btn">Get Started</Link>
          <Link to="/dashboard" className="btn">Preview Demo</Link>
        </div>
      </div>
    </div>
  )
}

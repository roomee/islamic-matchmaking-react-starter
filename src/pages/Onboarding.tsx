
import { Link, useNavigate } from 'react-router-dom'
export default function Onboarding(){
  const nav = useNavigate()
  return (
    <div className="max-w-2xl mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Onboarding</h2>
      <ol className="list-decimal ml-6 space-y-2 text-gray-700">
        <li>Basic info (name, city, age)</li>
        <li>Self-rated practice level</li>
        <li>Initial EQ/IQ/Wisdom mini-test</li>
        <li>Privacy toggles</li>
      </ol>
      <div className="flex gap-2 mt-6">
        <button onClick={()=>nav('/dashboard')} className="btn">Finish</button>
        <Link to="/settings" className="btn">Privacy</Link>
      </div>
    </div>
  )
}

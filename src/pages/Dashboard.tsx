
import Card from '@/components/Card'
import XPBar from '@/components/XPBar'
import { useAuthStore } from '@/store/auth'
import { useEffect, useState } from 'react'
import { getTodayLesson } from '@/services/api'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  const user = useAuthStore(s=>s.user)
  const [lesson, setLesson] = useState<any>(null)
  useEffect(()=>{ getTodayLesson().then(setLesson) },[])
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-2">Today&apos;s Lesson</h2>
        {lesson ? (
          <div>
            <h3 className="font-semibold">{lesson.title}</h3>
            <p className="text-gray-600 mt-1">{lesson.body}</p>
            <Link to="/quiz" className="btn mt-3">Take Quiz</Link>
          </div>
        ) : 'Loading...'}
      </Card>
      <Card>
        <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
        <XPBar xp={user?.xp ?? 0} />
        <div className="mt-3 text-sm text-gray-600">Streak: 3 days • Badges: 2</div>
      </Card>
      <Card className="md:col-span-3">
        <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          <Link to="/matches" className="btn">See Matches</Link>
          <Link to="/learn" className="btn">Lessons</Link>
          <Link to="/mentors" className="btn">Mentors</Link>
          <Link to="/chat" className="btn">Chat</Link>
        </div>
      </Card>
    </div>
  )
}

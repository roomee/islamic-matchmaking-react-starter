
import Card from '@/components/Card'
export default function Admin(){
  return (
    <div className="grid gap-4">
      <Card><h3 className="font-semibold">Users</h3><p className="text-gray-600">Moderation tools go here.</p></Card>
      <Card><h3 className="font-semibold">Lessons & Quizzes</h3><p className="text-gray-600">Create, edit, publish content.</p></Card>
      <Card><h3 className="font-semibold">Reports</h3><p className="text-gray-600">Handle flags and safety reviews.</p></Card>
    </div>
  )
}

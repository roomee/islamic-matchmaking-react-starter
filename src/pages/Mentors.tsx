
import Card from '@/components/Card'
export default function Mentors(){
  return (
    <div className="grid gap-4">
      <Card><h3 className="font-semibold">Ask-a-Scholar</h3><p className="text-gray-600">Post a respectful question and receive guidance.</p></Card>
      <Card><h3 className="font-semibold">Marriage Counselors</h3><p className="text-gray-600">Book time with an approved mentor (future feature).</p></Card>
    </div>
  )
}

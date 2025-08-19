
import Card from '@/components/Card'
const lessons = [
  { id:'1', title:'Mercy (Rahmah)', preview:'A gentle story about mercy at home.'},
  { id:'2', title:'Shura (Consultation)', preview:'Discuss and decide with wisdom.'},
  { id:'3', title:'Sabr (Patience)', preview:'Respond with calm and forbearance.'},
]
export default function Learn(){
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {lessons.map(l=> (
        <Card key={l.id}>
          <h3 className="font-semibold">{l.title}</h3>
          <p className="text-gray-600">{l.preview}</p>
        </Card>
      ))}
    </div>
  )
}

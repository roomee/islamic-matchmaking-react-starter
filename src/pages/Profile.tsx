
import Card from '@/components/Card'
import { useParams } from 'react-router-dom'
export default function Profile(){
  const { id } = useParams()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-2">Profile: {id}</h2>
        <div className="text-gray-600">Bio, faith practices, values, and preferences would appear here.</div>
      </Card>
      <Card>
        <h3 className="font-semibold">Compatibility</h3>
        <div className="text-sm text-gray-600">Faith 82% • EQ 68% • Values 75% • Wisdom 64%</div>
      </Card>
    </div>
  )
}

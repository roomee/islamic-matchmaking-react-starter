
import Card from '@/components/Card'
export default function Settings(){
  return (
    <div className="grid gap-4 max-w-3xl">
      <Card>
        <h3 className="font-semibold">Privacy</h3>
        <div className="text-gray-600">Toggle visibility of photos, scores, and city granularity.</div>
      </Card>
      <Card>
        <h3 className="font-semibold">Notifications</h3>
        <div className="text-gray-600">Daily lessons, quiz reminders, new matches.</div>
      </Card>
      <Card>
        <h3 className="font-semibold">Account</h3>
        <div className="text-gray-600">Download my data • Delete account</div>
      </Card>
    </div>
  )
}

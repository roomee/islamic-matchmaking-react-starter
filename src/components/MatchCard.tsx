
import Card from './Card'
import { Link } from 'react-router-dom'

export default function MatchCard({id,name,city,percent,highlights}:{id:string,name:string,city:string,percent:number,highlights:string[]}){
  return (
    <Card className="flex items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{city}</p>
        <div className="text-sm mt-2 flex gap-2 flex-wrap">
          {highlights.map((h,i)=>(<span key={i} className="px-2 py-1 rounded-lg bg-gray-100">{h}</span>))}
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold">{percent}%</div>
        <Link to={`/profile/${id}`} className="btn mt-2">View Profile</Link>
      </div>
    </Card>
  )
}

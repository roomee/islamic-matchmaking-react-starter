
import { useEffect, useState } from 'react'
import { getMatches, Match } from '@/services/api'
import MatchCard from '@/components/MatchCard'

export default function Matches(){
  const [items, setItems] = useState<Match[]>([])
  useEffect(()=>{ getMatches().then(setItems) },[])
  return (
    <div className="grid gap-4">
      {items.map(m => <MatchCard key={m.id} {...m} />)}
    </div>
  )
}

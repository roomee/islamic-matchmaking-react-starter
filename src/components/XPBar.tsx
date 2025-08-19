
export default function XPBar({xp=0}:{xp:number}){
  const pct = Math.min(100, (xp % 100))
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1"><span>XP</span><span>{xp}</span></div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-3 bg-gray-900" style={{width: pct+'%'}} />
      </div>
    </div>
  )
}

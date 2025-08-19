
import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { getDailyQuiz, QuizItem } from '@/services/api'

export default function Quiz(){
  const [items, setItems] = useState<QuizItem[]>([])
  const [answers, setAnswers] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(()=>{ getDailyQuiz().then(setItems) },[])

  const score = items.reduce((acc,cur,i)=> acc + ((answers[i]===cur.correctIndex)?1:0), 0)

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Daily Quiz</h2>
        {items.map((it, idx)=>(
          <div key={idx} className="mb-4">
            <div className="font-medium">{idx+1}. {it.q}</div>
            <div className="mt-2 grid gap-2">
              {it.options.map((op, oi)=>(
                <label key={oi} className="flex items-center gap-2">
                  <input type="radio" name={`q${idx}`} onChange={()=>{
                    const next=[...answers]; next[idx]=oi; setAnswers(next)
                  }}/>
                  <span>{op}</span>
                </label>
              ))}
            </div>
            {submitted && (
              <div className="mt-2 text-sm">
                <span className={`${answers[idx]===it.correctIndex?'text-green-600':'text-red-600'}`}>
                  {answers[idx]===it.correctIndex ? 'Correct' : 'Incorrect'}
                </span>
                <div className="text-gray-600">Reason: {it.rationale}</div>
              </div>
            )}
          </div>
        ))}
        {!submitted ? (
          <button className="btn" onClick={()=>setSubmitted(true)}>Submit</button>
        ) : (
          <div className="mt-3 font-semibold">Score: {score} / {items.length}</div>
        )}
      </Card>
    </div>
  )
}

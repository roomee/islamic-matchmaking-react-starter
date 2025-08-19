
// Mock API layer for MVP prototype wiring
export type Lesson = { id: string; title: string; body: string; tags: string[] }
export type QuizItem = { q: string; options: string[]; correctIndex: number; rationale: string }
export type Match = { id: string; name: string; city: string; percent: number; highlights: string[] }

export async function getTodayLesson(): Promise<Lesson> {
  return {
    id: 'lesson-rahmah',
    title: 'Mercy in Marriage (Rahmah)',
    body: 'A short story about kindness and forgiveness between spouses, inspired by Quran/Hadith. Practice: say 3 kind words today.',
    tags: ['mercy','communication']
  }
}

export async function getDailyQuiz(): Promise<QuizItem[]> {
  return [
    { q: 'Which quality best embodies Rahmah?', options: ['Harshness','Mercy','Silence','Pride'], correctIndex: 1, rationale: 'Rahmah = mercy and compassion.' },
    { q: 'Best response to a minor mistake?', options: ['Anger','Ignore forever','Gentle counsel','Public blame'], correctIndex: 2, rationale: 'Gentle private counsel is preferred.' },
    { q: 'A Sunnah for spouses is to…', options: ['Compete in sarcasm','Keep score of faults','Speak kindly','Expose errors'], correctIndex: 2, rationale: 'Kind speech is emphasized.' },
  ]
}

export async function getMatches(): Promise<Match[]> {
  return [
    { id: 'u1', name: 'Ayesha', city: 'Karachi', percent: 82, highlights: ['Faith 85%', 'EQ 72%', 'Values 80%'] },
    { id: 'u2', name: 'Fatima', city: 'Lahore', percent: 76, highlights: ['Faith 78%', 'EQ 69%', 'Values 74%'] },
    { id: 'u3', name: 'Zara', city: 'Islamabad', percent: 71, highlights: ['Faith 80%', 'EQ 60%', 'Values 70%'] },
  ]
}

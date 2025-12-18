import { useGame } from '../store/game'
import { useState } from 'react'

export default function Play() {
  const { rounds, roundIndex, score, started, start, choose, reset } = useGame()
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)

  const isOver = roundIndex >= rounds.length
  const current = rounds[roundIndex]

  if (!started)
    return (
      <section className="stack">
        <h2>AI Hunter</h2>
        <p>Hangisi AI tarafından üretilmiş?</p>
        <button className="btn" onClick={start}>Başla</button>
      </section>
    )

  if (isOver)
    return (
      <section className="stack">
        <h2>Oyun Bitti 🎯</h2>
        <p>Toplam skorun: {score} / {rounds.length}</p>
        <button className="btn" onClick={reset}>Yeniden Başla</button>
      </section>
    )

  const handleClick = (i: number) => {
    const picked = current.images[i]
    setSelected(i)
    setResult(picked.isAI ? 'correct' : 'wrong')

    setTimeout(() => {
      setSelected(null)
      setResult(null)
      choose(i)
    }, 700)
  }

  return (
    <section className="stack">
      <h2>Tur {roundIndex + 1} / {rounds.length}</h2>
      <div>Skor: {score}</div>

      <div className="board">
        {current.images.map((img, i) => (
          <button
            key={i}
            className={`card 
              ${selected === i ? 'selected' : ''} 
              ${selected === i && result ? result : ''}
            `}
            onClick={() => handleClick(i)}
          >
            <img src={img.url} alt={`img-${i}`} />
          </button>
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function Play() {

  const rounds = [
    {
      images: [
        { url: 'https://picsum.photos/seed/r1a/800/600', isAI: false },
        { url: 'https://picsum.photos/seed/r1b/800/600', isAI: true }, 
        { url: 'https://picsum.photos/seed/r1c/800/600', isAI: false }
      ]
    },
    {
      images: [
        { url: 'https://picsum.photos/seed/r2a/800/600', isAI: false },
        { url: 'https://picsum.photos/seed/r2b/800/600', isAI: false },
        { url: 'https://picsum.photos/seed/r2c/800/600', isAI: true } 
      ]
    },
    {
      images: [
        { url: 'https://picsum.photos/seed/r3a/800/600', isAI: false },
        { url: 'https://picsum.photos/seed/r3b/800/600', isAI: true }, 
        { url: 'https://picsum.photos/seed/r3c/800/600', isAI: false }
      ]
    }
  ]

  const [roundIndex, setRoundIndex] = useState(0)  
  const [score, setScore] = useState(0)            
  const [selected, setSelected] = useState<number | null>(null)

  const currentRound = rounds[roundIndex]
  const isGameOver = roundIndex >= rounds.length

  function handlePick(i: number) {
    if (isGameOver) return
    setSelected(i)

    const picked = currentRound.images[i]
    if (picked.isAI) {
      setScore(s => s + 1)
    }

    setTimeout(() => {
      setSelected(null)
      setRoundIndex(r => r + 1)
    }, 600)
  }

  if (isGameOver) {
    return (
      <section className="stack">
        <h2>Oyun bitti ✅</h2>
        <p>Toplam skorun: {score} / {rounds.length}</p>
        <button className="btn" onClick={() => {
          setRoundIndex(0)
          setScore(0)
          setSelected(null)
        }}>
          Yeniden Oyna
        </button>
      </section>
    )
  }

  return (
    <section className="stack">
      <h2>Oyun (Hafta 3 - skor & tur)</h2>
      <div>Skor: {score}</div>

      <div className="board">
        {currentRound.images.map((img, i) => (
          <button
            key={i}
            className={`card ${selected === i ? 'selected' : ''}`}
            onClick={() => handlePick(i)}
          >
            <img src={img.url} alt="img" />
          </button>
        ))}
      </div>
    </section>
  )
}

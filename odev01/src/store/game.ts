import { create } from 'zustand'

interface Image {
  url: string
  isAI: boolean
}

interface Round {
  images: Image[]
}

interface GameState {
  rounds: Round[]
  roundIndex: number
  score: number
  started: boolean
  start: () => void
  choose: (index: number) => void
  reset: () => void
}

const initialRounds: Round[] = [
  {
    images: [
      { url: 'https://picsum.photos/seed/r1a/800/600', isAI: false },
      { url: 'https://picsum.photos/seed/r1b/800/600', isAI: true },
      { url: 'https://picsum.photos/seed/r1c/800/600', isAI: false }
    ]
  },
  {
    images: [
      { url: 'https://picsum.photos/seed/r2a/800/600', isAI: true },
      { url: 'https://picsum.photos/seed/r2b/800/600', isAI: false },
      { url: 'https://picsum.photos/seed/r2c/800/600', isAI: false }
    ]
  }
]

export const useGame = create<GameState>((set, get) => ({
  rounds: initialRounds,
  roundIndex: 0,
  score: 0,
  started: false,

  start: () => set({ started: true, roundIndex: 0, score: 0 }),

  choose: (i) => {
    const { rounds, roundIndex } = get()
    const round = rounds[roundIndex]
    const picked = round.images[i]
    const correct = picked.isAI
    set((s) => ({
      score: s.score + (correct ? 1 : 0),
      roundIndex: s.roundIndex + 1
    }))
  },

  reset: () => set({ started: false, score: 0, roundIndex: 0 })
}))

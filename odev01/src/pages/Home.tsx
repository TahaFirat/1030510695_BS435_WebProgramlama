import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [dark, setDark] = useState(true)
  
  function toggleTheme() {
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark')
    setDark(!dark)
  }

  return (
    <section className="stack">
      <h1>AI Hunter</h1>
      <p>Gerçek mi, yapay mı? Görselleri tahmin et.</p>
      <Link className="btn" to="/play">Oyuna Başla</Link>
      <button className="btn secondary" onClick={toggleTheme}>
        Tema: {dark ? 'Koyu' : 'Açık'}
      </button>
    </section>
  )
}

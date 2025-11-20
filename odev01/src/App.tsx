import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="container">
      <header className="topbar">
        <Link to="/" className="brand">AI Hunter</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/play">Play</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

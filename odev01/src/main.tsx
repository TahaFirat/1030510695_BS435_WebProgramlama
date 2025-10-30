import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Play from './pages/Play'
import './style.css'

function Shell() {
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  </main>
</div>
)
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Shell />
    </BrowserRouter>
</React.StrictMode>
)
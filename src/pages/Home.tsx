import { Link } from 'react-router-dom'


export default function Home() {
return (
<section className="stack">
<h1>AI Hunter</h1>
<p>3 görselden birini seç. Şimdilik sadece tıklama çalışıyor; sonraki haftalarda puan vs. eklenecek.</p>
<Link className="btn" to="/play">Başla</Link>
</section>
)
}
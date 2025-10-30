export default function Play(){
    const imgs = [
        'https://picsum.photos/seed/p1/800/600',
        'https://picsum.photos/seed/p2/800/600',
        'https://picsum.photos/seed/p3/800/600'
    ]

return (
    <section className="stack">

        <h2> minimal</h2>
        <div className="board">
            {imgs.map((src, i)=>(
                <button key={i} className="card" onClick={()=>alert('Choosed (scores not available yet)')}>
                    <img src={src} alt={`placeholder-${i + 1}`} />
                </button>
            ))}
        </div>
    </section>
)
}
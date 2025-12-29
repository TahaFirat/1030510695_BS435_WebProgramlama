import { useGame } from '../context/GameContext';
import './GameModeSelector.css';

const GameModeSelector = () => {
    const { startGame } = useGame();

    const modes = [
        {
            id: 'classic',
            title: 'Klasik Mod',
            icon: '🎯',
            description: 'Sınırsız süre ile oyna. Her doğru tahminde puan kazan.',
            features: ['Süre sınırı yok', 'Tüm kategoriler', 'İpucu sistemi']
        },
        {
            id: 'timeChallenge',
            title: 'Zamana Karşı',
            icon: '⏱️',
            description: '30 saniye içinde doğru tahmini yap. Hızlı düşün!',
            features: ['30 saniye süre', 'Bonus puanlar', 'Yüksek adrenalin']
        },
        {
            id: 'category',
            title: 'Kategori Modu',
            icon: '🎨',
            description: 'Belirli bir kategori seç ve uzmanlaş.',
            features: ['Özel kategoriler', 'Odaklanmış oyun', 'Kategori ipuçları']
        }
    ];

    const handleModeSelect = (modeId) => {
        if (modeId === 'category') {
            // For category mode, we'll show category selection
            // For now, let's default to portraits
            const categories = ['portraits', 'landscapes', 'art'];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            startGame(modeId, randomCategory);
        } else {
            startGame(modeId);
        }
    };

    return (
        <div className="mode-selector">
            <div className="mode-selector-content">
                <h2 className="mode-title">
                    <span className="gradient-text">Oyun Modunu Seç</span>
                </h2>

                <p className="mode-subtitle">
                    Hangi moda göre oynamak istersiniz?
                </p>

                <div className="modes-grid">
                    {modes.map((mode) => (
                        <div
                            key={mode.id}
                            className="mode-card"
                            onClick={() => handleModeSelect(mode.id)}
                        >
                            <div className="mode-icon">{mode.icon}</div>
                            <h3 className="mode-card-title">{mode.title}</h3>
                            <p className="mode-card-description">{mode.description}</p>

                            <ul className="mode-features">
                                {mode.features.map((feature, index) => (
                                    <li key={index}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="mode-select-button">
                                Seç
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameModeSelector;

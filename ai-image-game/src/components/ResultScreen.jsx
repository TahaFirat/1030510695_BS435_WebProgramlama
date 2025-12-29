import { useGame } from '../context/GameContext';
import './ResultScreen.css';

const ResultScreen = () => {
    const { gameResult, score, attempt, currentRound, nextRound, changeMode, resetGame } = useGame();

    const isSuccess = gameResult === 'success';

    return (
        <div className="result-screen">
            <div className="result-content">
                <div className={`result-icon ${isSuccess ? 'success' : 'failure'}`}>
                    {isSuccess ? (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="38" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="2" />
                            <path d="M25 40L35 50L55 30" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="38" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2" />
                            <path d="M30 30L50 50M50 30L30 50" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    )}
                </div>

                <h2 className={`result-title ${isSuccess ? 'success' : 'failure'}`}>
                    {isSuccess ? '🎉 Tebrikler!' : '😔 Maalesef!'}
                </h2>

                <p className="result-message">
                    {isSuccess
                        ? `${attempt === 0 ? 'İlk denemede' : 'İkinci denemede'} doğru tahmini yaptınız!`
                        : 'AI üretimi görseli bulamadınız.'
                    }
                </p>

                <div className="result-details">
                    <div className="detail-card">
                        <div className="detail-icon">🎯</div>
                        <div className="detail-info">
                            <span className="detail-label">Doğru Cevap</span>
                            <span className="detail-value">Görsel #{currentRound.aiImageIndex + 1}</span>
                        </div>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon">⭐</div>
                        <div className="detail-info">
                            <span className="detail-label">Toplam Puan</span>
                            <span className="detail-value">{score}</span>
                        </div>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon">🔄</div>
                        <div className="detail-info">
                            <span className="detail-label">Deneme Sayısı</span>
                            <span className="detail-value">{attempt + 1}/2</span>
                        </div>
                    </div>
                </div>

                {!isSuccess && (
                    <div className="explanation-box">
                        <h4>💡 İpucu</h4>
                        <p>{currentRound.hint}</p>
                    </div>
                )}

                <div className="result-actions">
                    <button className="action-button primary" onClick={nextRound}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Yeni Tur
                    </button>

                    <button className="action-button secondary" onClick={changeMode}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3 10H11M11 10L8 7M11 10L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 10H13M13 10L16 7M13 10L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Mod Değiştir
                    </button>

                    <button className="action-button tertiary" onClick={resetGame}>
                        Ana Menü
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;

import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import ImageCard from './ImageCard';
import HintSystem from './HintSystem';
import './GameScreen.css';

const GameScreen = () => {
    const {
        currentRound,
        score,
        attempt,
        showHint,
        gameMode,
        timeLeft,
        setTimeLeft,
        makeGuess,
        disabledImages,
        setShowHint
    } = useGame();

    // Timer effect for time challenge mode
    useEffect(() => {
        if (gameMode === 'timeChallenge' && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [gameMode, timeLeft, setTimeLeft]);

    if (!currentRound) {
        return <div className="loading">Yükleniyor...</div>;
    }

    const getModeLabel = () => {
        switch (gameMode) {
            case 'classic': return '🎯 Klasik Mod';
            case 'timeChallenge': return '⏱️ Zamana Karşı';
            case 'category': return `🎨 ${currentRound.category}`;
            default: return 'Oyun';
        }
    };

    return (
        <div className="game-screen">
            <div className="game-header">
                <div className="game-info">
                    <div className="mode-badge">{getModeLabel()}</div>
                    <div className="score-display">
                        <span className="score-label">Puan:</span>
                        <span className="score-value">{score}</span>
                    </div>
                    {gameMode === 'timeChallenge' && (
                        <div className={`timer ${timeLeft <= 10 ? 'timer-warning' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>{timeLeft}s</span>
                        </div>
                    )}
                </div>

                <div className="attempt-indicator">
                    <span>Deneme: {attempt + 1}/2</span>
                </div>
            </div>

            <div className="game-content">
                <h2 className="game-question">
                    Hangi görsel AI tarafından üretildi?
                </h2>

                <div className="images-grid">
                    {currentRound.images.map((image, index) => (
                        <ImageCard
                            key={image.id}
                            image={image}
                            index={index}
                            onSelect={makeGuess}
                            disabled={disabledImages.includes(index)}
                        />
                    ))}
                </div>

                {showHint && (
                    <HintSystem
                        hint={currentRound.hint}
                        onClose={() => setShowHint(false)}
                    />
                )}
            </div>

            {timeLeft === 0 && gameMode === 'timeChallenge' && (
                <div className="timeout-message">
                    <p>⏰ Süre doldu! Doğru cevap gösteriliyor...</p>
                </div>
            )}
        </div>
    );
};

export default GameScreen;

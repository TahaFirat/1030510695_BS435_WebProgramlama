import { useGame } from '../context/GameContext';
import './ImageCard.css';

const ImageCard = ({ image, index, onSelect, disabled }) => {
    const { gameResult, currentRound } = useGame();

    const isCorrectAnswer = gameResult && currentRound.aiImageIndex === index;
    const isWrongAnswer = gameResult && currentRound.aiImageIndex !== index;

    return (
        <div
            className={`image-card ${disabled ? 'disabled' : ''} ${isCorrectAnswer ? 'correct' : ''} ${isWrongAnswer ? 'wrong' : ''}`}
            onClick={() => !disabled && !gameResult && onSelect(index)}
        >
            <div className="image-wrapper">
                <img src={image.url} alt={`Görsel ${index + 1}`} />

                {gameResult && (
                    <div className="result-overlay">
                        {isCorrectAnswer && (
                            <div className="result-badge correct-badge">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="22" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
                                    <path d="M14 24L20 30L34 16" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>AI Üretimi</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="image-number">#{index + 1}</div>
        </div>
    );
};

export default ImageCard;

import { createContext, useContext, useState } from 'react';
import { getRandomRound, getRandomRoundByCategory } from '../data/imageData';

const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within GameProvider');
    }
    return context;
};

export const GameProvider = ({ children }) => {
    const [gamePhase, setGamePhase] = useState('welcome'); // welcome, modeSelection, playing, result
    const [gameMode, setGameMode] = useState(null); // classic, timeChallenge, category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentRound, setCurrentRound] = useState(null);
    const [score, setScore] = useState(0);
    const [attempt, setAttempt] = useState(0); // 0: no attempt, 1: first attempt, 2: second attempt
    const [selectedImage, setSelectedImage] = useState(null);
    const [showHint, setShowHint] = useState(false);
    const [gameResult, setGameResult] = useState(null); // 'success' or 'failure'
    const [timeLeft, setTimeLeft] = useState(30);
    const [disabledImages, setDisabledImages] = useState([]);

    const startGame = (mode, category = null) => {
        setGameMode(mode);
        setSelectedCategory(category);
        setScore(0);
        setAttempt(0);
        setShowHint(false);
        setGameResult(null);
        setDisabledImages([]);

        // Load first round
        let round;
        if (category) {
            round = getRandomRoundByCategory(category);
        } else {
            round = getRandomRound();
        }

        setCurrentRound(round);
        setGamePhase('playing');

        // Start timer for time challenge mode
        if (mode === 'timeChallenge') {
            setTimeLeft(30);
        }
    };

    const makeGuess = (imageIndex) => {
        if (attempt >= 2 || gameResult) return; // Already finished

        setSelectedImage(imageIndex);
        const isCorrect = currentRound.aiImageIndex === imageIndex;

        if (isCorrect) {
            // Correct guess
            const points = attempt === 0 ? 100 : 50;
            setScore(score + points);
            setGameResult('success');
            setGamePhase('result');
        } else {
            // Wrong guess
            if (attempt === 0) {
                // First attempt failed, show hint
                setAttempt(1);
                setShowHint(true);
                setDisabledImages([imageIndex]);
            } else {
                // Second attempt failed
                setGameResult('failure');
                setGamePhase('result');
            }
        }
    };

    const nextRound = () => {
        setAttempt(0);
        setShowHint(false);
        setGameResult(null);
        setSelectedImage(null);
        setDisabledImages([]);

        let round;
        if (selectedCategory) {
            round = getRandomRoundByCategory(selectedCategory);
        } else {
            round = getRandomRound();
        }

        setCurrentRound(round);
        setGamePhase('playing');

        if (gameMode === 'timeChallenge') {
            setTimeLeft(30);
        }
    };

    const resetGame = () => {
        setGamePhase('welcome');
        setGameMode(null);
        setSelectedCategory(null);
        setCurrentRound(null);
        setScore(0);
        setAttempt(0);
        setSelectedImage(null);
        setShowHint(false);
        setGameResult(null);
        setTimeLeft(30);
        setDisabledImages([]);
    };

    const changeMode = () => {
        setGamePhase('modeSelection');
        setGameMode(null);
        setSelectedCategory(null);
        setCurrentRound(null);
        setAttempt(0);
        setSelectedImage(null);
        setShowHint(false);
        setGameResult(null);
        setDisabledImages([]);
    };

    const goToModeSelection = () => {
        setGamePhase('modeSelection');
    };

    const value = {
        gamePhase,
        gameMode,
        selectedCategory,
        currentRound,
        score,
        attempt,
        selectedImage,
        showHint,
        gameResult,
        timeLeft,
        disabledImages,
        setTimeLeft,
        startGame,
        makeGuess,
        nextRound,
        resetGame,
        changeMode,
        goToModeSelection
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

import { GameProvider, useGame } from './context/GameContext';
import WelcomeScreen from './components/WelcomeScreen';
import GameModeSelector from './components/GameModeSelector';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

const AppContent = () => {
  const { gamePhase } = useGame();

  return (
    <div className="app">
      <div className="app-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="app-container">
        {gamePhase === 'welcome' && <WelcomeScreen />}
        {gamePhase === 'modeSelection' && <GameModeSelector />}
        {gamePhase === 'playing' && <GameScreen />}
        {gamePhase === 'result' && <ResultScreen />}
      </div>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;

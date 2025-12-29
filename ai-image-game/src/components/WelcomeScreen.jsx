import { useGame } from '../context/GameContext';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
    const { goToModeSelection } = useGame();

    return (
        <div className="welcome-screen">
            <div className="welcome-content">
                <h1 className="welcome-title">
                    <span className="gradient-text">AI Görsel Dedektifi</span>
                </h1>

                <p className="welcome-subtitle">
                    Gerçek mi? Yapay mı? Siz karar verin!
                </p>

                <div className="welcome-description">
                    <p>
                        Modern dünyada AI-generated içeriklerin yaygınlaşmasıyla birlikte,
                        gerçek ve yapay içerikleri ayırt etme becerisi kritik hale gelmiştir.
                    </p>
                    <p>
                        Bu oyunda size sunulan üç görsel arasından hangisinin yapay zeka
                        tarafından üretildiğini bulmaya çalışacaksınız.
                    </p>
                </div>

                <div className="rules-box">
                    <h3>🎮 Oyun Kuralları</h3>
                    <ul>
                        <li>Size 3 görsel sunulacak (2 gerçek, 1 AI üretimi)</li>
                        <li>AI tarafından üretildiğini düşündüğünüz görseli seçin</li>
                        <li>İlk tahmininiz yanlışsa, size ipucu verilecek</li>
                        <li>İkinci bir tahmin hakkınız olacak</li>
                        <li>Doğru tahmin: 100 puan (ilk denemede), 50 puan (ikinci denemede)</li>
                    </ul>
                </div>

                <button className="start-button" onClick={goToModeSelection}>
                    <span>Oyuna Başla</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="welcome-footer">
                    <p>Gözlem gücünüzü test edin ve AI'ı yakalayın! 🔍</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;

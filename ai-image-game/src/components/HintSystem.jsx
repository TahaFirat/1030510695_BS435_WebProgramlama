import './HintSystem.css';

const HintSystem = ({ hint, onClose }) => {
    return (
        <div className="hint-system">
            <div className="hint-content">
                <div className="hint-header">
                    <div className="hint-icon">💡</div>
                    <h3>İpucu</h3>
                    <button className="hint-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <p className="hint-text">{hint}</p>
            </div>
        </div>
    );
};

export default HintSystem;

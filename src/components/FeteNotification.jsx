import { useState } from 'react';

function FeteNotification() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[9998] animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-5 w-80 relative">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 w-6 h-6 bg-white/20 hover:bg-white/30 hover:border-orange-500 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                    X
                </button>

                <div className="pr-6">

                    <div className="text-4xl mb-3 text-center">
                        🎄✨🎅
                    </div>

                    <h3 className="text-lg font-bold text-white text-center mb-2 drop-shadow-lg">
                        Joyeuses Fêtes ! 🎉
                    </h3>

                    <p className="text-white/80 text-sm text-center leading-relaxed drop-shadow-md">
                        Je vous souhaite un merveilleux Noël et une excellente année 2025 en avance ! 🎊
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeteNotification;
import { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import wallpaper1 from '../assets/wallpapers/nuageguy.jpg';
import wallpaper2 from '../assets/wallpapers/nuageguy2.jpg';
import wallpaper3 from '../assets/wallpapers/fleurs.jpg';
import wallpaper4 from '../assets/wallpapers/wallpaper.jpg';

const wallpapers = [
    { id: 1, name: 'Nuages', path: wallpaper1 },
    { id: 2, name: 'Nuages 2', path: wallpaper2 },
    { id: 3, name: 'Fleurs', path: wallpaper3 },
    { id: 4, name: 'Wallpaper', path: wallpaper4 },
];

function Wallpaper({ currentWallpaper, onWallpaperChange, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(
        wallpapers.findIndex(w => w.path === currentWallpaper) >= 0 
            ? wallpapers.findIndex(w => w.path === currentWallpaper) 
            : 0
    );

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? wallpapers.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        onWallpaperChange(wallpapers[newIndex].path); 
    };

    const handleNext = () => {
        const newIndex = currentIndex === wallpapers.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        onWallpaperChange(wallpapers[newIndex].path); 
    };

    const handleSelectWallpaper = (index) => {
        setCurrentIndex(index);
        onWallpaperChange(wallpapers[index].path); 
    };

    return (
        <div 
            className="fixed inset-0 z-[9999]"
            onClick={onClose}
        >
            {/* fenetre transparente */}
            <div 
                className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 w-[500px]"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold text-white mb-4 text-center drop-shadow-lg">
                    Fond d'écran
                </h2>

                {/* carrousel */}
                <div className="relative flex items-center justify-center gap-3 mb-4">
                    {/* fleche gauche */}
                    <button
                        onClick={handlePrevious}
                        className="flex-shrink-0 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                        aria-label="Fond d'écran précédent"
                    >
                        <p className="text-white text-xl" > {'<'} </p>
                    </button>

                    {/* apercu */}
                    <div className="flex-1">
                        <div className="relative aspect-video rounded-xl overflow-hidden border-3 border-white/30 shadow-xl">
                            <img
                                src={wallpapers[currentIndex].path}
                                alt={wallpapers[currentIndex].name}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                <p className="text-white text-sm font-semibold text-center drop-shadow-lg">
                                    {wallpapers[currentIndex].name}
                                </p>
                            </div>
                        </div>

                        {/* points */}
                        <div className="flex justify-center gap-1.5 mt-3">
                            {wallpapers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectWallpaper(index)} 
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-white w-6'
                                            : 'bg-white/40 hover:bg-white/60'
                                    }`}
                                    aria-label={`Aller au fond d'écran ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* fleche droite */}
                    <button
                        onClick={handleNext}
                        className="flex-shrink-0 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                        aria-label="Fond d'écran suivant"
                    >
                        <p className="text-white text-xl" > {'>'} </p>
                    </button>
                </div>

                {/* compteur */}
                <p className="text-white/70 text-xs text-center mt-2">
                    {currentIndex + 1} / {wallpapers.length}
                </p>
            </div>
        </div>
    );
}

export default Wallpaper;
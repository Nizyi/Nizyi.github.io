import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';
import FeteNotification from './components/FeteNotification';

import defaultWallpaper from './assets/wallpapers/nuageguy2.jpg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [wallpaper, setWallpaper] = useState(defaultWallpaper);

  const handleLogin = () => {
    setIsLoggedIn(true);

    setTimeout(() => {
      setShowDesktop(true);
    }, 700); 
  };

  const handleWallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper);
  };

  return (
    <div 
      className="fixed inset-0 bg-center bg-cover flex items-center justify-center transition-all duration-500"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="relative w-screen h-screen overflow-hidden">
          <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                isLoggedIn ? '-translate-y-full' : 'translate-y-0'
          }`}
          >
          <LoginScreen onLogin={handleLogin} />
          </div>
          {showDesktop && (
            <div className="absolute inset-0 animate-fadeIn">
              <Desktop onWallpaperChange={handleWallpaperChange} currentWallpaper={wallpaper} />
            </div>
          )}
      </div>
      {showDesktop && <FeteNotification />}
    </div>
  );
}

export default App;
import Dock from './Dock';
import TopBar from './TopBar';
import FileSystemManager from './FileManager';
import { useState } from 'react';
import { dockItems, iconComponents } from './config/apps';

function Desktop() {
  const [appFocus, setAppFocus] = useState(null);

  return (
    <div className="relative h-screen w-screen">
      <TopBar focusedApp={appFocus} />
      
      <FileSystemManager onAppFocus={setAppFocus} />
      
      <Dock 
        items={dockItems.map(item => {
          const IconComponent = iconComponents[item.iconName];
          return {
            ...item,
            icon: IconComponent ? <IconComponent size={18} /> : null,
            onClick: () => {
              // Pour l'instant vide, à connecter plus tard
            }
          };
        })}
        panelHeight={30}
        baseItemSize={60}
        magnification={70}
      />
    </div>
  );
}

export default Desktop;
import Dock from './Dock';
import TopBar from './TopBar';
import { useState } from 'react';
import { dockItems, iconComponents, appsConfig, getItemsInFolder } from './config/apps';
import AppIcons from './AppIcons';
import Window from './Window';

function Desktop() {
  const [appFocus, setAppFocus] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);

  const getMaxZIndex = () => {
    if (openWindows.length === 0) return 0;
    return Math.max(...openWindows.map(w => w.zIndex || 0));
  };

  const bringToFront = (windowId) => {
    setOpenWindows(openWindows.map(window =>
      window.id === windowId
        ? { ...window, zIndex: getMaxZIndex() + 1 }
        : window
    ));
  };

  const handleOpenApp = (appName) => {
    const alreadyOpen = openWindows.find(w => w.type === 'app' && w.appName === appName);
    if (alreadyOpen) {
      bringToFront(alreadyOpen.id);
      setAppFocus(appName);
      return;
    }

    setOpenWindows([...openWindows, {
      id: Date.now(),
      type: 'app',
      title: appName,
      appName,
      zIndex: getMaxZIndex() + 1,
    }]);
    setAppFocus(appName);
  };

  const handleOpenFolder = (folderName, folderPath) => {
    const alreadyOpen = openWindows.find(w => w.type === 'folder' && w.folderPath === folderPath);
    if (alreadyOpen) {
      bringToFront(alreadyOpen.id);
      setAppFocus(folderName);
      return;
    }

    setOpenWindows([...openWindows, {
      id: Date.now(),
      type: 'folder',
      title: folderName,
      folderPath,
      zIndex: getMaxZIndex() + 1,
    }]);
    setAppFocus(folderName);
  };

  const handleCloseWindow = (windowId) => {
    setAppFocus(null);
    setOpenWindows(openWindows.filter(window => window.id !== windowId));
  };

  const handleWindowFocus = (windowId, title) => {
    bringToFront(windowId);
    setAppFocus(title);
  };

  const handleItemClick = (item) => {
    if (item.type === 'app') {
      handleOpenApp(item.name);
    } else if (item.type === 'folder') {
      handleOpenFolder(item.name, item.path + '/' + item.name);
    }
  };

  const desktopItems = getItemsInFolder('/Desktop');
  const itemsForDisplay = desktopItems.map(item => {
    const IconComponent = iconComponents[item.iconName];
    return {
      icon: IconComponent ? <IconComponent size={34} /> : null,
      label: item.name,
      onClick: () => handleItemClick(item)
    };
  });

  return (
    <div className="relative h-screen w-screen">
      <TopBar focusedApp={appFocus} />

      {/* Icônes du Desktop */}
      <div className="pt-10 flex justify-start pl-4">
        <div className="w-fit">
          <AppIcons items={itemsForDisplay} />
        </div>
      </div>

      {/* Fenêtres ouvertes */}
      {openWindows.map(window => (
        <Window
          key={window.id}
          windowType={window.type}
          title={window.title}
          appName={window.type === 'app' ? window.appName : undefined}
          folderPath={window.type === 'folder' ? window.folderPath : undefined}
          onClose={() => handleCloseWindow(window.id)}
          onFocus={() => handleWindowFocus(window.id, window.title)}
          onItemClick={handleItemClick}
          zIndex={window.zIndex}
        />
      ))}

      {/* Dock */}
      <Dock
        items={dockItems.map(item => {
          const IconComponent = iconComponents[item.iconName];
          return {
            ...item,
            icon: IconComponent ? <IconComponent size={18} /> : null,
            onClick: () => {
              if (!item.appName) return; // Bouton inactif (Home)

              if (item.type === 'app') {
                handleOpenApp(item.appName);
              } else if (item.type === 'folder') {
                const folderConfig = appsConfig[item.appName];
                handleOpenFolder(folderConfig.name, folderConfig.path + '/' + folderConfig.name);
              }
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
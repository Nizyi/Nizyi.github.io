import Dock from "./Dock";
import TopBar from "./TopBar";
import { useState } from "react";
import {
  dockItems,
  iconComponents,
  appsConfig,
  getItemsInFolder,
} from "./config/apps";
import AppIcons from "./AppIcons";
import Window from "./Window";
import Wallpaper from "./Wallpaper"; 

function Desktop({ onWallpaperChange, currentWallpaper }) {
  const [appFocus, setAppFocus] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [showWallpaper, setShowWallpaper] = useState(false); 

  const getMaxZIndex = () => {
    if (openWindows.length === 0) return 0;
    return Math.max(...openWindows.map((w) => w.zIndex || 0));
  };

  const bringToFront = (windowId) => {
    setOpenWindows(
      openWindows.map((window) =>
        window.id === windowId
          ? { ...window, zIndex: getMaxZIndex() + 1 }
          : window,
      ),
    );
  };

  const handleOpenApp = (appName) => {
    if (appName === "Wallpaper") {
      setShowWallpaper(true);
      return;
    }

    const alreadyOpen = openWindows.find(
      (w) => w.type === "app" && w.appName === appName,
    );
    if (alreadyOpen) {
      bringToFront(alreadyOpen.id);
      setAppFocus(appName);
      return;
    }

    setOpenWindows([
      ...openWindows,
      {
        id: Date.now(),
        type: "app",
        title: appName,
        appName,
      },
    ]);
    setAppFocus(appName);
  };

  const handleOpenFolder = (folderName, folderPath) => {
    const alreadyOpen = openWindows.find(
      (w) => w.type === "folder" && w.folderPath === folderPath,
    );
    if (alreadyOpen) {
      bringToFront(alreadyOpen.id);
      setAppFocus(folderName);
      return;
    }

    setOpenWindows([
      ...openWindows,
      {
        id: Date.now(),
        type: "folder",
        title: folderName,
        folderPath,
        history: [folderPath],
        historyIndex: 0,
        zIndex: getMaxZIndex() + 1,
      },
    ]);
    setAppFocus(folderName);
  };

  const handleCloseWindow = (windowId) => {
    setAppFocus(null);
    setOpenWindows(openWindows.filter((window) => window.id !== windowId));
  };

  const handleWindowFocus = (windowId, title) => {
    bringToFront(windowId);
    setAppFocus(title);
  };

  const handleItemClick = (item, windowId = null) => {
    if (item.type === "app") {
      handleOpenApp(item.name);
    } else if (item.type === "folder") {
      const newPath = item.path + "/" + item.name;

      if (windowId) {
        handleFolderNavigation(windowId, newPath);
      } else {
        handleOpenFolder(item.name, newPath);
      }
    }
  };

  const desktopItems = getItemsInFolder("/Desktop");
  const itemsForDisplay = desktopItems.map((item) => {
    const IconComponent = iconComponents[item.iconName];
    return {
      icon: IconComponent ? <IconComponent size={34} /> : null,
      label: item.name,
      onClick: () => handleItemClick(item),
    };
  });

  const handleFolderNavigation = (windowId, newPath) => {
    setOpenWindows(
      openWindows.map((window) => {
        if (window.id !== windowId) return window;

        const newHistory = [
          ...window.history.slice(0, window.historyIndex + 1),
          newPath,
        ];
        return {
          ...window,
          folderPath: newPath,
          history: newHistory,
          historyIndex: newHistory.length - 1,
        };
      }),
    );

    setAppFocus(newPath.split("/").pop());
  };

  const handleGoBack = (windowId) => {
    setOpenWindows(
      openWindows.map((window) => {
        if (window.id !== windowId || window.historyIndex === 0) return window;

        const newIndex = window.historyIndex - 1;
        return {
          ...window,
          folderPath: window.history[newIndex],
          historyIndex: newIndex,
        };
      }),
    );
  };

  const handleGoForward = (windowId) => {
    setOpenWindows(
      openWindows.map((window) => {
        if (
          window.id !== windowId ||
          window.historyIndex >= window.history.length - 1
        )
          return window;

        const newIndex = window.historyIndex + 1;
        return {
          ...window,
          folderPath: window.history[newIndex],
          historyIndex: newIndex,
        };
      }),
    );
  };

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
      {openWindows.map((window) => (
        <Window
          key={window.id}
          windowType={window.type}
          title={window.title}
          appName={window.type === "app" ? window.appName : undefined}
          folderPath={window.type === "folder" ? window.folderPath : undefined}
          canGoBack={window.history ? window.historyIndex > 0 : false}
          canGoForward={
            window.history
              ? window.historyIndex < window.history.length - 1
              : false
          }
          onGoBack={() => handleGoBack(window.id)}
          onGoForward={() => handleGoForward(window.id)}
          onClose={() => handleCloseWindow(window.id)}
          onFocus={() => handleWindowFocus(window.id, window.title)}
          onItemClick={(item) => handleItemClick(item, window.id)}
          zIndex={window.zIndex}
        />
      ))}

      {showWallpaper && (
        <Wallpaper
          onWallpaperChange={onWallpaperChange}
          currentWallpaper={currentWallpaper}
          onClose={() => setShowWallpaper(false)}
        />
      )}

      {/* Dock */}
      <Dock
        items={dockItems.map((item) => {
          const IconComponent = iconComponents[item.iconName];
          return {
            ...item,
            icon: IconComponent ? <IconComponent size={18} /> : null,
            onClick: () => {
              if (!item.appName) return;

              if (item.type === "app") {
                handleOpenApp(item.appName);
              } else if (item.type === "folder") {
                const folderConfig = appsConfig[item.appName];
                handleOpenFolder(
                  folderConfig.name,
                  folderConfig.path + "/" + folderConfig.name,
                );
              }
            },
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

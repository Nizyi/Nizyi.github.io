import { useState } from 'react';
import AppIcons from './AppIcons';
import Window from './Window';
import { getItemsInFolder, iconComponents } from './config/apps';

function FileSystemManager({ onAppFocus }) {
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
            onAppFocus(appName);
            return;
        }
        
        setOpenWindows([...openWindows, { 
            id: Date.now(), 
            type: 'app',
            title: appName,
            appName,
            zIndex: getMaxZIndex() + 1,
        }]);
        onAppFocus(appName);
    };

    const handleOpenFolder = (folderName, folderPath) => {
        const alreadyOpen = openWindows.find(w => w.type === 'folder' && w.folderPath === folderPath);
        if (alreadyOpen) {
            bringToFront(alreadyOpen.id);
            onAppFocus(folderName);
            return;
        }

        setOpenWindows([...openWindows, { 
            id: Date.now(), 
            type: 'folder',
            title: folderName,
            folderPath,
            zIndex: getMaxZIndex() + 1,
        }]);
        onAppFocus(folderName);
    };

    const handleCloseWindow = (windowId) => {
        onAppFocus(null);
        setOpenWindows(openWindows.filter(window => window.id !== windowId));
    };

    const handleWindowFocus = (windowId, title) => {
        bringToFront(windowId);
        onAppFocus(title);
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
        <>
            <div className="pt-10 flex justify-start pl-4">
                <div className="w-fit">
                    <AppIcons items={itemsForDisplay} />
                </div>
            </div>

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
        </>
    );
}

export default FileSystemManager;
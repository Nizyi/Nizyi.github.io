import { useState } from 'react';
import AppIcons from './AppIcons';
import Window from './Window';
import { getItemsInFolder, iconComponents } from './config/apps';

function FileSystemManager({ onAppFocus }) {
    const [openWindows, setOpenWindows] = useState([]);

    const handleOpenApp = (appName) => {
        const alreadyOpen = openWindows.find(w => w.type === 'app' && w.appName === appName);
        if (alreadyOpen) {
            onAppFocus(appName);
            return;
        }
        
        setOpenWindows([...openWindows, { 
            id: Date.now(), 
            type: 'app',
            title: appName,
            appName 
        }]);
        onAppFocus(appName);
    };

    const handleOpenFolder = (folderName, folderPath) => {
        const alreadyOpen = openWindows.find(w => w.type === 'folder' && w.folderPath === folderPath);
        if (alreadyOpen) {
            onAppFocus(folderName);
            return;
        }

        setOpenWindows([...openWindows, { 
            id: Date.now(), 
            type: 'folder',
            title: folderName,
            folderPath 
        }]);
        onAppFocus(folderName);
    };

    const handleCloseWindow = (windowId) => {
        onAppFocus(null);
        setOpenWindows(openWindows.filter(window => window.id !== windowId));
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
                    onFocus={() => onAppFocus(window.title)}
                    onItemClick={handleItemClick}
                />
            ))}
        </>
    );
}

export default FileSystemManager;
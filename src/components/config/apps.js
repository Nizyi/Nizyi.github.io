import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscFolder } from 'react-icons/vsc';

// Mapping des icônes
export const iconComponents = {
    VscHome,
    VscArchive,
    VscAccount,
    VscSettingsGear,
    VscFolder,
};

export const appsConfig = {

    Projects: {
        id: 'folder-projects',
        name: 'Projects',
        type: 'folder',
        iconName: 'VscFolder',
        path: '/Desktop',
        isPermanent: true,
        children: ['test-app', 'portfolioos-app'], 
    },

    Test: {
        id: 'test-app',
        name: 'Test',
        type: 'app',
        iconName: 'VscHome',
        component: 'Test',
        path: '/Desktop/Projects', 
        isPermanent: true,
    },
    Cv: {
        id: 'cv-app',
        name: 'Cv',
        type: 'app',
        iconName: 'VscAccount',
        component: 'Cv',
        path: '/Desktop', 
        isPermanent: true,
    },
    NextFeatures: {
        id: 'nextfeatures-app',
        name: 'NextFeatures',
        type: 'app',
        iconName: 'VscAccount',
        component: 'NextFeatures',
        path: '/Desktop', 
        isPermanent: true,
    },
    PortfolioOS: {
        id: 'portfolioos-app',
        name: 'PortfolioOS',
        type: 'app',
        iconName: 'VscAccount',
        component: 'PortfolioOS',
        path: '/Desktop/Projects', 
        isPermanent: true,
    },
};

// Configuration pour le Dock
export const dockItems = [
    {
        iconName: 'VscHome',
        label: 'Home',
        appName: 'Test'
    },
    {
        iconName: 'VscArchive',
        label: 'Archive',
        appName: 'Archive'
    },
    {
        iconName: 'VscAccount',
        label: 'Profile',
        appName: 'Cv'
    },
    {
        iconName: 'VscSettingsGear',
        label: 'Settings',
        appName: 'Settings'
    },
];

// Fonction utilitaire pour récupérer les items d'un dossier
export const getItemsInFolder = (folderPath) => {
    return Object.values(appsConfig).filter(item => item.path === folderPath);
};
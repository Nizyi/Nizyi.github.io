import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscRocket, VscFolder, VscEdit } from 'react-icons/vsc';

export const iconComponents = {
    VscHome,
    VscArchive,
    VscAccount,
    VscSettingsGear,
    VscFolder,
    VscEdit,
    VscRocket,
};

export const appsConfig = {

    Projects: {
        id: 'folder-projects',
        name: 'Projects',
        type: 'folder',
        iconName: 'VscFolder',
        path: '/Desktop',
        isPermanent: true,    
    },

    Web: {
        id: 'folder-web',
        name: 'Web',
        type: 'folder',
        iconName: 'VscFolder',
        path: '/Desktop/Projects',
        isPermanent: true,
    },

    Dev: {
        id: 'folder-dev',
        name: 'Dev',
        type: 'folder',
        iconName: 'VscFolder',
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
        iconName: 'VscEdit',
        component: 'NextFeatures',
        path: '/Desktop',
        isPermanent: true,
    },
    PortfolioOS: {
        id: 'portfolioos-app',
        name: 'PortfolioOS',
        type: 'app',
        iconName: 'VscRocket',
        component: 'PortfolioOS',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    OuterWilds: {
        id: 'outerwilds-app',
        name: 'OuterWilds',
        type: 'app',
        iconName: 'VscRocket',
        component: 'OuterWilds',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    Superette: {
        id: 'superette-app',
        name: 'Superette',
        type: 'app',
        iconName: 'VscRocket',
        component: 'Superette',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    SearchEngine: {
        id: 'searchengine-app',
        name: 'SearchEngine',
        type: 'app',
        iconName: 'VscRocket',
        component: 'SearchEngine',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Labyrinthe: {
        id: 'labyrinthe-app',
        name: 'Labyrinthe',
        type: 'app',
        iconName: 'VscRocket',
        component: 'Labyrinthe',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Ams: {
        id: 'ams-app',
        name: 'Ams',
        type: 'app',
        iconName: 'VscRocket',
        component: 'Ams',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Compilateur: {
        id: 'compilateur-app',
        name: 'Compilateur',
        type: 'app',
        iconName: 'VscRocket',
        component: 'Compilateur',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Chill2gether: {
        id: 'chill2gether-app',
        name: 'Chill2gether',
        type: 'app',
        iconName: 'VscRocket',
        component: 'Chill2gether',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    CERICar: {
        id: 'cericar-app',
        name: 'CERICar',
        type: 'app',
        iconName: 'VscRocket',
        component: 'CERICar',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
};

// Configuration pour le Dock
export const dockItems = [
    {
        iconName: 'VscHome',
        label: 'Home',
        appName: null,
        type: 'button'
    },
    {
        iconName: 'VscFolder',
        label: 'Projects',
        appName: 'Projects',
        type: 'folder'
    },
    {
        iconName: 'VscAccount',
        label: 'CV',
        appName: 'Cv',
        type: 'app'
    },
    {
        iconName: 'VscEdit',
        label: 'Next Features',
        appName: 'NextFeatures',
        type: 'app'
    }
];

// Fonction utilitaire pour récupérer les items d'un dossier
export const getItemsInFolder = (folderPath) => {
    return Object.values(appsConfig).filter(item => item.path === folderPath);
};
import { FcFolder, FcFile, FcTodoList, FcShop, FcSearch, FcPuzzle, FcCommandLine, FcCollaboration, FcShipped, FcVideoCall, FcGallery } from "react-icons/fc";
import logoAuriel from '../../assets/logo_temp.png';
import logoOuterWilds from '../../assets/outerwilds_logo.png';

export const iconComponents = {
    FcFolder,
    FcFile,
    FcTodoList,
    FcShop,
    FcSearch,
    FcPuzzle,
    FcCommandLine,
    FcCollaboration,
    FcShipped,
    FcVideoCall,
    FcGallery,
    logoAuriel,
    logoOuterWilds
};

export const appsConfig = {

    Projects: {
        id: 'folder-projects',
        name: 'Projects',
        type: 'folder',
        iconName: 'FcFolder',
        path: '/Desktop',
        isPermanent: true,    
    },

    Web: {
        id: 'folder-web',
        name: 'Web',
        type: 'folder',
        iconName: 'FcFolder',
        path: '/Desktop/Projects',
        isPermanent: true,
    },

    Dev: {
        id: 'folder-dev',
        name: 'Dev',
        type: 'folder',
        iconName: 'FcFolder',
        path: '/Desktop/Projects',
        isPermanent: true,
    },

    Cv: {
        id: 'cv-app',
        name: 'Cv',
        type: 'app',
        iconName: 'FcFile',
        component: 'Cv',
        path: '/Desktop',
        isPermanent: true,
    },
    NextFeatures: {
        id: 'nextfeatures-app',
        name: 'NextFeatures',
        type: 'app',
        iconName: 'FcTodoList',
        component: 'NextFeatures',
        path: '/Desktop',
        isPermanent: true,
    },
    PortfolioOS: {
        id: 'portfolioos-app',
        name: 'PortfolioOS',
        type: 'app',
        iconName: 'logoAuriel',
        component: 'PortfolioOS',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    OuterWilds: {
        id: 'outerwilds-app',
        name: 'OuterWilds',
        type: 'app',
        iconName: 'logoOuterWilds',
        component: 'OuterWilds',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    Superette: {
        id: 'superette-app',
        name: 'Superette',
        type: 'app',
        iconName: 'FcShop',
        component: 'Superette',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    SearchEngine: {
        id: 'searchengine-app',
        name: 'SearchEngine',
        type: 'app',
        iconName: 'FcSearch',
        component: 'SearchEngine',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Labyrinthe: {
        id: 'labyrinthe-app',
        name: 'Labyrinthe',
        type: 'app',
        iconName: 'FcPuzzle',
        component: 'Labyrinthe',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Ams: {
        id: 'ams-app',
        name: 'Ams',
        type: 'app',
        iconName: 'FcVideoCall',
        component: 'Ams',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Compilateur: {
        id: 'compilateur-app',
        name: 'Compilateur',
        type: 'app',
        iconName: 'FcCommandLine',
        component: 'Compilateur',
        path: '/Desktop/Projects/Dev',
        isPermanent: true,
    },
    Chill2gether: {
        id: 'chill2gether-app',
        name: 'Chill2gether',
        type: 'app',
        iconName: 'FcCollaboration',
        component: 'Chill2gether',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
    CERICar: {
        id: 'cericar-app',
        name: 'CERICar',
        type: 'app',
        iconName: 'FcShipped',
        component: 'CERICar',
        path: '/Desktop/Projects/Web',
        isPermanent: true,
    },
};

// Configuration pour le Dock
export const dockItems = [
    {
        iconName: 'FcGallery',
        label: 'Wallpaper',
        appName: 'Wallpaper',
        type: 'app'
    },
    {
        iconName: 'FcFolder',
        label: 'Projects',
        appName: 'Projects',
        type: 'folder'
    },
    {
        iconName: 'FcFile',
        label: 'CV',
        appName: 'Cv',
        type: 'app'
    },
    {
        iconName: 'FcTodoList',
        label: 'Next Features',
        appName: 'NextFeatures',
        type: 'app'
    }
];

export const getItemsInFolder = (folderPath) => {
    return Object.values(appsConfig).filter(item => item.path === folderPath);
};
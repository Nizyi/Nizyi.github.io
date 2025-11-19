import { VscClose } from 'react-icons/vsc';
import { Rnd } from 'react-rnd';
import { lazy, Suspense } from 'react';

const appsConfig = {
    'Test': lazy(() => import('./Apps/Test')),
//    'Archive': lazy(() => import('./apps/ArchiveApp')),
//    'Profile': lazy(() => import('./apps/ProfileApp')),
//    'Settings': lazy(() => import('./apps/SettingsApp'))
};

function AppWindow({ appName, onClose, onFocus, appInFolder  }) {
    const AppComponent = appsConfig[appName];

    return (
        <Rnd 
            default={{
                x: 650,
                y: 300,
                width: 600,
                height: 400
            }}
            minWidth={300}
            minHeight={200}
            bounds="parent"
            dragHandleClassName="title-bar"
            onMouseDown={onFocus}
        >
            <div className="w-full h-full rounded-xl bg-white shadow-2xl border-2 border-orange-200
                text-black flex flex-col transition-all duration-300 overflow-hidden"
                style={{
                    backgroundImage: `
                          linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px)
                          `,
                    backgroundSize: '20px 20px'
                }}
            >
                {/* Barre de titre */}
                <div className="bg-orange-200 h-10 flex items-center justify-between px-4 border-b border-orange-300 title-bar cursor-move">
                    <span className="font-medium text-sm">{appName}</span>
                    <button
                        onClick={onClose}
                        className="bg-red-300 rounded-full p-1 transition-colors"
                    >
                        <VscClose size={18} />
                    </button>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-4 overflow-auto">
                    {AppComponent ? (
                        <Suspense fallback={<div>Chargement...</div>}>
                            <AppComponent />
                        </Suspense>
                    ) : (
                        <div>Application non trouvée</div>
                    )}
                </div>
            </div>
        </Rnd>
    );
}

export default AppWindow;
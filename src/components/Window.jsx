import { VscClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Rnd } from "react-rnd";
import { lazy, Suspense } from "react";
import AppIcons from "./AppIcons";
import { getItemsInFolder, iconComponents } from "./config/apps";

// Configuration du lazy loading pour les apps
const appsComponents = {
  Cv: lazy(() => import("./Apps/Cv")),
  NextFeatures: lazy(() => import("./Apps/NextFeatures")),
  PortfolioOS: lazy(() => import("./Apps/PortfolioOS")),
  Ams: lazy(() => import("./Apps/Ams")),
  Compilateur: lazy(() => import("./Apps/Compilateur")),
  Labyrinthe: lazy(() => import("./Apps/Labyrinthe")),
  OuterWilds: lazy(() => import("./Apps/OuterWilds")),
  SearchEngine: lazy(() => import("./Apps/SearchEngine")),
  Superette: lazy(() => import("./Apps/Superette")),
  Chill2gether: lazy(() => import("./Apps/Chill2gether")),
  CERICar: lazy(() => import("./Apps/CERICar")),
};

function Window({
  windowType = "app",
  title,
  appName,
  folderPath,
  onClose,
  onFocus,
  onItemClick,
  zIndex,
  onGoBack,
  onGoForward,
  canGoBack,
  canGoForward,
}) {
  const formatPath = (path) => {
    if (!path) return title;
    return path.split("/").filter((p) => p).join(" > ");
  };

  const renderContent = () => {
    if (windowType === "app") {
      const AppComponent = appsComponents[appName];
      return AppComponent ? (
        <Suspense fallback={<div className="p-6">Chargement...</div>}>
          <AppComponent />
        </Suspense>
      ) : (
        <div className="p-6">Application non trouvée : {appName}</div>
      );
    }

    if (windowType === "folder") {
      const itemsInFolder = getItemsInFolder(folderPath);
      const itemsForDisplay = itemsInFolder.map((item) => {
        const IconComponent = iconComponents[item.iconName];
        return {
          icon: IconComponent ? <IconComponent size={34} /> : null,
          label: item.name,
          onClick: () => onItemClick(item),
        };
      });

      return itemsForDisplay.length > 0 ? (
        <AppIcons items={itemsForDisplay} variant="folder" />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          Dossier vide
        </div>
      );
    }

    return null;
  };

  return (
    <Rnd
      default={{
        x: windowType === "folder" ? 500 : 350,
        y: windowType === "folder" ? 300 : 100,
        width: windowType === "folder" ? 500 : 800,
        height: windowType === "folder" ? 400 : 600,
      }}
      minWidth={windowType === "folder" ? 300 : 800}
      minHeight={windowType === "folder" ? 200 : 800}
      bounds="parent"
      dragHandleClassName="title-bar"
      onMouseDown={onFocus}
      style={{ zIndex: zIndex }}
    >
      <div
        className="w-full h-full rounded-xl bg-white shadow-2xl border-2 border-orange-200
                text-black flex flex-col transition-all duration-300 overflow-hidden"
        style={{
          backgroundImage: `
                        linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px)
                    `,
          backgroundSize: "20px 20px",
        }}
      >
        {/* Barre de titre */}
        <div className="bg-orange-200 h-10 flex items-center justify-between px-4 border-b border-orange-300 title-bar cursor-move">
          {/* Boutons de navigation */}
          {windowType === "folder" && (
            <div className="flex gap-2">
              <button
                onClick={() => onGoBack()}
                disabled={!canGoBack}
                className="p-1 rounded bg-orange-300 hover:bg-orange-400 transition-colors disabled:opacity-30 disabled:hover:bg-orange-300"
              >
                <VscChevronLeft size={18} />
              </button>
              <button
                onClick={() => onGoForward()}
                disabled={!canGoForward}
                className="p-1 rounded bg-orange-300 hover:bg-orange-400 transition-colors disabled:opacity-30 disabled:hover:bg-orange-300"
              >
                <VscChevronRight size={18} />
              </button>
            </div>
          )}

          <span className="font-medium text-sm">
            {formatPath(folderPath)}
          </span>

          <button
            onClick={onClose}
            className="bg-red-300 rounded-full p-1 transition-colors hover:bg-red-400 hover:border-orange-500"
          >
            <VscClose size={18} />
          </button>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </Rnd>
  );
}

export default Window;

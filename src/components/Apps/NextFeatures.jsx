import { VscCheck } from 'react-icons/vsc';

function NextFeatures() {
    const features = [
        {
            category: "Explorateur de fichiers",
            status: "in-progress",
            items: [
                { text: "Afficher le chemin du dossier actuel", priority: "high", completed: true },
                { text: "Navigation avec boutons Précédent/Suivant", priority: "medium", completed: true },
                { text: "Gérer le responsive pour mobile", priority: "low", completed: false },
                { text: "Vue en arborescence", priority: "low", completed: false },
                { text: "Barre de recherche", priority: "low", completed: false }
            ]
        },
        {
            category: "Dock & Navigation",
            status: "in-progress",
            items: [
                { text: "Dock fonctionnel avec navigation", priority: "high", completed: true },
                { text: "Bouton Home ", priority: "low", completed: false },
                { text: "Afficher les applications ouvertes dans le dock", priority: "high", completed: false },
                { text: "Remplacer les apps placebo par de vraies applications", priority: "high", completed: false }
            ]
        },
        {
            category: "Personnalisation",
            status: "in-progress",
            items: [
                { text: "Sélecteur de fond d'écran avec carrousel", priority: "high", completed: true },
                { text: "Changement de thème clair/sombre", priority: "medium", completed: false },
                { text: "Personnalisation des couleurs du système", priority: "low", completed: false }
            ]
        },
        {
            category: "Menu interactif (clic droit)",
            status: "planned",
            items: [
                { text: "Menu contextuel pour les apps sur le bureau", priority: "high", completed: false },
                { text: "Options : Supprimer, Créer, Renommer", priority: "high", completed: false },
                { text: "Menu contextuel pour le dock", priority: "medium", completed: false }
            ]
        },
        {
            category: "Drag & Drop",
            status: "planned",
            items: [
                { text: "Déplacer les icônes sur le bureau", priority: "medium", completed: false },
                { text: "Organiser les apps dans les dossiers", priority: "medium", completed: false },
                { text: "Réorganiser les items du dock", priority: "low", completed: false }
            ]
        },
        {
            category: "Sélection multiple",
            status: "planned",
            items: [
                { text: "Sélectionner plusieurs icônes avec Ctrl+Clic", priority: "medium", completed: false },
                { text: "Zone de sélection (drag pour sélectionner)", priority: "low", completed: false },
                { text: "Actions groupées (supprimer, déplacer)", priority: "low", completed: false }
            ]
        },
        {
            category: "Menu démarrer",
            status: "planned",
            items: [
                { text: "Liste de toutes les applications", priority: "high", completed: false },
                { text: "Menu d'alimentation (Redémarrer, Éteindre)", priority: "low", completed: false },
                { text: "Recherche d'applications", priority: "medium", completed: false },
                { text: "Applications récentes", priority: "low", completed: false }
            ]
        },
        {
            category: "Spotify Integration",
            status: "research",
            items: [
                { text: "Mini lecteur Spotify intégré", priority: "medium", completed: false },
                { text: "Connexion sécurisée (OAuth hors application)", priority: "high", completed: false },
                { text: "Contrôles de lecture (play, pause, skip)", priority: "low", completed: false },
                { text: "Affichage de la musique en cours", priority: "low", completed: false }
            ]
        },
        {
            category: "Système",
            status: "planned",
            items: [
                { text: "Gestionnaire de fenêtres (minimiser/maximiser)", priority: "medium", completed: false },
                { text: "Persistance des préférences (localStorage)", priority: "low", completed: false }
            ]
        }
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'in-progress':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'planned':
                return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'research':
                return 'bg-purple-100 text-purple-700 border-purple-200';
            default:
                return 'bg-gray-100 text-gray-600 border-gray-200';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'in-progress': return 'En cours';
            case 'planned': return 'À venir';
            case 'research': return 'Recherche';
            default: return status;
        }
    };

    return (
        <div className="h-full w-full overflow-auto">
            <div className="max-w-4xl mx-auto p-8 min-h-full">

                {/* header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-2">Prochaines fonctionnalités</h1>
                    <p className="text-lg text-gray-600">
                        Roadmap du développement du Portfolio OS
                    </p>
                </div>

                {/* liste des categories */}
                <div className="space-y-6">
                    {features.map((feature, id) => (
                        <div key={id} className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-6 border border-orange-200 shadow-md hover:shadow-lg transition-shadow">
                            
                            {/* header categorie */}
                            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-orange-200">
                                <h2 className="text-2xl font-bold text-orange-700">
                                    {feature.category}
                                </h2>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(feature.status)}`}>
                                    {getStatusLabel(feature.status)}
                                </span>
                            </div>

                            {/* liste items */}
                            <ul className="space-y-3">
                                {feature.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group">
                                        <div className={`mt-1 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                                            item.completed 
                                                ? 'bg-orange-500 border-orange-500' 
                                                : 'border-gray-300 bg-white group-hover:border-orange-300'
                                        }`}>
                                            {item.completed && <VscCheck className="text-white" size={14} />}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className={`text-base ${item.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                                                    {item.text}
                                                </span>

                                                {!item.completed && item.priority === 'high' && (
                                                    <span className="text-[10px] font-bold tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded-full border border-red-200">
                                                        PRIORITÉ
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NextFeatures;
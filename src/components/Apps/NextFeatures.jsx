import { VscCode, VscTrash, VscNewFile, VscEdit, VscFolder, VscMenu, VscCircleFilled, VscCheck } from 'react-icons/vsc';

function NextFeatures() {
    const features = [
        {
            category: "📁 Explorateur de fichiers",
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
            category: "🎯 Dock",
            status: "in-progress",
            items: [
                { text: "Dock fonctionnel avec navigation", priority: "high", completed: true },
                { text: "Bouton Home (non fonctionnel)", priority: "high", completed: true },
                { text: "Afficher les applications ouvertes dans le dock", priority: "high", completed: false },
                { text: "Remplacer les apps placebo par de vraies applications", priority: "high", completed: false }
            ]
        },
        {
            category: "🖱️ Menu interactif (clic droit)",
            status: "planned",
            items: [
                { text: "Menu contextuel pour les apps sur le bureau", priority: "high", completed: false },
                { text: "Options : Supprimer, Créer, Renommer", priority: "high", completed: false },
                { text: "Menu contextuel pour le dock", priority: "medium", completed: false }
            ]
        },
        {
            category: "🎵 Spotify Integration",
            status: "research",
            items: [
                { text: "Mini lecteur Spotify intégré", priority: "medium", completed: false },
                { text: "Connexion sécurisée (OAuth hors application)", priority: "high", completed: false },
                { text: "Contrôles de lecture (play, pause, skip)", priority: "low", completed: false },
                { text: "Affichage de la musique en cours", priority: "low", completed: false }
            ]
        },
        {
            category: "✋ Drag & Drop",
            status: "planned",
            items: [
                { text: "Déplacer les icônes sur le bureau", priority: "medium", completed: false },
                { text: "Organiser les apps dans les dossiers", priority: "medium", completed: false },
                { text: "Réorganiser les items du dock", priority: "low", completed: false }
            ]
        },
        {
            category: "🚀 Menu démarrer",
            status: "planned",
            items: [
                { text: "Liste de toutes les applications", priority: "high", completed: false },
                { text: "Menu d'alimentation (Redémarrer, Éteindre)", priority: "low", completed: false },
                { text: "Recherche d'applications", priority: "medium", completed: false },
                { text: "Applications récentes", priority: "low", completed: false }
            ]
        },
        {
            category: "🔲 Sélection multiple",
            status: "planned",
            items: [
                { text: "Sélectionner plusieurs icônes avec Ctrl+Clic", priority: "medium", completed: false },
                { text: "Zone de sélection (drag pour sélectionner)", priority: "low", completed: false },
                { text: "Actions groupées (supprimer, déplacer)", priority: "low", completed: false },
            ]
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'in-progress': 
                return 'text-green-600 bg-green-100';

            case 'planned': 
                return 'text-blue-600 bg-blue-100';

            case 'research': 
                return 'text-orange-600 bg-orange-100';

            default: 
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'in-progress': 
                return 'En cours';

            case 'planned': 
                return 'Planifié';

            case 'research': 
                return 'Recherche';

            default: 
                return 'Inconnu';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': 
                return 'text-red-600';

            case 'medium': 
                return 'text-yellow-600';

            case 'low': 
                return 'text-green-600';

            default: 
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-6 h-full overflow-auto">
            <div className="max-w-4xl mx-auto">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        🚧 Prochaines fonctionnalités
                    </h1>
                    <p className="text-gray-600">
                        Roadmap du développement du Portfolio OS
                    </p>
                </div>

                {/* Légende des priorités */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <VscCircleFilled className="text-red-600" />
                        <span>Haute priorité</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscCircleFilled className="text-yellow-600" />
                        <span>Moyenne priorité</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscCircleFilled className="text-green-600" />
                        <span>Basse priorité</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <VscCheck className="text-green-600" />
                        <span>Terminé</span>
                    </div>
                </div>

                {/* Liste des fonctionnalités */}
                <div className="space-y-6">
                    {features.map((feature, id) => (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden
                         hover:shadow-lg transition-shadow"
                        >
                            {/* En-tête de catégorie */}
                            <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 border-b border-orange-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {feature.category}
                                    </h2>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                                        {getStatusText(feature.status)}
                                    </span>
                                </div>
                            </div>

                            {/* Liste des items */}
                            <ul className="divide-y divide-gray-100">
                                {feature.items.map((item, itemIdx) => (
                                    <li
                                        key={itemIdx}
                                        className={`p-4 hover:bg-gray-50 transition-colors flex items-start gap-3 ${
                                            item.completed ? 'opacity-60' : ''
                                        }`}
                                    >
                                        {item.completed ? (
                                            <VscCheck
                                                className="mt-1 flex-shrink-0 text-green-600"
                                                size={16}
                                            />
                                        ) : (
                                            <VscCircleFilled
                                                className={`mt-1 flex-shrink-0 ${getPriorityColor(item.priority)}`}
                                                size={12}
                                            />
                                        )}
                                        <span className={`text-gray-700 ${item.completed ? 'line-through' : ''}`}>
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                        💡 <strong>Note :</strong> Cette roadmap est indicative et peut évoluer selon les besoins et les priorités du projet.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NextFeatures;
import { VscGithub, VscBook, VscGlobe, VscRocket, VscExtensions } from 'react-icons/vsc';

function Chill2gether() {
    const features = [
        {
            icon: <VscRocket size={28} />,
            title: "Streaming collaboratif en temps réel",
            description: "Regardez des vidéos YouTube ensemble, synchronisées pour tous les participants de la room."
        },
        {
            icon: <VscExtensions size={28} />,
            title: "Système de rooms",
            description: "Créez des salles publiques ou privées (avec mot de passe) pour regarder des vidéos avec vos amis."
        },
        {
            icon: <VscBook size={28} />,
            title: "Utilisateurs anonymes",
            description: "Connexion automatique sans inscription, avec persistance de l'identité entre les sessions."
        },
        {
            icon: <VscGlobe size={28} />,
            title: "Recherche vidéo intégrée",
            description: "Barre de recherche YouTube pour trouver et partager facilement des vidéos dans la room."
        }
    ];

    const techStack = [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Socket.io', color: 'bg-gray-800' },
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
        { name: 'Vite', color: 'bg-purple-600' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-purple-100 to-blue-200 border-b-2 lg:border-b-0 lg:border-r-2 border-purple-300 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscRocket className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    Chill2gether
                </h1>
                <p className="text-base lg:text-xl text-gray-700 text-center mb-6 lg:mb-8 px-4">
                    Regardez des vidéos ensemble, en temps réel
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-purple-700 mb-3 lg:mb-4 text-center">
                        🛠️ Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {techStack.map((tech, index) => (
                            <span 
                                key={index}
                                className={`px-3 py-2 ${tech.color} text-white rounded-lg text-xs lg:text-sm font-medium shadow-md hover:scale-105 transition-transform`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 lg:mt-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-semibold">
                        🚧 En cours de développement
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-6 lg:p-8">

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-4 lg:p-6 border border-purple-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                <strong>Chill2gether</strong> est une application web de streaming collaboratif permettant de regarder des vidéos YouTube en temps réel avec vos amis (comme  Watch2gether). Le projet utilise <strong>Socket.IO</strong> pour la synchronisation en temps réel et <strong>React</strong> pour une interface moderne et réactive.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                Actuellement en développement actif, l'application propose déjà un système de rooms, la gestion d'utilisateurs anonymes persistants, et une recherche vidéo intégrée. De nombreuses fonctionnalités sont prévues pour enrichir l'expérience collaborative.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            ✨ Fonctionnalités actuelles
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1 lg:mb-2 text-sm lg:text-base">{feature.title}</h3>
                                            <p className="text-gray-600 text-xs lg:text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            🚀 Fonctionnalités à venir
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                                <h3 className="font-bold text-purple-700 mb-3">🎯 Priorité haute</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Synchronisation complète de la vidéo (play/pause/seek)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Chat en temps réel avec historique</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>File d'attente de vidéos (playlist collaborative)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Gestion de la salle (kick, admin, permissions)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                                <h3 className="font-bold text-purple-700 mb-3">🔐 Fonctionnalités importantes</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Création de comptes utilisateurs persistants</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Support multi-plateformes (Twitch, Vimeo, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Page d'aide et mentions légales</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                                <h3 className="font-bold text-purple-700 mb-3">✨ Améliorations futures</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Mini-jeux intégrés pour s'amuser entre amis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Système d'abonnement premium</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-500">•</span>
                                        <span>Optimisation SEO et analytics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            💡 Architecture technique
                        </h2>
                        <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-4 lg:p-6 border border-purple-200">
                            <ul className="space-y-3">
                                {[
                                    "Backend Express.js avec Socket.IO pour la communication temps réel",
                                    "Base de données PostgreSQL pour la persistance des rooms et utilisateurs",
                                    "Frontend React avec Vite pour des performances optimales",
                                    "Tailwind CSS et Framer Motion pour une interface moderne et animée",
                                    "React Player et HLS.js pour la lecture vidéo multi-plateformes",
                                    "Système d'utilisateurs anonymes avec localStorage pour la reconnexion"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-purple-500 font-bold">•</span>
                                        <span className="text-sm lg:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-2xl p-6 lg:p-8 border border-purple-300 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            🚧 Projet en cours de développement
                        </h3>
                        <p className="text-gray-700 mb-4 text-sm lg:text-base">
                            Chill2gether est activement développé dans le cadre d'un projet universitaire (L3). 
                            De nouvelles fonctionnalités sont ajoutées régulièrement !
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Chill2gether;
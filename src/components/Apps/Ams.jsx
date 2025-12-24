import { VscGithub, VscOrganization, VscListSelection, VscServerProcess, VscChecklist } from 'react-icons/vsc';
import { FcVideoCall } from 'react-icons/fc';

function AMS() {
    const features = [
        {
            icon: <VscServerProcess size={28} />,
            title: "Sondes système (CPU / RAM / Disque)",
            description: "Collecte des métriques via scripts Python/Bash et exécution automatisée côté serveur"
        },
        {
            icon: <VscServerProcess size={28} />,
            title: "Stockage local SQLite",
            description: "Historisation des mesures et accès rapide aux dernières valeurs pour l’affichage"
        },
        {
            icon: <VscChecklist size={28} />,
            title: "Alertes & détection de seuils",
            description: "Surveillance des seuils critiques + gestion d’un historique d’alertes"
        },
        {
            icon: <VscListSelection size={28} />,
            title: "Suivi des alertes CERT-FR",
            description: "Récupération et affichage des dernières alertes de sécurité via parsing web"
        },
        {
            icon: <VscOrganization size={28} />,
            title: "Dashboard web + graphiques",
            description: "Interface Flask avec visualisation des tendances (Matplotlib) et bouton de refresh"
        }
    ];

    const techStack = [
        { name: 'Python', color: 'bg-blue-600' },
        { name: 'Flask', color: 'bg-gray-800' },
        { name: 'SQLite', color: 'bg-teal-600' },
        { name: 'Matplotlib', color: 'bg-orange-500' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-teal-50 to-cyan-50 border-b-2 lg:border-b-0 lg:border-r-2 border-teal-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <FcVideoCall className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    AMS
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Admin Monitoring System
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-teal-600 mb-3 lg:mb-4 text-center">
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
                    <a 
                        href="https://github.com/Nizyi/admin-monitoring-system" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm lg:text-base"
                    >
                        <VscGithub size={20} />
                        <span className="font-semibold">Code source</span>
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-6 lg:p-8">

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-teal-600 mb-4 lg:mb-6 border-b-2 border-teal-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-4 lg:p-6 border border-teal-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Projet de <strong>monitoring système</strong> réalisé en <strong>L2 Informatique</strong> à l’Université d’Avignon.
                                L’objectif est de suivre l’état d’une machine (CPU, RAM, disque) et de centraliser ces données dans une base locale.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                AMS inclut aussi un volet “sécurité” avec l’affichage des <strong>alertes CERT-FR</strong>, et une interface web
                                simple pour consulter les dernières mesures et les graphiques d’historique.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-teal-600 mb-4 lg:mb-6 border-b-2 border-teal-200 pb-2">
                            ✨ Fonctionnalités principales
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-teal-600 mb-4 lg:mb-6 border-b-2 border-teal-200 pb-2">
                            🎯 Architecture du projet
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Pipeline de collecte",
                                    description: "Des sondes exécutées périodiquement alimentent une base SQLite pour garder un historique exploitable."
                                },
                                {
                                    title: "Traitement & alerting",
                                    description: "Analyse des mesures, détection de seuils, et prise en compte des alertes CERT récentes."
                                },
                                {
                                    title: "Interface web",
                                    description: "Dashboard Flask + template HTML pour visualiser les valeurs courantes et les graphiques générés."
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-200"
                                >
                                    <h3 className="font-bold text-teal-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-teal-600 mb-4 lg:mb-6 border-b-2 border-teal-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-4 lg:p-6 border border-teal-200">
                            <ul className="space-y-3">
                                {[
                                    "Automatiser l'exécution de scripts et manipuler des sorties JSON (Python / Bash)",
                                    "Stocker et requêter des mesures dans SQLite pour du monitoring léger",
                                    "Créer une interface web minimale avec Flask + templates",
                                    "Générer des graphiques côté serveur avec Matplotlib et les intégrer à une page web",
                                    "Récupérer des informations via scraping (Requests + BeautifulSoup)"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-teal-600 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 rounded-2xl p-6 lg:p-8 border border-teal-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Projet universitaire - L2 Informatique
                        </h3>
                        <a 
                            href="https://github.com/Nizyi/admin-monitoring-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm lg:text-base"
                        >
                            <VscGithub size={20} />
                            <span className="font-semibold">Voir sur GitHub</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AMS;
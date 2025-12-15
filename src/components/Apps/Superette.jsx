import { VscGithub, VscDatabase, VscTable, VscGraphLine, VscTerminal } from 'react-icons/vsc';

function Superette() {
    const features = [
        {
            icon: <VscTerminal size={28} />,
            title: "Gestion en ligne de commande",
            description: "Un hub de commandes pour créer/insérer/afficher/modifier/supprimer des données dans PostgreSQL"
        },
        {
            icon: <VscDatabase size={28} />,
            title: "Schéma “superette” prêt à l’emploi",
            description: "Tables liées (fournisseur, lot, produit, commande, contrat, vente, promo, contact) + clés étrangères"
        },
        {
            icon: <VscGraphLine size={28} />,
            title: "Tableaux de bord intégrés",
            description: "Ventes & profits (jour/mois), top produits, prix moyens, lots proches de péremption, suivi commandes/promo"
        },
        {
            icon: <VscTable size={28} />,
            title: "Automatisations utiles",
            description: "Mise à jour des statuts (commandes/promo) et prise en compte des réductions lors de l’affichage des ventes"
        }
    ];

    const techStack = [
        { name: 'Java', color: 'bg-red-500' },
        { name: 'PostgreSQL', color: 'bg-blue-600' },
        { name: 'JDBC', color: 'bg-orange-500' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 border-b-2 lg:border-b-0 lg:border-r-2 border-blue-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscDatabase className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    Superette
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Mini-système de gestion (stock/ventes/commandes) piloté en CLI et connecté à PostgreSQL
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-blue-600 mb-3 lg:mb-4 text-center">
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
                        href="https://github.com/Nizyi/superette-stock-manager"
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
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 lg:p-6 border border-blue-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Projet développé en <strong>Java</strong> (niveau <strong>L2 Informatique</strong>, Université d’Avignon) :
                                une application console qui pilote une base <strong>PostgreSQL</strong> pour gérer les éléments essentiels
                                d’une superette (stock, produits, fournisseurs, ventes, commandes, promotions).
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                L’application s’appuie sur <strong>JDBC</strong> et propose des commandes simples (création des tables,
                                insertions, affichage, édition, suppression) ainsi que des écrans “tableaux de bord” pour suivre l’activité.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            ✨ Fonctionnalités principales
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            🎯 Points clés
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Données cohérentes",
                                    description: "Modèle relationnel avec clés primaires/étrangères pour relier stock (lots), produits, fournisseurs, ventes et commandes"
                                },
                                {
                                    title: "Suivi opérationnel",
                                    description: "Alertes sur les lots proches de péremption, suivi des commandes en attente/annulées et gestion des promotions"
                                },
                                {
                                    title: "Pilotage rapide",
                                    description: "Tableaux de bord pour consulter les ventes, estimer les profits, et repérer les produits les plus vendus"
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200"
                                >
                                    <h3 className="font-bold text-blue-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 lg:p-6 border border-blue-200">
                            <ul className="space-y-3">
                                {[
                                    "Modélisation d'une base relationnelle (tables, relations, contraintes)",
                                    "Requêtes SQL (jointures, agrégations) et exploitation via JDBC",
                                    "Récupération de structure via metadata (tables/colonnes) pour guider des actions en CLI"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-6 lg:p-8 border border-blue-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Code source disponible sur GitHub
                        </h3>
                        <a 
                            href="https://github.com/Nizyi/superette-stock-manager"
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

export default Superette;
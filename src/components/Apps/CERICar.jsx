import {VscSearch, VscAccount, VscCalendar, VscDatabase, VscRocket } from 'react-icons/vsc';

function CERICar() {
    const features = [
        {
            icon: <VscSearch size={28} />,
            title: "Moteur de recherche de trajets",
            description: "Recherche intelligente de voyages avec gestion des correspondances automatiques entre différents conducteurs."
        },
        {
            icon: <VscAccount size={28} />,
            title: "Gestion complète des utilisateurs",
            description: "Inscription, connexion, profils conducteurs/passagers avec numéro de permis et photo de profil."
        },
        {
            icon: <VscCalendar size={28} />,
            title: "Réservation de places",
            description: "Système de réservation en temps réel avec suivi des places disponibles et historique des trajets."
        },
        {
            icon: <VscRocket size={28} />,
            title: "Proposition de voyages",
            description: "Les conducteurs peuvent proposer des trajets avec tarifs, horaires, contraintes (animaux, bagages, etc.)."
        }
    ];

    const techStack = [
        { name: 'PHP', color: 'bg-indigo-600' },
        { name: 'Yii Framework', color: 'bg-blue-600' },
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'MVC Pattern', color: 'bg-purple-600' },
        { name: 'ActiveRecord ORM', color: 'bg-pink-600' },
        { name: 'jQuery Ajax', color: 'bg-cyan-600' },
        { name: 'UML', color: 'bg-gray-600' },
    ];

    const developmentSteps = [
        {
            step: "Étape 1",
            title: "Modélisation UML",
            description: "Diagrammes de cas d'utilisation, classes, séquences et états-transitions pour concevoir l'architecture.",
            status: "✅ Terminé"
        },
        {
            step: "Étape 2",
            title: "Modèle de données & ActiveRecord",
            description: "Implémentation du modèle avec ORM ActiveRecord, relations entre entités et méthodes métier.",
            status: "🔄 En cours"
        },
        {
            step: "Étape 3",
            title: "Vue et Layout MVC",
            description: "Développement de l'interface de recherche de voyages avec design responsive et charte graphique.",
            status: "🔄 En cours"
        },
        {
            step: "Étape 4",
            title: "Intégration Ajax",
            description: "Requêtes asynchrones avec jQuery, mise à jour dynamique du DOM sans rechargement complet.",
            status: "⏳ À venir"
        },
        {
            step: "Étape 5",
            title: "Réservation & Proposition",
            description: "Modules d'inscription, connexion, réservation de places et proposition de voyages par les conducteurs.",
            status: "⏳ À venir"
        }
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-200 border-b-2 lg:border-b-0 lg:border-r-2 border-blue-300 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscRocket className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    CERICar
                </h1>
                <p className="text-base lg:text-xl text-gray-700 text-center mb-6 lg:mb-8 px-4">
                    Application web de covoiturage
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-blue-700 mb-3 lg:mb-4 text-center">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 lg:p-6 border border-blue-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                <strong>CERICar</strong> est une application web de covoiturage similaire à BlaBlaCar, développée dans le cadre de l'UCE <strong>AMS – Concevoir et développer une application WEB</strong> en L3 Informatique à l'Université d'Avignon. Le projet utilise le framework <strong>Yii</strong> avec le patron de conception <strong>MVC</strong> et l'ORM <strong>ActiveRecord</strong>.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                L'application permet aux utilisateurs de rechercher des voyages, de réserver des places, et aux conducteurs de proposer des trajets. Le moteur de recherche gère automatiquement les correspondances entre différents conducteurs en respectant les contraintes temporelles.
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
                            🚀 Étapes de développement
                        </h2>
                        <div className="space-y-4">
                            {developmentSteps.map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                            <span className="text-blue-700 font-bold text-sm">{item.step}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-blue-700 text-base">{item.title}</h3>
                                                <span className="text-sm px-3 py-1 bg-blue-50 rounded-full">{item.status}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-4 lg:mb-6 border-b-2 border-blue-200 pb-2">
                            🎯 Concepts implémentés
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Patron MVC avec Yii Framework",
                                    description: "Séparation stricte entre Modèle, Vue et Contrôleur pour une architecture maintenable et évolutive."
                                },
                                {
                                    title: "ORM ActiveRecord",
                                    description: "Mapping objet-relationnel automatique avec gestion des relations entre entités (internautes, trajets, voyages, réservations)."
                                },
                                {
                                    title: "Base de données PostgreSQL",
                                    description: "Schéma relationnel normalisé avec contraintes d'intégrité et requêtes optimisées pour les recherches complexes."
                                },
                                {
                                    title: "Recherche avec correspondances",
                                    description: "Algorithme de composition de trajets multiples en respectant les contraintes temporelles (heure d'arrivée < heure de départ suivante)."
                                },
                                {
                                    title: "Interface Ajax dynamique",
                                    description: "Mise à jour asynchrone du DOM avec jQuery sans rechargement complet de la page, bandeau de notifications global."
                                },
                                {
                                    title: "Design responsive",
                                    description: "Application accessible sur tous supports (smartphone, tablette, desktop) avec adaptation automatique de l'interface."
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
                            💡 Ce que j'apprends
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 lg:p-6 border border-blue-200">
                            <ul className="space-y-3">
                                {[
                                    "Architecture MVC et bonnes pratiques de développement web",
                                    "Framework PHP Yii et son écosystème (classes assistantes, helpers)",
                                    "ORM ActiveRecord et gestion des relations entre entités",
                                    "Modélisation UML complète (cas d'utilisation, classes, séquences, états-transitions)",
                                    "Requêtes Ajax avec jQuery pour des interfaces réactives",
                                    "Conception de bases de données relationnelles avec PostgreSQL",
                                    "Développement d'algorithmes de recherche complexes (correspondances multiples)",
                                    "Design responsive et accessibilité multi-plateformes"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-200 rounded-2xl p-6 lg:p-8 border border-blue-300 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            🚧 Projet universitaire en développement - L3 Informatique
                        </h3>
                        <p className="text-gray-700 mb-4 text-sm lg:text-base">
                            Développé dans le cadre de l'UCE AMS à l'Université d'Avignon. 
                            Le projet suit un planning structuré en 5 étapes validées progressivement.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm text-white">
                            <VscDatabase size={18} />
                            <span>Base de données partagée PostgreSQL</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CERICar;
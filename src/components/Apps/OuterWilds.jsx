import { VscGithub, VscBook, VscGlobe, VscRocket, VscExtensions } from 'react-icons/vsc';

function OuterWildsWiki() {
    const features = [
        {
            icon: <VscBook size={28} />,
            title: "Gestion d’articles",
            description: "Création, modification et consultation d’articles, avec un éditeur de texte enrichi côté admin."
        },
        {
            icon: <VscExtensions size={28} />,
            title: "Back-office administrateur",
            description: "Interface dédiée pour gérer le contenu (articles/FAQ) et une partie des utilisateurs."
        },
        {
            icon: <VscGlobe size={28} />,
            title: "Front-office public",
            description: "Pages principales (accueil, articles, FAQ, contact) avec une navigation simple via réécriture d’URL."
        },
        {
            icon: <VscRocket size={28} />,
            title: "Accueil animé",
            description: "Page d’accueil avec expérimentations visuelles (notamment autour du système solaire) en JavaScript/Three.js."
        },
        {
            icon: <VscExtensions size={28} />,
            title: "Sécurité côté serveur",
            description: "Sessions, protection CSRF et gestion des mots de passe côté PHP."
        }
    ];

    const techStack = [
        { name: 'PHP', color: 'bg-indigo-700' },
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
        { name: 'Three.js', color: 'bg-slate-800' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-slate-800 to-indigo-900 border-b-2 lg:border-b-0 lg:border-r-2 border-indigo-700 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscRocket className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-4 text-center">
                    Outer Wilds Wiki
                </h1>
                <p className="text-base lg:text-xl text-gray-300 text-center mb-6 lg:mb-8 px-4">
                    Projet web (L2) orienté backend
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-indigo-300 mb-3 lg:mb-4 text-center">
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

                <div className="mt-6 lg:mt-8 flex flex-col gap-3">
                    <a 
                        href="https://github.com/Nizyi/outer-wilds-wiki" 
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
                        <h2 className="text-xl lg:text-2xl font-bold text-indigo-600 mb-4 lg:mb-6 border-b-2 border-indigo-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-4 lg:p-6 border border-indigo-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Application web inspirée de <strong>Outer Wilds</strong>, réalisée en <strong>L2</strong> avec un focus
                                sur le <strong>backend (PHP + PostgreSQL)</strong> : modèles, logique serveur, formulaires et accès admin.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                Le front a surtout servi de terrain d’expérimentation (mise en page, animations, tests à deux) : certaines
                                idées n’ont pas été finalisées, d’où un rendu visuel parfois brouillon, mais une base fonctionnelle côté serveur.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-indigo-600 mb-4 lg:mb-6 border-b-2 border-indigo-200 pb-2">
                            ✨ Fonctionnalités principales
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-indigo-600 mb-4 lg:mb-6 border-b-2 border-indigo-200 pb-2">
                            🎮 Contenu du wiki
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Articles",
                                    description: "Pages de contenu consultables côté site, avec édition via le back-office."
                                },
                                {
                                    title: "Accueil / système solaire",
                                    description: "Présentation visuelle de l’univers avec des animations et tests d’interactions."
                                },
                                {
                                    title: "FAQ",
                                    description: "Section dédiée pour centraliser des questions/réponses et infos utiles."
                                },
                                {
                                    title: "Contact & compte",
                                    description: "Formulaire de contact et pages de connexion/profil (selon session utilisateur)."
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-5 border border-indigo-200"
                                >
                                    <h3 className="font-bold text-indigo-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-indigo-600 mb-4 lg:mb-6 border-b-2 border-indigo-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-green-50 rounded-2xl p-4 lg:p-6 border border-green-200">
                            <ul className="space-y-3">
                                {[
                                    "Conception backend en PHP : routing simple, formulaires et logique serveur",
                                    "Connexion PostgreSQL et requêtes pour CRUD (articles, FAQ, utilisateurs)",
                                    "Mise en place de sessions, hachage de mots de passe et protections CSRF",
                                    "Organisation du projet (front/back-office) et séparation control / model / templates",
                                    "Expérimentations front : intégration Tailwind, éditeur riche et animations"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-500 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-slate-800 via-indigo-900 to-purple-900 rounded-2xl p-6 lg:p-8 border border-indigo-700 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-white mb-3">
                            Projet universitaire (L2) — focus backend
                        </h3>
                        <p className="text-indigo-200 mb-4 text-sm lg:text-base">
                            Le design n’était pas l’objectif principal : c’est surtout un projet d’apprentissage et d’expérimentation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a 
                                href="https://github.com/Nizyi/outer-wilds-wiki"
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

        </div>
    );
}

export default OuterWildsWiki;
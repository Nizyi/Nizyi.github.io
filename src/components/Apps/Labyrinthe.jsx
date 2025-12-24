import { VscGithub, VscSymbolArray, VscGraph, VscDebugAlt, VscMove } from 'react-icons/vsc';
import { FcPuzzle } from 'react-icons/fc';

function Labyrinthe() {
    const features = [
        {
            icon: <VscMove size={28} />,
            title: "Jeu en terminal",
            description: "Déplacement au clavier dans un labyrinthe affiché avec ncurses"
        },
        {
            icon: <VscGraph size={28} />,
            title: "Génération aléatoire",
            description: "Création de labyrinthes de taille choisie à l’exécution (génération procédurale)"
        },
        {
            icon: <VscSymbolArray size={28} />,
            title: "Pile et marquage",
            description: "Exploration basée sur une pile et des cases marquées pour suivre les parcours"
        },
        {
            icon: <VscDebugAlt size={28} />,
            title: "Aide + animation",
            description: "Menu F1, affichage d’une solution et animation d’une tentative d’exploration"
        }
    ];

    const techStack = [
        { name: 'C++', color: 'bg-blue-700' },
        { name: 'ncurses', color: 'bg-green-600' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">

            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-green-50 to-emerald-50 border-b-2 lg:border-b-0 lg:border-r-2 border-green-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">

                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-green-200 rounded-3xl mb-4 lg:mb-6 shadow-2xl border-2 border-green-400">
                    <FcPuzzle className="text-5xl lg:text-7xl" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    Labyrinthe
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Jeu de labyrinthe en C++ (ncurses) avec génération et démonstrations de parcours
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-green-600 mb-3 lg:mb-4 text-center">
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
                        href="https://github.com/Nizyi/Maze_game"
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
                        <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-4 lg:mb-6 border-b-2 border-green-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 lg:p-6 border border-green-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Petit projet en <strong>C++</strong> (Université d’Avignon) : un jeu de labyrinthe
                                dans le terminal. Le labyrinthe est une grille de cases avec des murs <strong>N/S/E/O</strong>,
                                affichée et animée avec <strong>ncurses</strong>.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                On peut générer un labyrinthe à la taille demandée, le parcourir manuellement au clavier,
                                et lancer des démonstrations (solution/ exploration) pour visualiser le chemin trouvé.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-4 lg:mb-6 border-b-2 border-green-200 pb-2">
                            ✨ Fonctionnalités principales
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-4 lg:mb-6 border-b-2 border-green-200 pb-2">
                            🎯 Algorithmes implémentés
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Génération (DFS / backtracking)",
                                    description: "Construction d’un labyrinthe aléatoire en creusant des passages et en revenant en arrière via une pile"
                                },
                                {
                                    title: "Résolution (DFS avec marquage)",
                                    description: "Recherche d’un chemin jusqu’à la sortie en marquant les cases visitées pour éviter les boucles"
                                },
                                {
                                    title: "Tentative d’exploration animée",
                                    description: "Visualisation pas à pas du parcours (avancée + retour en arrière) directement dans le terminal"
                                },
                                {
                                    title: "Parcours manuel contrôlé",
                                    description: "Validation des déplacements selon les murs de la case (N/S/E/O) avec détection d’échec/victoire"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200"
                                >
                                    <h3 className="font-bold text-green-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-4 lg:mb-6 border-b-2 border-green-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-green-50 rounded-2xl p-4 lg:p-6 border border-green-200">
                            <ul className="space-y-3">
                                {[
                                    "Affichage et interactions clavier en terminal avec ncurses",
                                    "Représentation d’un labyrinthe en grille (murs N/S/E/O) et gestion de l’état des cases",
                                    "Utilisation d’une pile pour la génération et la résolution (DFS / backtracking)",
                                    "Animation d’un parcours et mise à jour de l’écran (refresh, temporisation)"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-500 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-2xl p-6 lg:p-8 border border-green-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Projet universitaire - Informatique
                        </h3>
                        <a
                            href="https://github.com/Nizyi/Maze_game"
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

export default Labyrinthe;
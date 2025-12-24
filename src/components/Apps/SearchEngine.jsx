import { VscGithub, VscSearch, VscFilePdf, VscGraphLine, VscBeaker } from 'react-icons/vsc';
import { FcSearch } from 'react-icons/fc';

function SearchMotor() {
    const features = [
        {
            icon: <VscSearch size={28} />,
            title: "Recherche par requête",
            description: "Saisie d’un ou plusieurs mots-clés et affichage des documents les plus pertinents"
        },
        {
            icon: <VscGraphLine size={28} />,
            title: "Double ranking",
            description: "Comparaison de deux méthodes de scoring : TF-IDF et BM25"
        },
        {
            icon: <VscFilePdf size={28} />,
            title: "Gestion de corpus texte",
            description: "Chargement de corpus (Wikipedia / ouvrages) depuis des fichiers .txt"
        },
        {
            icon: <VscBeaker size={28} />,
            title: "Nettoyage & vocabulaire",
            description: "Construction d’un vocabulaire et filtrage de stop words pour améliorer la recherche"
        }
    ];

    const techStack = [
        { name: 'Java', color: 'bg-red-500' },
        { name: 'TF‑IDF', color: 'bg-purple-600' },
        { name: 'BM25', color: 'bg-green-600' },
        { name: 'Git', color: 'bg-orange-500' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-purple-50 to-pink-50 border-b-2 lg:border-b-0 lg:border-r-2 border-purple-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <FcSearch className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    Search Motor
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Moteur de recherche sur corpus texte (TF‑IDF / BM25)
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-purple-600 mb-3 lg:mb-4 text-center">
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
                        href="https://github.com/Nizyi/search_Engine" 
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
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 lg:p-6 border border-purple-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Projet développé en <strong>Java</strong> en <strong>L2 Informatique</strong> (Université d'Avignon, <strong>2024</strong>).
                                L’objectif est de créer un petit moteur de recherche capable de classer des documents à partir d’une requête.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                Il s’agit de mon <strong>premier projet utilisant une “base” de documents</strong> (un corpus) :
                                le programme charge des fichiers texte, construit un vocabulaire, puis calcule un score de pertinence avec
                                <strong> TF‑IDF</strong> et <strong>BM25</strong> pour afficher les meilleurs résultats.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            ✨ Fonctionnalités principales
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
                            🎯 Points techniques
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Chargement du corpus",
                                    description: "Lecture de fichiers texte et création d’objets Document/Mot à partir de formats différents (Wikipedia / ouvrages)"
                                },
                                {
                                    title: "Vocabulaire & stop words",
                                    description: "Construction d’un dictionnaire de termes et filtrage de mots fréquents pour limiter le bruit dans les scores"
                                },
                                {
                                    title: "Scoring TF‑IDF / BM25",
                                    description: "Calcul de scores de pertinence (TF‑IDF avec similarité, BM25 avec paramètres k1 et b) puis tri pour afficher les meilleurs documents"
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200"
                                >
                                    <h3 className="font-bold text-purple-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6 border-b-2 border-purple-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-green-50 rounded-2xl p-4 lg:p-6 border border-green-200">
                            <ul className="space-y-3">
                                {[
                                    "Manipuler un corpus de documents (lecture, découpage en mots, structures de données)",
                                    "Comprendre et implémenter des méthodes de ranking (TF‑IDF et BM25)",
                                    "Gérer un vocabulaire (identifiants de termes) et le filtrage de stop words",
                                    "Structurer un projet Java avec des classes claires et des exceptions dédiées"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-500 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-2xl p-6 lg:p-8 border border-purple-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Projet universitaire - L2 Informatique
                        </h3>
                        <a 
                            href="https://github.com/Nizyi/search_Engine"
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

export default SearchMotor;
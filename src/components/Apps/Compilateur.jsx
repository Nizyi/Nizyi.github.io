import { VscGithub, VscSymbolNamespace, VscGear, VscFileBinary, VscRegex } from 'react-icons/vsc';

function Compilateur() {
    const features = [
        {
            icon: <VscRegex size={28} />,
            title: "Analyse lexicale",
            description: "Scanner Flex/Flex++ : mots-clés, identifiants, nombres, caractères et symboles (ex: '..' pour les ranges)"
        },
        {
            icon: <VscSymbolNamespace size={28} />,
            title: "Analyse syntaxique",
            description: "Parseur récursif descendant (style LL) pour un mini langage Pascal (IF, WHILE, FOR, CASE, BEGIN/END, REPEAT/UNTIL)"
        },
        {
            icon: <VscGear size={28} />,
            title: "Analyse sémantique",
            description: "Table des symboles et contrôles : variables déclarées, compatibilité de types (INTEGER/BOOLEAN/CHAR/DOUBLE/SET)"
        },
        {
            icon: <VscFileBinary size={28} />,
            title: "Génération de code",
            description: "Production d’assembleur x86-64 (syntaxe AT&T), avec gestion de pile et appels à printf/puts pour DISPLAY"
        }
    ];

    const techStack = [
        { name: 'C++', color: 'bg-blue-600' },
        { name: 'Flex/Flex++', color: 'bg-purple-600' },
        { name: 'x86-64 (AT&T)', color: 'bg-yellow-600' },
        { name: 'GCC / GDB', color: 'bg-green-600' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className="lg:w-1/3 bg-gradient-to-br from-yellow-50 to-amber-50 border-b-2 lg:border-b-0 lg:border-r-2 border-yellow-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscGear className="text-4xl lg:text-6xl text-white" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    CERI Compiler
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Compilateur pédagogique Pascal-like → assembleur x86-64
                </p>

                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-yellow-600 mb-3 lg:mb-4 text-center">
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
                        href="https://github.com/Nizyi/compilateur" 
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
                        <h2 className="text-xl lg:text-2xl font-bold text-yellow-600 mb-4 lg:mb-6 border-b-2 border-yellow-200 pb-2">
                            📖 Description
                        </h2>
                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-4 lg:p-6 border border-yellow-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Projet de compilation en <strong>C++</strong> : un mini langage inspiré de <strong>Pascal</strong> est analysé
                                puis traduit en <strong>assembleur x86-64</strong> (syntaxe AT&amp;T). L’objectif est de comprendre le pipeline
                                complet (scanner, parseur, types, génération de code) sur un projet concret.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                Le langage gère les déclarations (<strong>VAR</strong>) et plusieurs types (<strong>INTEGER</strong>, <strong>BOOLEAN</strong>, <strong>CHAR</strong>, <strong>DOUBLE</strong>, <strong>SET</strong>),
                                ainsi que des instructions structurées et l’affichage via <strong>DISPLAY</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-yellow-600 mb-4 lg:mb-6 border-b-2 border-yellow-200 pb-2">
                            ✨ Phases du compilateur
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-yellow-600 mb-4 lg:mb-6 border-b-2 border-yellow-200 pb-2">
                            🎯 Concepts implémentés
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Grammaire LL(k) et parseur récursif",
                                    description: "Fonctions de parsing par règle (expressions, facteurs, statements) avec une gestion simple des erreurs."
                                },
                                {
                                    title: "Table des symboles",
                                    description: "Enregistrement des variables déclarées et de leur type pour sécuriser les affectations et l’usage d’identifiants."
                                },
                                {
                                    title: "Typage et vérifications",
                                    description: "Contrôles de compatibilité dans les opérations, comparaisons, conditions et affectations."
                                },
                                {
                                    title: "Traduction en assembleur",
                                    description: "Génération x86-64 AT&T avec utilisation de la pile et création de labels pour IF/WHILE/FOR/CASE/REPEAT."
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200"
                                >
                                    <h3 className="font-bold text-yellow-700 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-yellow-600 mb-4 lg:mb-6 border-b-2 border-yellow-200 pb-2">
                            💡 Ce que j'ai appris
                        </h2>
                        <div className="bg-green-50 rounded-2xl p-4 lg:p-6 border border-green-200">
                            <ul className="space-y-3">
                                {[
                                    "Concevoir une grammaire simple et l’implémenter avec un parseur récursif descendant",
                                    "Écrire/adapter un scanner Flex pour reconnaître tokens, mots-clés et opérateurs",
                                    "Mettre en place une table des symboles et des contrôles de types (dont SET)",
                                    "Générer de l’assembleur x86-64 (AT&T) : pile, labels, appels à printf/puts",
                                    "Tester et déboguer la chaîne complète (source → .s → exécutable via GCC)"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-500 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 rounded-2xl p-6 lg:p-8 border border-yellow-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Projet universitaire - Compilation
                        </h3>
                        <a 
                            href="https://github.com/Nizyi/compilateur"
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

export default Compilateur;
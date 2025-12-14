function Cv() {
    return (
        <div className="h-full w-full overflow-auto">
            <div className="max-w-4xl mx-auto p-8 min-h-full">

                <div className="flex gap-6 mb-8">
                    {/* -------------Photo------------- */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-2xl bg-gray-300 border-2 border-gray-400 overflow-hidden">
                            <img
                                src="/photo-profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* -------------Presentation------------- */}
                    <div className="flex-1 bg-amber-50/80 backdrop-blur-sm rounded-xl p-4 border border-amber-200 shadow-xl">
                        <h1 className="text-3xl font-bold mb-2">Senechal Tom</h1>
                        <p className="text-lg mb-3">Étudiant en L3 Informatique</p>
                        <p className="text-sm leading-relaxed opacity-90">
                            Actuellement en Licence 3 Informatique Générale à l'Université d'Avignon,
                            je recherche un stage dans le développement web.
                            Solides compétences en programmation et développement full-stack.
                        </p>
                    </div>
                </div>

                {/* -------------langages maitrises------------- */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        💻 Compétences Techniques
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                            <h3 className="font-bold text-orange-700 mb-3">Développement Web</h3>
                            <ul className="space-y-2">
                                {['React', 'Tailwind CSS', 'HTML/CSS', 'PHP'].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                        <span className="text-gray-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-rose-50/80 backdrop-blur-sm rounded-xl p-4 border border-rose-200">
                            <h3 className="font-bold text-rose-700 mb-3">Langages</h3>
                            <ul className="space-y-2">
                                {['Java', 'C++', 'Python', 'Bash'].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        <span className="text-gray-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-amber-50/80 backdrop-blur-sm rounded-xl p-4 border border-amber-200">
                            <h3 className="font-bold text-amber-700 mb-3">Bases de Données</h3>
                            <ul className="space-y-2">
                                {['PostgreSQL', 'SQL', 'Modélisation'].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                        <span className="text-gray-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-yellow-50/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-200">
                            <h3 className="font-bold text-yellow-700 mb-3">Analyse de Données</h3>
                            <ul className="space-y-2">
                                {['R', 'Julia', 'Python (NumPy)', 'Git/GitHub'].map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        <span className="text-gray-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* -------------Projets------------- */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        🚀 Projets Réalisés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        { [
                            {
                                title: 'Portfolio OS',
                                context: 'Projet Personnel',
                                period: '2024-2025',
                                description: 'Portfolio interactif avec interface macOS : système de fenêtres draggables, explorateur de fichiers, lazy loading',
                                tech: 'React, Tailwind CSS, Framer Motion, Vite'
                            },
                            {
                                title: 'CERICar',
                                context: 'Projet Universitaire - L3',
                                period: '2024-2025',
                                description: 'Application web de covoiturage avec moteur de recherche intelligent, gestion des correspondances et réservations',
                                tech: 'PHP, Yii Framework, PostgreSQL, jQuery Ajax, UML'
                            },
                            {
                                title: 'Chill2gether',
                                context: 'Projet Universitaire - L3',
                                period: '2024-2025',
                                description: 'Application de streaming collaboratif en temps réel avec système de rooms et synchronisation vidéo',
                                tech: 'React, Node.js, Socket.io, PostgreSQL, Tailwind CSS'
                            },
                            {
                                title: 'CERI Compiler',
                                context: 'Projet Universitaire - L3',
                                period: '2024',
                                description: 'Compilateur Pascal-like vers assembleur x86-64 avec analyse lexicale, syntaxique, sémantique et génération de code',
                                tech: 'C++, Flex/Flex++, x86-64 (AT&T)'
                            },
                            {
                                title: 'Outer Wilds Wiki',
                                context: 'Projet Universitaire - L2',
                                period: '2024',
                                description: 'Site web avec back-office admin, gestion d\'articles/FAQ, système de sessions et animations Three.js',
                                tech: 'PHP, PostgreSQL, Tailwind CSS, Three.js'
                            },
                            {
                                title: 'Admin Monitoring System (AMS)',
                                context: 'Projet Universitaire - L2',
                                period: '2024',
                                description: 'Système de monitoring avec sondes système, alertes CERT-FR, dashboard web et graphiques historiques',
                                tech: 'Python, Flask, SQLite, Matplotlib'
                            },
                            {
                                title: 'Superette Stock Manager',
                                context: 'Projet Universitaire - L2',
                                period: '2024',
                                description: 'Système de gestion en CLI avec tableaux de bord, suivi des ventes/commandes et alertes de péremption',
                                tech: 'Java, PostgreSQL, JDBC'
                            },
                            {
                                title: 'Search Engine',
                                context: 'Projet Universitaire - L2',
                                period: '2024',
                                description: 'Moteur de recherche sur corpus texte avec scoring TF-IDF et BM25, vocabulaire et filtrage de stop words',
                                tech: 'Java, Algorithmes de ranking'
                            },
                            {
                                title: 'Labyrinthe',
                                context: 'Projet Universitaire - L2',
                                period: '2023-2024',
                                description: 'Jeu de labyrinthe en terminal avec génération procédurale, résolution DFS et animations ncurses',
                                tech: 'C++, ncurses, Algorithmes de graphes'
                            }
                        ].map((project, index, array) => (
                            <div 
                                key={index} 
                                className={`bg-orange-50/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200 flex flex-col ${
                                    index === array.length - 1 && array.length % 2 !== 0 ? 'md:col-span-2' : ''
                                }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-orange-700 text-base">{project.title}</h3>
                                    <span className="text-xs text-orange-600 bg-orange-100/80 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                                        {project.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 font-medium text-sm mb-1">{project.context}</p>
                                <p className="text-gray-700 text-xs mb-2 flex-1">{project.description}</p>
                                <p className="text-xs text-gray-500 italic">Technologies : {project.tech}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------Formation------------- */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        🎓 Formation
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-amber-50/60 backdrop-blur-sm rounded-xl p-5 border border-amber-200">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-amber-700 text-lg">Licence Informatique Générale</h3>
                                <span className="text-sm text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
                                    2022 - 2025
                                </span>
                            </div>
                            <p className="text-gray-600 mb-2">Université d'Avignon</p>
                            <p className="text-gray-700 text-sm mb-2">
                                <strong>Cours principaux :</strong> Programmation Orientée Objet (Java, C++),
                                Développement Web (React, PHP), Bases de Données (PostgreSQL),
                                Algorithmique, Systèmes (Bash), Analyse de Données (R, Julia)
                            </p>
                            <p className="text-gray-700 text-sm">
                                <strong>Compétences acquises :</strong> Conception logicielle, Architecture MVC,
                                Développement full-stack, Modélisation de bases de données
                            </p>
                        </div>
                        <div className="bg-yellow-50/60 backdrop-blur-sm rounded-xl p-5 border border-yellow-200">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-yellow-700 text-lg">Baccalauréat Général</h3>
                                <span className="text-sm text-yellow-600 bg-yellow-100/80 px-3 py-1 rounded-full">
                                    2022
                                </span>
                            </div>
                            <p className="text-gray-600">Spécialités : Mathématiques, NSI (Numérique et Sciences Informatiques)</p>
                        </div>
                    </div>
                </div>

                {/* -------------Langues / competences------------- */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        🌐 Langues & Compétences
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-rose-50/60 backdrop-blur-sm rounded-xl p-5 border border-rose-200">
                            <h3 className="font-bold text-rose-700 mb-3">Langues</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Français : Langue maternelle</li>
                                <li>• Anglais : Niveau B2+ (avancé)</li>
                                <li>• Japonais : Niveau A1</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50/60 backdrop-blur-sm rounded-xl p-5 border border-orange-200">
                            <h3 className="font-bold text-orange-700 mb-3">Qualités</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Autonome</li>
                                <li>• Persévérant</li>
                                <li>• Apprentissage rapide</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* -------------Contact------------- */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        📧 Contact
                    </h2>
                    <div className="bg-gradient-to-r from-orange-100/60 to-rose-100/60 backdrop-blur-sm rounded-xl p-5 border border-orange-200">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 text-sm mb-1">Email</p>
                                <p className="font-medium text-gray-800">senechal.tom@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm mb-1">GitHub</p>
                                <p className="font-medium text-gray-800">github.com/Nizyi</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cv;
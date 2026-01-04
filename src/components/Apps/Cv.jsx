function App() {
    return (
        <div className="h-full w-full overflow-auto">
            <div className="max-w-4xl mx-auto p-8 min-h-full">

                <div className="flex gap-6 mb-10">
                    {/* presentation */}
                    <div className="flex-1 bg-amber-50/80 backdrop-blur-sm rounded-xl p-5 border border-amber-200 shadow-lg">
                        <h1 className="text-3xl font-bold mb-1">Tom Sénéchal</h1>
                        <p className="text-lg mb-3 text-gray-700">
                            Étudiant en L3 Informatique — Développement Web
                        </p>
                        <p className="text-sm leading-relaxed text-gray-700">
                            Je suis actuellement étudiant en Licence 3 Informatique à l'Université d'Avignon.
                            Je m'oriente vers le développement web, et je recherche un stage afin de consolider
                            mes compétences et gagner en expérience professionnelle.
                        </p>
                    </div>
                </div>

                {/* competences */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        Compétences techniques
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50/80 rounded-xl p-4 border border-orange-200">
                            <h3 className="font-bold text-orange-700 mb-3">Développement web</h3>
                            <ul className="space-y-2">
                                {['JavaScript', 'React', 'Tailwind CSS', 'HTML / CSS', 'PHP'].map((s) => (
                                    <li key={s} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-rose-50/80 rounded-xl p-4 border border-rose-200">
                            <h3 className="font-bold text-rose-700 mb-3">Langages de programmation</h3>
                            <ul className="space-y-2">
                                {['Java', 'C++', 'Python', 'Bash'].map((s) => (
                                    <li key={s} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200">
                            <h3 className="font-bold text-amber-700 mb-3">Bases de données</h3>
                            <ul className="space-y-2">
                                {['PostgreSQL', 'SQL', 'Modélisation'].map((s) => (
                                    <li key={s} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-yellow-50/80 rounded-xl p-4 border border-yellow-200">
                            <h3 className="font-bold text-yellow-700 mb-3">Données & outils</h3>
                            <ul className="space-y-2">
                                {['R', 'Julia', 'Git'].map((s) => (
                                    <li key={s} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* projets */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        Projets principaux
                    </h2>

                    {/* principaux */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[{
                            title: 'Portfolio OS',
                            period: '2025',
                            context: 'Projet personnel',
                            description: 'Portfolio interactif inspiré d\'un système d\'exploitation, avec fenêtres déplaçables, explorateur de fichiers et animations.',
                            tech: 'React, Tailwind CSS, Framer Motion, Vite'
                        },
                        {
                            title: 'Chill2gether',
                            period: 'En cours',
                            context: 'Projet universitaire — L3',
                            description: 'Application de streaming collaboratif avec synchronisation vidéo en temps réel et gestion de rooms.',
                            tech: 'React, Node.js, Socket.io, PostgreSQL'
                        },
                        {
                            title: 'CERICar',
                            period: 'En cours',
                            context: 'Projet universitaire — L3',
                            description: 'Application web de covoiturage avec moteur de recherche intelligent, gestion des correspondances et réservations.',
                            tech: 'PHP, Yii Framework, PostgreSQL, jQuery Ajax'
                        }].map((p, i, arr) => (
                            <div
                                key={i}
                                className={`bg-orange-100/70 rounded-xl p-5 border border-orange-300 ${i === arr.length - 1 && arr.length % 2 !== 0 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-orange-800">{p.title}</h3>
                                    <span className="text-xs bg-orange-200 px-2 py-1 rounded-full">
                                        {p.period}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">{p.context}</p>
                                <p className="text-sm text-gray-700 mb-2">{p.description}</p>
                                <p className="text-xs text-gray-500">Tech : {p.tech}</p>
                            </div>
                        ))}
                    </div>

                    {/* autres */}
                    <h3 className="text-lg font-bold text-gray-700 mt-8 mb-3">
                        Autres projets
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[{
                            title: 'CERI Compiler',
                            period: '2025',
                            description: 'Compilateur Pascal-like vers assembleur x86-64 avec analyse lexicale, syntaxique et génération de code.',
                            tech: 'C++, Flex / Flex++'
                        },
                        {
                            title: 'Outer Wilds Wiki',
                            period: '2025',
                            description: 'Site web avec back-office, gestion de contenu et animations Three.js.',
                            tech: 'PHP, PostgreSQL, Three.js'
                        },
                        {
                            title: 'Admin Monitoring System',
                            period: '2025',
                            description: 'Système de monitoring avec sondes, alertes et dashboard.',
                            tech: 'Python, Flask'
                        },
                        {
                            title: 'Search Engine',
                            period: '2024',
                            description: 'Moteur de recherche avec scoring TF-IDF et BM25.',
                            tech: 'Java'
                        },
                        {
                            title: 'Labyrinthe',
                            period: '2024',
                            description: 'Jeu en terminal avec génération procédurale et résolution DFS.',
                            tech: 'C++, ncurses'
                        }].map((p, i, arr) => (
                            <div
                                key={i}
                                className={`bg-orange-50/50 rounded-xl p-4 border border-orange-200 ${i === arr.length - 1 && arr.length % 2 !== 0 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <h4 className="font-bold text-orange-700">{p.title}</h4>
                                <p className="text-xs text-gray-500 mb-1">{p.period}</p>
                                <p className="text-sm text-gray-700 mb-1">{p.description}</p>
                                <p className="text-xs italic text-gray-500">Tech : {p.tech}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* formations */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        Formation
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200">
                            <h3 className="font-bold text-amber-700">
                                Licence Informatique Générale — Université d'Avignon
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">2023 – En cours</p>
                            <p className="text-sm text-gray-700">
                                Programmation orientée objet, développement web, bases de données,
                                algorithmique, systèmes et analyse de données.
                            </p>
                        </div>

                        <div className="bg-yellow-50/60 rounded-xl p-5 border border-yellow-200">
                            <h3 className="font-bold text-yellow-700">
                                Baccalauréat Général — Spécialités Mathématiques & NSI
                            </h3>
                            <p className="text-sm text-gray-600">2023</p>
                        </div>
                    </div>
                </div>

                {/* langues */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        Langues
                    </h2>

                    <div className="flex gap-4">
                        <div className="flex-1 bg-amber-50/80 rounded-xl p-4 border border-amber-200">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-amber-700">Français</span>
                                <span className="text-sm text-gray-600">Langue maternelle</span>
                            </div>
                        </div>

                        <div className="flex-1 bg-amber-50/80 rounded-xl p-4 border border-amber-200">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-amber-700">Anglais</span>
                                <span className="text-sm text-gray-600">B2+</span>
                            </div>
                        </div>

                        <div className="flex-1 bg-amber-50/80 rounded-xl p-4 border border-amber-200">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-amber-700">Japonais</span>
                                <span className="text-sm text-gray-600">A2</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                        Contact
                    </h2>

                    <div className="bg-gradient-to-r from-orange-100/60 to-rose-100/60 rounded-xl p-5 border border-orange-200">
                        <p className="text-gray-700 mb-1">
                            <strong>Email :</strong> tom.senechal.dev@gmail.com
                        </p>
                        <p className="text-gray-700">
                            <strong>GitHub :</strong> github.com/Nizyi
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;

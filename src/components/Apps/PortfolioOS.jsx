import { VscGithub, VscCode, VscFileCode, VscWindow, VscFolder, VscRocket } from 'react-icons/vsc';

function PortfolioOS() {
    const features = [
        {
            icon: <VscWindow size={28} />,
            title: "Système de fenêtres",
            description: "Fenêtres draggables et redimensionnables avec gestion du focus"
        },
        {
            icon: <VscFolder size={28} />,
            title: "Explorateur de fichiers",
            description: "Système de dossiers hiérarchique avec navigation intuitive"
        },
        {
            icon: <VscCode size={28} />,
            title: "Applications modulaires",
            description: "Lazy loading et architecture component-based"
        },
        {
            icon: <VscFileCode size={28} />,
            title: "Interface moderne",
            description: "Design inspiré de macOS avec Tailwind CSS"
        }
    ];

    const techStack = [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Tailwind CSS', color: 'bg-cyan-500' },
        { name: 'Framer Motion', color: 'bg-purple-500' },
        { name: 'Vite', color: 'bg-yellow-500' },
        { name: 'React RnD', color: 'bg-green-500' },
    ];

    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            
            {/* Sidebar - Partie fixe sur grand écran */}
            <div className="lg:w-1/3 bg-gradient-to-br from-orange-50 to-rose-50 border-b-2 lg:border-b-0 lg:border-r-2 border-orange-200 p-6 lg:p-8 flex flex-col justify-center items-center lg:overflow-hidden">
                
                {/* Logo */}
                <div className="w-20 h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center bg-gradient-to-br from-orange-400 to-rose-500 rounded-3xl mb-4 lg:mb-6 shadow-2xl">
                    <VscRocket className="text-4xl lg:text-6xl text-white" />
                </div>

                {/* Titre et description */}
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4 text-center">
                    Portfolio OS
                </h1>
                <p className="text-base lg:text-xl text-gray-600 text-center mb-6 lg:mb-8 px-4">
                    Un portfolio interactif sous forme de système d'exploitation
                </p>

                {/* Technologies */}
                <div className="w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-orange-600 mb-3 lg:mb-4 text-center">
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

                {/* Lien GitHub */}
                <div className="mt-6 lg:mt-8">
                    <a 
                        href="https://github.com/Nizyi/OS-portfolio" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm lg:text-base"
                    >
                        <VscGithub size={20} />
                        <span className="font-semibold">Code source</span>
                    </a>
                </div>
            </div>

            {/* Content - Partie scrollable */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-6 lg:p-8">

                    {/* À propos du projet */}
                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-orange-600 mb-4 lg:mb-6 border-b-2 border-orange-200 pb-2">
                            💡 À propos du projet
                        </h2>
                        <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-4 lg:p-6 border border-orange-200">
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                                Avec ce portfolio, j'ai voulu m'essayer à React en proposant un site original qui n'est pas juste une page simple.
                                Ainsi, ce site n'est pas simplement un portfolio mais un projet à part entière qui montre mes compétences en web.
                            </p>
                            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                                Le but est de recréer le plus fidèlement possible un système d'exploitation.
                                De plus, il y a une grande liberté au niveau des fonctionnalités ce qui permet de m'améliorer 
                                dans plusieurs domaines divers et variés.
                            </p>
                        </div>
                    </div>

                    {/* Fonctionnalités principales */}
                    <div className="mb-8 lg:mb-12">
                        <h2 className="text-xl lg:text-2xl font-bold text-orange-600 mb-4 lg:mb-6 border-b-2 border-orange-200 pb-2">
                            ✨ Fonctionnalités actuelles
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-3 lg:gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
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

                    {/* Évolution future */}
                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-orange-600 mb-4 lg:mb-6 border-b-2 border-orange-200 pb-2">
                            🚀 Évolutions futures
                        </h2>
                        <div className="bg-blue-50 rounded-2xl p-4 lg:p-6 border border-blue-200 text-sm lg:text-base text-gray-700">
                            Ce projet sera constamment mis à jour, pour voir les futures fonctionnalités prévues,
                            consultez le fichier <strong>"NextFeatures"</strong> sur le bureau.
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-gradient-to-r from-orange-100 via-rose-100 to-yellow-100 rounded-2xl p-6 lg:p-8 border border-orange-200 text-center">
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                            Documentation et code source disponibles sur GitHub !
                        </h3>
                        <a 
                            href="https://github.com/Nizyi/OS-portfolio"
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

export default PortfolioOS;
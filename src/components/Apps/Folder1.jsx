function Folder1() {
    return (
        <div className="h-full w-full p-6">
            <h1 className="text-2xl font-bold text-orange-500 mb-4">Application Test</h1>
            
            <div className="space-y-4">
                <p className="text-gray-700">
                    Ceci est une application de test pour votre portfolio OS.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h2 className="font-semibold text-orange-700 mb-2">Fonctionnalités :</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Fenêtre draggable ✓</li>
                        <li>Fenêtre redimensionnable ✓</li>
                        <li>Lazy loading ✓</li>
                        <li>Bouton de fermeture ✓</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                        <p className="text-blue-700 font-medium">Quadrillage</p>
                        <p className="text-sm text-blue-600">Style dessin</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-green-700 font-medium">Bordure</p>
                        <p className="text-sm text-green-600">Orange pastel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Folder1;
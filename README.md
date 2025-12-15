# Auriel OS - Portfolio

Portfolio interactif inspiré de macOS, développé avec React et déployé sur GitHub Pages.

🌐 **Site en ligne** : [nizyi.me](https://nizyi.me)

## 📋 Description

Portfolio personnel présentant mes projets universitaires et personnels sous forme d'un système d'exploitation interactif. Interface moderne avec fenêtres draggables, dock fonctionnel et explorateur de fichiers.

## 🚀 Fonctionnalités

- **Interface macOS** : Design inspiré de macOS avec animations fluides
- **Système de fenêtres** : Fenêtres draggables et redimensionnables
- **Dock interactif** : Navigation rapide vers les applications et dossiers
- **Explorateur de fichiers** : Organisation d'applications par dossiers

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **react-rnd** - Fenêtres draggables
- **React Icons** - Icônes

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/Nizyi/nizyi.github.io.git
cd nizyi.github.io

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build
```

## 🌐 Déploiement

Le site est automatiquement déployé sur GitHub Pages via la commande :

```bash
npm run deploy
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── Apps/          # Applications individuelles
│   ├── config/        # Configuration des apps et du système
│   ├── Desktop.jsx    # Composant principal du bureau
│   ├── Dock.jsx       # Barre de navigation
│   ├── Window.jsx     # Composant fenêtre
│   └── ...
├── App.jsx
└── main.jsx
```

## 👨‍💻 Auteur

**Tom Senechal**
- GitHub: [@Nizyi](https://github.com/Nizyi)
- Email: tom.senechal.dev@gmail.com
- Portfolio: [nizyi.me](https://nizyi.me)

## 📄 Licence

Ce projet est open source et disponible pour consultation. Veuillez me contacter pour toute utilisation.

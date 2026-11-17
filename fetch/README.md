# Fetch et JSON

Base du TP, avec Vite, le HTML, la CSS et les fonctions de manipulation du DOM.

## Démarrer

Sur [GitHub](https://github.com/Chabloz/progweb_fetchjson), cliquez sur **Use this template → Create a new repository** pour créer votre propre dépôt.

Clonez ensuite votre dépôt en remplaçant `VOTRE-COMPTE` et `VOTRE-DEPOT` par votre compte GitHub et le nom choisi :

```sh
git clone https://github.com/VOTRE-COMPTE/VOTRE-DEPOT.git
cd VOTRE-DEPOT
npm install
npm run dev
```

## Organisation

- `index.html` : point d’entrée HTML, à la racine du projet.
- `src/main.js` : code du TP, à écrire.
- `src/fetch.css` : styles de la page.
- `src/utils/dom.js` : fonctions de manipulation du DOM.
- `src/utils/fetch.js` : chargement de données JSON, pour une ou plusieurs URL.
- `src/assets/` : logo et favicon.

`npm run build` prépare la version de production dans `dist/`.
`npm run preview` permet de la consulter localement.

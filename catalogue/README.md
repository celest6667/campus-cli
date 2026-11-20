# Catalogue — Exercice 01.2

Un premier programme TypeScript, compilé par `tsc`, sans aucun `any`.

## Lancer

```bash
npm install
npm start -- 2
```

`npm start` compile `src/` vers `dist/` (`tsc`), puis exécute `dist/index.js` avec Node.

## Exemples

```
$ npm start -- 1
Clavier · 49 € · Clavier mécanique AZERTY
À moins de 50 € : Clavier, Souris, Tapis de souris

$ npm start -- 2
Souris · 19 € · Pas de description

$ npm start -- 9
Produit 9 introuvable
```

## Étape 6 — Trois erreurs provoquées

| Erreur provoquée | Code ajouté | Code TS | Message |
|---|---|---|---|
| Faute de frappe | `products[0].nmae` | **TS2339** | Property 'nmae' does not exist on type 'Product'. |
| Mauvais type | `findById(products, '2')` | **TS2345** | Argument of type 'string' is not assignable to parameter of type 'number'. |
| Absence non traitée | `findById(products, 1).name` | **TS2532** | Object is possibly 'undefined'. |

Bonus (champ `category`) : `category: 'mobilier'` donne **TS2322**, « Type '"mobilier"' is not assignable to type 'Category' ».

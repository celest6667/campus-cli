# campus-cli

Petit programme Node qui accueille une personne sur Campus.

```bash
npm install
npm start -- "Frédéric Bellano"
```

```
Salut et bienvenue sur le campus Frédéric Bellano !
Ton identifiant : frederic-bellano
Nous sommes le vendredi 20 novembre 2026.
```

---

## Exercice 01.1 — Choisir et figer une dépendance

### 1. Installer `slugify`

`npm install slugify` a ajouté `"slugify": "^1.6.9"` au `package.json` et créé `package-lock.json`, qui fige la version 1.6.9.
`node_modules/` est dans le `.gitignore` : `git status` ne le montre pas.

### 2. Quelles versions sont acceptées ?

| Version | `^1.6.9` (correctifs + mineures) | `~1.6.9` (correctifs seulement) |
|---|---|---|
| `1.6.12` | ✅ oui | ✅ oui |
| `1.7.0` | ✅ oui | ❌ non (mineure) |
| `1.10.0` | ✅ oui (10 > 6 : on compare les nombres, pas le texte) | ❌ non |
| `2.0.0` | ❌ non (majeure : peut casser le code) | ❌ non |
| `1.6.2` | ❌ non (plus ancienne que 1.6.9) | ❌ non |

- `^1.6.9` accepte tout ce qui va de `1.6.9` jusqu'à `2.0.0` exclu.
- `~1.6.9` accepte tout ce qui va de `1.6.9` jusqu'à `1.7.0` exclu.

Vérifié avec le module `semver` utilisé par npm lui-même.

### 3. Faut-il un paquet ?

**Non, dans les deux cas** : Node et le langage le font déjà.

- **Identifiant aléatoire** : `crypto.randomUUID()`, fourni par Node (module `node:crypto`) et aussi disponible dans les navigateurs (doc MDN : *Crypto.randomUUID()*).
  ```js
  import { randomUUID } from "node:crypto";
  randomUUID(); // '633f4f29-db1e-4821-bd1c-f937eca21558'
  ```
- **Date en français** : `toLocaleDateString` / `Intl.DateTimeFormat` (doc MDN), déjà utilisé dans `campus.js`.
  ```js
  new Date().toLocaleDateString("fr-FR", { dateStyle: "full" }); // 'vendredi 20 novembre 2026'
  ```

### 4. Un paquet pour afficher « il y a 3 jours » ?

Noms proposés par une IA, puis vérifiés un par un sur le registre npm (`npm view`, en novembre 2026) :

| Paquet proposé | Existe ? | Maintenu ? | Téléchargements / semaine | Verdict |
|---|---|---|---|---|
| `moment` | ✅ | En mode maintenance (déclaré par l'équipe), lourd | ~52 M | ❌ déconseillé pour un nouveau projet |
| `date-fns` | ✅ | Oui (v4.4.0, mai 2026) | ~127 M | Possible : `formatDistance` + locale `fr` |
| `dayjs` | ✅ | Oui (v1.11.23, août 2026) | ~117 M | Possible : plugin `relativeTime` + locale `fr` |
| `timeago.js` | ✅ | Oui (v4.3.1, nov. 2026) | ~0,5 M | Possible, mais petit projet |
| `javascript-time-ago` | ✅ | Oui (v2.6.4, fév. 2026) | ~0,7 M | Possible |
| `il-y-a` | ❌ **n'existe pas** (E404) | — | — | Nom inventé par l'IA |
| `timeago-fr` | ❌ **n'existe pas** (E404) | — | — | Nom inventé par l'IA |
| `french-time-ago` | ❌ **n'existe pas** (E404) | — | — | Nom inventé par l'IA |

**Un paquet est-il vraiment utile ? Non.** Le langage fournit déjà `Intl.RelativeTimeFormat` (doc MDN) :

```js
new Intl.RelativeTimeFormat("fr", { numeric: "auto" }).format(-3, "day"); // 'il y a 3 jours'
```

**Ce qu'on retient :**
- Une IA peut inventer des noms de paquets qui n'existent pas.
- Pire, quelqu'un peut publier plus tard un paquet malveillant sous l'un de ces noms inventés.
- Il faut toujours vérifier le nom exact, le dépôt, la date de dernière mise à jour et le nombre de téléchargements.
- Avant tout, il faut se demander si Node ou le langage ne le font pas déjà.

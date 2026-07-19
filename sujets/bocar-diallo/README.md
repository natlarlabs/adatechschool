# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois exercices courts (algorithmique, débogage et discussion de code). Ils servent de **support de discussion** : on s'intéresse autant à ta démarche et à ta façon de réfléchir qu'au résultat final. Il n'y a **aucun piège**.

Quelques conseils pour aborder l'entretien sereinement :

- Prends le temps de **lire chaque énoncé calmement** avant de te lancer.
- **Pense à voix haute** pendant l'entretien : explique ce que tu comprends, ce que tu essaies, ce qui te bloque. C'est exactement ce qu'on cherche à voir.
- Le papier, le pseudo-code et les essais/erreurs sont les bienvenus.
- Si tu ne sais pas, dis-le : « je ne suis pas sûr, mais je tenterais ceci… » vaut mieux que de rester bloqué en silence.
- Une méthode utile : **reformuler** l'énoncé avec tes mots → penser à des **exemples** → décrire ton **approche** → **coder** → **tester** → **améliorer** si le temps le permet.

Bonne préparation !

---

## Exercice A — Logique / algorithme (JavaScript)

On te donne une liste de livraisons, chacune décrite par un identifiant, une ville et un statut.

Écris une fonction `compterLivrees(liste)` qui renvoie **le nombre de livraisons dont le statut est `"livrée"`**.

**Données de départ** (également fournies dans le fichier `exercice-a.js`) :

```js
const livraisons = [
  { id: 1, ville: "Palaiseau", statut: "livrée" },
  { id: 2, ville: "Massy",     statut: "en_cours" },
  { id: 3, ville: "Igny",      statut: "livrée" },
  { id: 4, ville: "Villebon",  statut: "en_cours" },
  { id: 5, ville: "Palaiseau", statut: "livrée" },
];

export function compterLivrees(liste) {
  // à compléter
}
```

**Exemple de résultat attendu** :

```
compterLivrees(livraisons)  ->  3
```

Complète le corps de la fonction dans le fichier `exercice-a.js`. Toutes les approches raisonnables sont acceptées, l'essentiel est que tu puisses expliquer la tienne.

---

## Exercice B — Débogage d'une route Express + MySQL

Voici une route Express censée enregistrer une nouvelle livraison dans une base **MySQL** (via le driver `mysql2`).

Elle contient **4 bugs**. Lis le code (à voix haute pendant l'entretien), repère ce qui cloche et propose une version corrigée dans le fichier `exercice-b.js`.

```js
// POST /livraisons — enregistrer une nouvelle livraison
app.post("/livraisons", (req, res) => {
  const { ville, statut } = req.params;
  const sql = "INSERT INTO livraisons (ville, statut) VALUES ($1, $2)";
  try {
    const result = pool.execute(sql, [ville, statut]);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

À toi de trouver les 4 problèmes et d'expliquer, pour chacun, pourquoi c'est un bug et comment tu le corriges.

---

## Exercice C — Parle-nous de ton code

Cet exercice est une discussion ouverte, sans code à écrire. Prépare de quoi en parler :

- As-tu un **GitHub** ? Si oui, prépare le lien : on pourra regarder un projet ensemble.
- Raconte-nous **un** projet sur lequel tu as travaillé (même modeste, même en équipe) : c'était quoi, pour qui, et quelle était la stack ?
- Quelle a été **ta part réelle** dans ce projet par rapport à celle de l'équipe ?
- Choisis une partie du code que **toi** tu as écrite et que tu comprends bien, et sois prêt·e à nous l'expliquer.
- Quelle a été la plus grosse difficulté rencontrée, et comment tu l'as débloquée ?
- Si tu as utilisé de l'IA sur ce projet, comment t'es-tu assuré·e de bien comprendre le code produit ?

---

## Consignes Git (important)

**Ta façon d'utiliser Git fait partie de ce qu'on observe.** Pas besoin d'être expert·e : on veut voir un flux de travail propre et des messages de commit clairs.

1. **Clone** le dépôt sur ta machine :
   ```bash
   git clone <url-du-depot>
   cd <dossier-du-depot>
   ```
2. **Crée une branche à ton nom** (remplace par ton prénom et ton nom) :
   ```bash
   git checkout -b prenom-nom
   ```
3. **Code** dans les fichiers `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et en français ou en anglais :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : compte les livraisons livrées"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. Ouvre une **Pull Request** de ta branche vers la branche principale, avec un court descriptif de ce que tu as fait.

Ne t'inquiète pas si tu n'es pas sûr·e de toutes les commandes : montre ce que tu sais faire, et n'hésite pas à verbaliser tes hésitations. On regarde la démarche, pas la perfection.

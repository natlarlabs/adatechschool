# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**.

---

## Exercice A — Logique / algo

On a la liste des plats commandés sur un service en restaurant. Écris une fonction `topPlats(commandes)` qui renvoie, pour chaque plat, la **quantité totale commandée**, triée de la plus grande à la plus petite, en ne gardant que **les 3 premiers**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const commandes = [
  { id: 1, plat: "Ramen",    quantite: 3, table: 4 },
  { id: 2, plat: "Gyoza",    quantite: 2, table: 4 },
  { id: 3, plat: "Ramen",    quantite: 1, table: 7 },
  { id: 4, plat: "Katsudon", quantite: 5, table: 2 },
  { id: 5, plat: "Gyoza",    quantite: 4, table: 2 },
  { id: 6, plat: "Udon",     quantite: 1, table: 9 },
];
```

### Exemple de résultat attendu

```js
[
  { plat: "Gyoza",    total: 6 },
  { plat: "Katsudon", total: 5 },
  { plat: "Ramen",    total: 4 },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /reservations` qui doit enregistrer une réservation de table, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /reservations — enregistre une réservation
app.post("/reservations", async (req, res) => {
  const { client, couverts, date_reservation } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO reservations (client, couverts, date_reservation) VALUES (?, ?, ?)",
      [client, couverts, date_reservation]
    );
    res.json(result);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets. Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Ouvre un de tes dépôts et fais-moi visiter : à quoi sert ce projet, et pourquoi tu l'as construit comme ça ?
- Montre-moi le bout de code dont tu es le plus fier. Et celui que tu **réécrirais** aujourd'hui ?
- Ton site personnel, tu l'as construit comment ? Il est **déployé** où ?
- Raconte-moi un exercice ou un projet de formation sur lequel tu as vraiment galéré, et comment tu t'en es sorti.

Il n'y a pas de « bonne » réponse attendue : on cherche la cohérence entre ce que tu décris et ton code, ta capacité à retrouver et lire ton propre code sereinement, et une réflexion critique honnête.

Si tu as un projet en cours, même inachevé, n'hésite pas à le montrer. Un projet imparfait qu'on sait expliquer vaut mieux qu'un projet parfait qu'on ne présente pas.

---

## Consignes Git (important)

La façon dont tu utilises Git fait **partie de ce qui est observé**. On ne cherche pas une maîtrise parfaite, mais un workflow clair et des commits qui racontent ta progression.

1. **Clone** le dépôt sur ta machine :
   ```bash
   git clone <url-du-depot>
   cd <dossier-du-depot>
   ```
2. **Crée une branche à ton nom** avant de coder :
   ```bash
   git checkout -b samuel-kelly
   ```
3. **Code dans les fichiers** `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : total des quantités par plat"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin samuel-kelly
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

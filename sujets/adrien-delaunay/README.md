# Exercices — entretien technique de simulation (Adrien)

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**. Si tu travailles plutôt avec une autre base (par ex. MySQL), dis-le en début d'entretien, on s'adapte.

---

## Exercice A — Logique / algo

Ton application discute avec une IA. On a l'historique des messages échangés, chacun avec un **sujet** et un nombre de **tokens** consommés. Écris une fonction `tokensParSujet(messages)` qui renvoie, pour chaque sujet, le **total de tokens consommés**, le tout **trié du sujet le plus coûteux au moins coûteux**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const messages = [
  { id: 1, role: "user",      sujet: "Résumé",     tokens: 120 },
  { id: 2, role: "assistant", sujet: "Résumé",     tokens: 340 },
  { id: 3, role: "user",      sujet: "Traduction", tokens: 90  },
  { id: 4, role: "assistant", sujet: "Traduction", tokens: 210 },
  { id: 5, role: "user",      sujet: "Code",       tokens: 200 },
  { id: 6, role: "assistant", sujet: "Code",       tokens: 500 },
];
```

### Exemple de résultat attendu

```js
[
  { sujet: "Code",       tokens: 700 },
  { sujet: "Résumé",     tokens: 460 },
  { sujet: "Traduction", tokens: 300 },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /messages` qui doit enregistrer un message échangé avec l'assistant IA, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /messages — enregistre un message échangé avec l'IA
app.post("/messages", async (req, res) => {
  const { role, sujet, tokens } = req.params;
  try {
    const result = await pool.query(
      "INSERT INTO messages (role, sujet, tokens) VALUES (?, ?, ?)",
      [role, sujet, tokens]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets (par exemple ceux hébergés sur ton GitHub). Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi la partie d'un de tes projets dont tu es le plus fier. Qu'est-ce que tu **referais différemment** aujourd'hui ?
- Montre-moi un endroit où tu appelles une API (une IA, ou une autre) : comment tu gères la **clé** et les **erreurs** de l'appel ?
- Où est le code que **toi** tu as écrit, par rapport à ce qui vient d'un template ou d'une IA ?
- Ton projet est-il **déployé** quelque part, accessible en ligne ?

Il n'y a pas de « bonne » réponse attendue : on cherche la cohérence entre ce que tu décris et ton code, ta capacité à retrouver et lire ton propre code sereinement, et une réflexion critique honnête.

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
   git checkout -b adrien-delaunay
   ```
3. **Code dans les fichiers** `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : total de tokens par sujet"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin adrien-delaunay
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

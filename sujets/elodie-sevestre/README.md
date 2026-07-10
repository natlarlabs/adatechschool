# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**.

---

## Exercice A — Logique / algo

On a une liste de compétences, chacune avec une catégorie et un pourcentage de progression. Écris une fonction `progressionParCategorie(competences)` qui renvoie, pour chaque catégorie, la **moyenne de progression arrondie à l'entier**, le tout **trié de la plus forte à la plus faible moyenne**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const competences = [
  { id: 1, nom: "React",      categorie: "Frontend", progression: 80 },
  { id: 2, nom: "CSS",        categorie: "Frontend", progression: 60 },
  { id: 3, nom: "PostgreSQL", categorie: "Backend",  progression: 70 },
  { id: 4, nom: "Express",    categorie: "Backend",  progression: 50 },
  { id: 5, nom: "Git",        categorie: "Outils",   progression: 90 },
];
```

### Exemple de résultat attendu

```js
[
  { categorie: "Outils",   moyenne: 90 },
  { categorie: "Frontend", moyenne: 70 },
  { categorie: "Backend",  moyenne: 60 },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /competences` qui doit créer une compétence rattachée à un projet, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /competences — crée une compétence rattachée à un projet
app.post("/competences", async (req, res) => {
  const { nom, categorie, projet_id } = req.params;
  try {
    const result = await pool.query(
      "INSERT INTO competences (nom, categorie, projet_id) VALUES (?, ?, ?)",
      [nom, categorie, projet_id]
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

- Montre-moi une **table de liaison** d'une relation many-to-many dans un de tes schémas, et explique comment elle relie les deux tables.
- Montre-moi un exemple de **gestion des erreurs** dans une API : pourquoi centraliser la gestion plutôt que la traiter au cas par cas dans chaque route ?
- Montre-moi la partie d'un de tes projets dont tu es la plus fière. Qu'est-ce que tu **referais différemment** aujourd'hui ?
- Tes projets sont-ils **déployés** quelque part, accessibles en ligne ?

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
   git checkout -b prenom-nom
   ```
3. **Code dans les fichiers** `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : moyenne de progression par catégorie"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

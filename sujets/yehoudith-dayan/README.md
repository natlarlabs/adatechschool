# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **TypeScript** côté logique, **Node.js / Express** côté serveur et **PostgreSQL** côté base — la même que GlobeTrotteuses.

---

## Exercice A — Logique / algo

Ton équipe a proposé une liste d'activités pour un voyage. Chacune a une destination, un coût et un nombre de votes.

Écris une fonction `activitesRetenues(activites, budgetMax)` qui :

1. garde uniquement les activités dont le coût **ne dépasse pas** `budgetMax` ;
2. les trie **par nombre de votes décroissant**, et **à égalité de votes, la moins chère d'abord** ;
3. renvoie pour chacune seulement `{ id, titre, cout }`.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.ts`](./exercice-a.ts).

### Données de départ

```ts
const activites: Activite[] = [
  { id: 1, titre: "Visite du Colisée",        destination: "Rome",   cout: 18,  votes: 5 },
  { id: 2, titre: "Cours de cuisine",         destination: "Rome",   cout: 65,  votes: 3 },
  { id: 3, titre: "Balade en gondole",        destination: "Venise", cout: 30,  votes: 5 },
  { id: 4, titre: "Musée Guggenheim",         destination: "Venise", cout: 16,  votes: 2 },
  { id: 5, titre: "Vol en montgolfière",      destination: "Rome",   cout: 180, votes: 4 },
];
```

### Exemple de résultat attendu

Pour `activitesRetenues(activites, 50)` :

```ts
[
  { id: 1, titre: "Visite du Colisée", cout: 18 },
  { id: 3, titre: "Balade en gondole", cout: 30 },
  { id: 4, titre: "Musée Guggenheim",  cout: 16 },
]
```

Complète le corps de la fonction dans `exercice-a.ts`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /voyages/:voyageId/activites` qui doit ajouter une activité à un voyage, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /voyages/:voyageId/activites — ajoute une activité à un voyage
app.post("/voyages/:voyageId/activites", (req, res) => {
  const { voyageId } = req.params;
  const { titre, cout } = req.body;

  try {
    const result = pool.query(
      "INSERT INTO activites (voyage_id, titre, cout) VALUES (?, ?, ?) RETURNING *",
      [voyageId, titre, cout]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets (par exemple GlobeTrotteuses, sur ton GitHub). Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi la **table de liaison** entre les voyages et les participantes dans ton schéma, et explique comment elle relie les deux tables.
- Montre-moi une **route Express** que tu as écrite toi-même, et déroule-la ligne par ligne.
- Montre-moi ton **historique Git** : tes commits, une de tes Pull Requests.
- Montre-moi la partie de GlobeTrotteuses dont tu es la plus fière. Qu'est-ce que tu **referais différemment** aujourd'hui ?
- Le projet est-il **déployé** quelque part, accessible en ligne ?

Il n'y a pas de « bonne » réponse attendue : on cherche la cohérence entre ce que tu décris et ton code, ta capacité à retrouver et lire ton propre code sereinement, et une réflexion critique honnête. Comme GlobeTrotteuses est un projet d'équipe, dire clairement ce que tu as fait toi et ce qu'ont fait tes coéquipières est **un point positif**, jamais un aveu de faiblesse.

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
3. **Code dans les fichiers** `exercice-a.ts` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add exercice-a.ts
   git commit -m "Exercice A : filtre par budget et tri par votes"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

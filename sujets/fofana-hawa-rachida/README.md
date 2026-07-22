# Exercices — entretien technique de simulation

Bienvenue Rachida, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**.

---

## Exercice A — Logique / algo

On a une liste de tâches d'une association, chacune avec un titre, un membre responsable et un statut. Écris une fonction `chargeParMembre(taches)` qui renvoie, pour chaque membre, le **nombre de tâches non terminées** (statut différent de `"terminée"`), le tout **trié du membre le plus chargé au moins chargé**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const taches = [
  { id: 1, titre: "Réserver la salle",        membre: "Awa",   statut: "terminée" },
  { id: 2, titre: "Préparer l'ordre du jour", membre: "Karim", statut: "en_cours" },
  { id: 3, titre: "Envoyer les invitations",  membre: "Awa",   statut: "à_faire" },
  { id: 4, titre: "Mettre à jour le site",    membre: "Léa",   statut: "en_cours" },
  { id: 5, titre: "Relire le budget",         membre: "Karim", statut: "à_faire" },
  { id: 6, titre: "Archiver les comptes",     membre: "Karim", statut: "terminée" },
];
```

### Exemple de résultat attendu

```js
[
  { membre: "Karim", taches: 2 },
  { membre: "Awa",   taches: 1 },
  { membre: "Léa",   taches: 1 },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /taches` qui doit créer une tâche dans l'application d'association, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /taches — crée une tâche dans l'association
app.post("/taches", async (req, res) => {
  const { titre, membre_id, statut } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO taches (titre, membre_id, statut) VALUES (?, ?, ?)",
      [titre, membre_id, statut]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets — ton **application de gestion d'association** (membres, tâches, projets), **GDPLAT**, ton **Quiz interactif**, et si tu peux la montrer, l'interface **DSI Help** de ton stage. Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi (ou décris-moi) la partie dont tu es la **plus fière**, et explique-la-moi comme à une collègue.
- Montre-moi un bout de **back-end** que tu as écrit toi-même : une route, une requête SQL.
- Pour gérer des membres, des tâches et des projets, tu ferais quelles **tables**, et comment tu relies une tâche à son membre ?
- **GDPLAT**, c'est quoi exactement (projet d'école, perso, pro) et qu'est-ce que tu y as fait ?
- Quelle a été ta **plus grosse galère technique** (un formulaire Angular, un souci de routing, une requête…) et comment tu l'as débloquée ?
- Qu'est-ce que tu **referais différemment** aujourd'hui ?

Il n'y a pas de « bonne » réponse attendue : on cherche la cohérence entre ce que tu décris et ton code, ta capacité à retrouver et lire ton propre code sereinement, et une réflexion critique honnête. Pense à avoir ton dépôt GitHub ouvert et accessible — merci de m'avoir déjà transmis le lien.

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
   git commit -m "Exercice A : charge de tâches par membre"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

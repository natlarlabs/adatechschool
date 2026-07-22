# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**.

---

## Exercice A — Logique / algo

On a une liste de factures, chacune avec un client, un montant HT, un taux de TVA et un statut. Écris une fonction `totalParClient(factures)` qui renvoie, pour chaque client, le **total TTC de ses factures payées** (montant HT × (1 + TVA)), **arrondi à 2 décimales**, le tout **trié du plus gros total au plus petit**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const factures = [
  { id: 1, client: "Boulangerie Petit", montantHT: 1200, tva: 0.20, statut: "payée" },
  { id: 2, client: "Garage Rousseau",   montantHT: 800,  tva: 0.20, statut: "en_attente" },
  { id: 3, client: "Boulangerie Petit", montantHT: 500,  tva: 0.055, statut: "payée" },
  { id: 4, client: "Cabinet Lemoine",   montantHT: 2000, tva: 0.20, statut: "payée" },
  { id: 5, client: "Garage Rousseau",   montantHT: 300,  tva: 0.20, statut: "payée" },
];
```

### Exemple de résultat attendu

```js
[
  { client: "Cabinet Lemoine",   totalTTC: 2400 },
  { client: "Boulangerie Petit", totalTTC: 1967.5 },
  { client: "Garage Rousseau",   totalTTC: 360 },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /factures` qui doit créer une facture pour un client, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /factures — crée une facture pour un client
app.post("/factures", async (req, res) => {
  const { client_id, montant_ht, tva } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO factures (client_id, montant_ht, tva) VALUES (?, ?, ?)",
      [client_id, montant_ht, tva]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets — en particulier **Dev to Hero**, ton extension Chrome. Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi la partie de Dev to Hero dont tu es le **plus fier**, et explique-la-moi comme à un collègue.
- Comment les différents morceaux de l'extension **communiquent entre eux** (manifest, scripts, popup…) ?
- Quelle a été ta **plus grosse galère technique** sur ce projet, et comment tu l'as débloquée ?
- Qu'est-ce que tu **referais différemment** aujourd'hui ?

Il n'y a pas de « bonne » réponse attendue : on cherche la cohérence entre ce que tu décris et ton code, ta capacité à retrouver et lire ton propre code sereinement, et une réflexion critique honnête. Pense à avoir ton dépôt GitHub ouvert et accessible.

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
   git commit -m "Exercice A : total TTC par client"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

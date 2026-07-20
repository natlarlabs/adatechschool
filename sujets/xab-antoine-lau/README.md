# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **JavaScript** (Node.js / Express) et **PostgreSQL**.

---

## Exercice A — Logique / algo

On a une liste de mesures à afficher dans un tableau de bord. Chaque mesure a une catégorie et une valeur. Écris une fonction `totalParCategorie(mesures)` qui renvoie, pour chaque catégorie, le **total des valeurs**, le tout **trié du plus grand au plus petit total**.

Les données de départ et la signature de fonction à compléter se trouvent dans le fichier [`exercice-a.js`](./exercice-a.js).

### Données de départ

```js
const mesures = [
  { id: 1, label: "Lundi",    categorie: "Ventes",   valeur: 120 },
  { id: 2, label: "Mardi",    categorie: "Ventes",   valeur: 80  },
  { id: 3, label: "Lundi",    categorie: "Visites",  valeur: 300 },
  { id: 4, label: "Mardi",    categorie: "Visites",  valeur: 250 },
  { id: 5, label: "Lundi",    categorie: "Retours",  valeur: 15  },
];
```

### Exemple de résultat attendu

```js
[
  { categorie: "Visites", total: 550 },
  { categorie: "Ventes",  total: 200 },
  { categorie: "Retours", total: 15  },
]
```

Complète le corps de la fonction dans `exercice-a.js`.

---

## Exercice B — Débogage Express + PostgreSQL

Voici un handler `POST /mesures` qui doit enregistrer une nouvelle mesure du tableau de bord, dans une stack Express + PostgreSQL (via le driver `pg`).

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure — un peu comme un diagnostic de panne : quel est le symptôme, quelle est l'hypothèse, comment on vérifie.

Le code à corriger se trouve dans le fichier [`exercice-b.js`](./exercice-b.js).

```js
const pool = require("./db"); // pool pg déjà configuré

// POST /mesures — enregistre une nouvelle mesure du dashboard
app.post("/mesures", async (req, res) => {
  const { label, categorie, valeur } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO mesures (label, categorie, valeur) VALUES (?, ?, ?) RETURNING *",
      [label, categorie, valeur]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets (par exemple `adashboard` et `gisele-adapage-Alau` sur ton GitHub). Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi l'endroit où ton front va **chercher les données** de l'API, et explique cette partie ligne par ligne.
- Montre-moi une de tes **routes Express** : qu'est-ce qu'elle fait, du premier au dernier caractère ?
- Montre-moi la partie d'un de tes projets dont tu es le plus fier. Qu'est-ce que tu **referais différemment** aujourd'hui ?
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
   git checkout -b xab-antoine-lau
   ```
3. **Code dans les fichiers** `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : total des valeurs par catégorie"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin xab-antoine-lau
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

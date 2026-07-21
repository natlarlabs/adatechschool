# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de faire cet exercice.

Ce petit dépôt contient trois exercices de mise en situation (algorithmie, débogage et revue de code). Il n'y a **aucun piège** : l'objectif n'est pas de tout réussir parfaitement, mais de voir **comment tu raisonnes**.

Quelques conseils pour aborder l'entretien sereinement :

- **Prends le temps de lire** chaque énoncé tranquillement avant de te lancer.
- **Pense à voix haute** : explique ta démarche, tes hypothèses, tes doutes. C'est au moins aussi important que le résultat final.
- Si tu ne sais pas, **dis-le** : reformuler, tester, avancer par étapes est tout à fait valorisé.
- Une solution simple et claire vaut mieux qu'une solution « maligne » mais illisible.

Bonne chance, et surtout : détends-toi, on est là pour échanger. 🙂

---

## Exercice A — Logique / algo « arbres de Nantes »

On dispose d'un tableau d'arbres recensés dans la ville. Chaque arbre est un objet avec un `id`, une `espece`, une `hauteur` (en mètres) et un `quartier`.

Écris une fonction `arbresRemarquables(liste)` qui renvoie **uniquement les arbres de plus de 20 mètres**, **triés du plus haut au plus bas**, en ne gardant que les champs `{ id, espece }`.

**Données de départ** (voir aussi le fichier `exercice-a.js`) :

```js
const arbres = [
  { id: 1, espece: "Chêne",    hauteur: 25, quartier: "Bouffay" },
  { id: 2, espece: "Platane",  hauteur: 18, quartier: "Doulon"  },
  { id: 3, espece: "Séquoia",  hauteur: 40, quartier: "Procé"   },
  { id: 4, espece: "Cerisier", hauteur: 8,  quartier: "Bouffay" },
  { id: 5, espece: "Tilleul",  hauteur: 22, quartier: "Doulon"  },
];

export function arbresRemarquables(liste) {
  // à compléter
}
```

**Exemple de résultat attendu** — sur les données ci-dessus, `arbresRemarquables(arbres)` doit renvoyer :

```js
[
  { id: 3, espece: "Séquoia" },
  { id: 1, espece: "Chêne" },
  { id: 5, espece: "Tilleul" },
]
```

> Complète ton code dans le fichier **`exercice-a.js`**. Toutes les approches sont acceptées (méthodes de tableau, boucle classique…) : choisis celle avec laquelle tu es à l'aise.

---

## Exercice B — Débogage d'une API Express + PostgreSQL

Voici un handler `POST /taches` d'une petite API **Express** qui crée une tâche et l'enregistre dans une base **PostgreSQL** (via le driver `pg`). Ce code **ne fonctionne pas correctement** : il contient **4 bugs**.

Ta mission : les **repérer** et proposer une **correction** pour chacun. Lis le code à voix haute et explique ce qui ne va pas au fur et à mesure.

Le code à corriger se trouve dans le fichier **`exercice-b.js`** :

```js
// POST /taches — créer une tâche (Express + PostgreSQL / pg)
app.post("/taches", async (req, res) => {
  const { titre, statut, priorite } = req.params;
  const result = pool.query(
    "INSERT INTO taches (titre, statut, priorite) VALUES (?, ?, ?)",
    [titre, statut, priorite]
  );
  res.status(200).json(result.rows);
});
```

> Il y a **exactement 4 bugs** à trouver. Corrige-les directement dans `exercice-b.js`.

---

## Exercice C — Revue de code / présentation de projet

Cet exercice se fait à l'oral, à partir de **ton propre GitHub**. Prépare-toi à échanger autour de tes projets. Quelques questions qui pourront être abordées :

- Montre-nous une partie d'un de tes projets dont tu es **particulièrement fière/fier**. Ouvre le code, **lis-le** et explique **ce qui se passe**, autant que possible ligne à ligne.
- Quelle a été ta **plus grosse difficulté** sur ce projet, et comment l'as-tu débloquée ?
- Qu'est-ce que tu **referais différemment** aujourd'hui ?
- Si tu as écrit de la **documentation** (README, JSDoc…), montre-la et explique pourquoi tu documentes de cette manière.

> Pas de bonne réponse unique ici : on cherche à comprendre ta manière de travailler, ton honnêteté sur ce que tu maîtrises, et ta façon d'expliquer.

---

## Consignes Git (important)

La **façon dont tu utilises Git fait partie de ce qui est observé** : commits réguliers, messages clairs, et ouverture d'une Pull Request. Voici le déroulé attendu :

1. **Clone** le dépôt sur ta machine :
   ```bash
   git clone <url-du-depot>
   cd <nom-du-depot>
   ```
2. **Crée une branche à ton nom** :
   ```bash
   git checkout -b prenom-nom
   ```
   (remplace `prenom-nom` par ton prénom et ton nom, par exemple `git checkout -b jeanne-dupont`)
3. **Code** dans les fichiers `exercice-a.js` et `exercice-b.js`.
4. **Committe au fur et à mesure**, avec des messages clairs et explicites :
   ```bash
   git add exercice-a.js
   git commit -m "Exercice A : filtre et tri des arbres remarquables"
   ```
5. **Pousse ta branche** vers le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** depuis ta branche vers la branche principale, sur GitHub.

> Pas d'inquiétude si tu n'as pas tout terminé : committe ce que tu as, l'important est de montrer ta démarche. Committer régulièrement (plutôt qu'un seul gros commit à la fin) et écrire des messages compréhensibles fait partie de ce qu'on regarde.

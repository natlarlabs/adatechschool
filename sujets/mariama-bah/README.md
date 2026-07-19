# Exercices — entretien technique de simulation

Bienvenue, et merci de prendre le temps de préparer cet entretien de simulation.

Ce dépôt contient trois petits exercices. Prends le temps de **bien lire chaque énoncé** avant de te lancer. Pendant l'entretien, **pense à voix haute** : ce qui nous intéresse, c'est ta façon de raisonner, pas de tout réussir du premier coup. Il n'y a pas de piège, et il est tout à fait normal de dire « je ne sais pas encore » ou « je réfléchirais comme ça ». Bon courage, et surtout, sois à l'aise !

La stack de référence est **C# / .NET** (ASP.NET Core, Entity Framework Core) et une base **SQL**.

---

## Exercice A — Logique / algo

On gère le planning d'un service de soins. Chaque soignant·e a un nombre d'heures déjà planifiées cette semaine et un indicateur de disponibilité. Écris une fonction `SoignantsAProposer(equipe)` qui renvoie les **noms** des soignant·es **disponibles**, triés du **moins chargé au plus chargé** — pour proposer d'abord les créneaux à ceux qui ont le moins d'heures.

Les données de départ et la signature de la fonction à compléter se trouvent dans le fichier [`ExerciceA.cs`](./ExerciceA.cs).

### Données de départ

```csharp
var equipe = new List<Soignant>
{
    new("Awa",    32, true),
    new("Bruno",  18, false),
    new("Chloé",  12, true),
    new("David",  35, true),
    new("Emma",   22, false),
};
```

### Exemple de résultat attendu

```csharp
["Chloé", "Awa", "David"]
```

Complète le corps de la fonction dans `ExerciceA.cs`.

---

## Exercice B — Débogage ASP.NET Core + EF Core

Voici un endpoint `POST /conges` qui doit enregistrer une demande de congé d'un employé, dans une stack ASP.NET Core (minimal API) + Entity Framework Core.

**Ce code contient 4 bugs.** À toi de les repérer et de les corriger. Lis-le à voix haute et explique ce qui cloche au fur et à mesure.

Le code à corriger se trouve dans le fichier [`ExerciceB.cs`](./ExerciceB.cs).

```csharp
// POST /conges — enregistrer une demande de congé d'un employé
app.MapPost("/conges", (PlanningDb db, int employeId, DateOnly debut, DateOnly fin) =>
{
    var employe = db.Employes.Find(employeId);
    var conge = new Conge { EmployeId = employe.Id, Debut = debut, Fin = fin };

    db.Conges.Add(conge);

    return Results.Ok(conge);
});
```

---

## Exercice C — Revue de code / projet

Cet exercice est une discussion à l'oral autour de tes propres projets (par exemple One Click Planning, si tu peux en partager le code). Prépare-toi à naviguer dans ton code et à répondre à des questions ouvertes comme :

- Montre-moi comment tes **couches** (présentation, logique métier, accès aux données) sont séparées dans le code : où vit ta logique d'affectation, et pourquoi pas dans le composant Blazor ?
- Montre-moi une **relation entre deux entités** dans ton modèle EF Core (par exemple un employé et ses congés), et comment elle se traduit en base.
- Montre-moi la partie de ton projet dont tu es la plus fière. Qu'est-ce que tu **referais différemment** aujourd'hui ?
- Ton projet est-il **conteneurisé ou déployé** quelque part ? Peux-tu m'expliquer ton Dockerfile ?

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
3. **Code dans les fichiers** `ExerciceA.cs` et `ExerciceB.cs`.
4. **Committe au fur et à mesure**, avec des messages clairs et parlants :
   ```bash
   git add ExerciceA.cs
   git commit -m "Exercice A : soignants disponibles triés par charge"
   ```
5. **Pousse ta branche** sur le dépôt distant :
   ```bash
   git push origin prenom-nom
   ```
6. **Ouvre une Pull Request** de ta branche vers la branche principale.

Committer régulièrement avec des messages explicites vaut mieux qu'un seul gros commit à la fin. N'hésite pas à verbaliser ta démarche Git pendant l'entretien.

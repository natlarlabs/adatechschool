// Exercice A — Logique / algo
//
// On a une liste de tâches d'une association, chacune avec un titre,
// un membre responsable et un statut. Écris une fonction `chargeParMembre`
// qui renvoie, pour chaque membre, le nombre de tâches non terminées
// (statut différent de "terminée"), le tout trié du membre le plus
// chargé au moins chargé.

const taches = [
  { id: 1, titre: "Réserver la salle",        membre: "Awa",   statut: "terminée" },
  { id: 2, titre: "Préparer l'ordre du jour", membre: "Karim", statut: "en_cours" },
  { id: 3, titre: "Envoyer les invitations",  membre: "Awa",   statut: "à_faire" },
  { id: 4, titre: "Mettre à jour le site",    membre: "Léa",   statut: "en_cours" },
  { id: 5, titre: "Relire le budget",         membre: "Karim", statut: "à_faire" },
  { id: 6, titre: "Archiver les comptes",     membre: "Karim", statut: "terminée" },
];

// Résultat attendu pour les données ci-dessus :
// [
//   { membre: "Karim", taches: 2 },
//   { membre: "Awa",   taches: 1 },
//   { membre: "Léa",   taches: 1 },
// ]

export function chargeParMembre(taches) {
  // À toi de jouer : complète le corps de la fonction.
}

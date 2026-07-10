// Exercice A — Logique / algo
//
// On a une liste de compétences, chacune avec une catégorie et un
// pourcentage de progression. Écris une fonction `progressionParCategorie`
// qui renvoie, pour chaque catégorie, la moyenne de progression arrondie
// à l'entier, le tout trié de la plus forte à la plus faible moyenne.

const competences = [
  { id: 1, nom: "React",      categorie: "Frontend", progression: 80 },
  { id: 2, nom: "CSS",        categorie: "Frontend", progression: 60 },
  { id: 3, nom: "PostgreSQL", categorie: "Backend",  progression: 70 },
  { id: 4, nom: "Express",    categorie: "Backend",  progression: 50 },
  { id: 5, nom: "Git",        categorie: "Outils",   progression: 90 },
];

// Résultat attendu pour les données ci-dessus :
// [
//   { categorie: "Outils",   moyenne: 90 },
//   { categorie: "Frontend", moyenne: 70 },
//   { categorie: "Backend",  moyenne: 60 },
// ]

export function progressionParCategorie(competences) {
  // À toi de jouer : complète le corps de la fonction.
}

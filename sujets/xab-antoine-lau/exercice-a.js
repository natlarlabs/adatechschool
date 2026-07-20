// Exercice A — Logique / algo
//
// On a une liste de mesures à afficher dans un tableau de bord. Chaque
// mesure a une catégorie et une valeur. Écris une fonction
// `totalParCategorie` qui renvoie, pour chaque catégorie, le total des
// valeurs, le tout trié du plus grand au plus petit total.

const mesures = [
  { id: 1, label: "Lundi",    categorie: "Ventes",   valeur: 120 },
  { id: 2, label: "Mardi",    categorie: "Ventes",   valeur: 80  },
  { id: 3, label: "Lundi",    categorie: "Visites",  valeur: 300 },
  { id: 4, label: "Mardi",    categorie: "Visites",  valeur: 250 },
  { id: 5, label: "Lundi",    categorie: "Retours",  valeur: 15  },
];

// Résultat attendu pour les données ci-dessus :
// [
//   { categorie: "Visites", total: 550 },
//   { categorie: "Ventes",  total: 200 },
//   { categorie: "Retours", total: 15  },
// ]

export function totalParCategorie(mesures) {
  // À toi de jouer : complète le corps de la fonction.
}

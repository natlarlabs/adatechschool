// Exercice A — Logique / algo
//
// Écris une fonction topPlats(commandes) qui renvoie, pour chaque plat,
// la quantité TOTALE commandée, triée de la plus grande à la plus petite,
// en ne gardant que les 3 premiers.
//
// Résultat attendu pour les données ci-dessous :
// [
//   { plat: "Gyoza",    total: 6 },
//   { plat: "Katsudon", total: 5 },
//   { plat: "Ramen",    total: 4 },
// ]

const commandes = [
  { id: 1, plat: "Ramen",    quantite: 3, table: 4 },
  { id: 2, plat: "Gyoza",    quantite: 2, table: 4 },
  { id: 3, plat: "Ramen",    quantite: 1, table: 7 },
  { id: 4, plat: "Katsudon", quantite: 5, table: 2 },
  { id: 5, plat: "Gyoza",    quantite: 4, table: 2 },
  { id: 6, plat: "Udon",     quantite: 1, table: 9 },
];

export function topPlats(commandes) {
  // À toi de jouer !
  // Conseil : commence par te demander comment tu compterais ça à la main,
  // avec un carnet, pendant un service. Le code viendra ensuite.
}

// Pour tester rapidement : node exercice-a.js
console.log(topPlats(commandes));

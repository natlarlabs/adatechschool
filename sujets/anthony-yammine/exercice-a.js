// Exercice A — Logique / algo
//
// On a une liste de factures, chacune avec un client, un montant HT,
// un taux de TVA et un statut. Écris une fonction `totalParClient`
// qui renvoie, pour chaque client, le total TTC de ses factures payées
// (montant HT × (1 + TVA)), arrondi à 2 décimales, le tout trié du
// plus gros total au plus petit.

const factures = [
  { id: 1, client: "Boulangerie Petit", montantHT: 1200, tva: 0.20, statut: "payée" },
  { id: 2, client: "Garage Rousseau",   montantHT: 800,  tva: 0.20, statut: "en_attente" },
  { id: 3, client: "Boulangerie Petit", montantHT: 500,  tva: 0.055, statut: "payée" },
  { id: 4, client: "Cabinet Lemoine",   montantHT: 2000, tva: 0.20, statut: "payée" },
  { id: 5, client: "Garage Rousseau",   montantHT: 300,  tva: 0.20, statut: "payée" },
];

// Résultat attendu pour les données ci-dessus :
// [
//   { client: "Cabinet Lemoine",   totalTTC: 2400 },
//   { client: "Boulangerie Petit", totalTTC: 1967.5 },
//   { client: "Garage Rousseau",   totalTTC: 360 },
// ]

export function totalParClient(factures) {
  // À toi de jouer : complète le corps de la fonction.
}

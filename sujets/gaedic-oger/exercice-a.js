// Exercice A — Logique / algo « arbres de Nantes »
//
// Écris une fonction `arbresRemarquables(liste)` qui renvoie :
//   - uniquement les arbres de plus de 20 mètres,
//   - triés du plus haut au plus bas,
//   - en ne gardant que les champs { id, espece }.
//
// Exemple de résultat attendu avec le tableau `arbres` ci-dessous :
//   [
//     { id: 3, espece: "Séquoia" },
//     { id: 1, espece: "Chêne" },
//     { id: 5, espece: "Tilleul" },
//   ]

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

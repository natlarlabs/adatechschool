// Exercice A — Logique / algo
//
// Ton application discute avec une IA. On a l'historique des messages échangés,
// chacun avec un "sujet" et un nombre de "tokens" consommés.
//
// Écris une fonction tokensParSujet(messages) qui renvoie, pour chaque sujet,
// le TOTAL de tokens consommés, le tout TRIÉ du sujet le plus coûteux au moins coûteux.
//
// Exemple de résultat attendu :
// [
//   { sujet: "Code",       tokens: 700 },
//   { sujet: "Résumé",     tokens: 460 },
//   { sujet: "Traduction", tokens: 300 },
// ]

const messages = [
  { id: 1, role: "user",      sujet: "Résumé",     tokens: 120 },
  { id: 2, role: "assistant", sujet: "Résumé",     tokens: 340 },
  { id: 3, role: "user",      sujet: "Traduction", tokens: 90  },
  { id: 4, role: "assistant", sujet: "Traduction", tokens: 210 },
  { id: 5, role: "user",      sujet: "Code",       tokens: 200 },
  { id: 6, role: "assistant", sujet: "Code",       tokens: 500 },
];

export function tokensParSujet(messages) {
  // À toi de jouer : complète le corps de la fonction.
}

// Petit essai manuel (optionnel) :
// console.log(tokensParSujet(messages));

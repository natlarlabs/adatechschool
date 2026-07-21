// Exercice A — Logique / algo
//
// Ton équipe a proposé une liste d'activités pour un voyage. Chacune a une
// destination, un coût et un nombre de votes.
//
// Écris une fonction `activitesRetenues(activites, budgetMax)` qui :
//   1. garde uniquement les activités dont le coût ne dépasse pas `budgetMax` ;
//   2. les trie par nombre de votes décroissant, et à égalité de votes,
//      la moins chère d'abord ;
//   3. renvoie pour chacune seulement { id, titre, cout }.

interface Activite {
  id: number;
  titre: string;
  destination: string;
  cout: number;
  votes: number;
}

interface ActiviteRetenue {
  id: number;
  titre: string;
  cout: number;
}

const activites: Activite[] = [
  { id: 1, titre: "Visite du Colisée",   destination: "Rome",   cout: 18,  votes: 5 },
  { id: 2, titre: "Cours de cuisine",    destination: "Rome",   cout: 65,  votes: 3 },
  { id: 3, titre: "Balade en gondole",   destination: "Venise", cout: 30,  votes: 5 },
  { id: 4, titre: "Musée Guggenheim",    destination: "Venise", cout: 16,  votes: 2 },
  { id: 5, titre: "Vol en montgolfière", destination: "Rome",   cout: 180, votes: 4 },
];

// Résultat attendu pour activitesRetenues(activites, 50) :
// [
//   { id: 1, titre: "Visite du Colisée", cout: 18 },
//   { id: 3, titre: "Balade en gondole", cout: 30 },
//   { id: 4, titre: "Musée Guggenheim",  cout: 16 },
// ]

export function activitesRetenues(
  activites: Activite[],
  budgetMax: number
): ActiviteRetenue[] {
  // À toi de jouer : complète le corps de la fonction.
}

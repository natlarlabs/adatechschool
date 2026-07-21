// Exercice B — Débogage d'une API Express + PostgreSQL
//
// Ce handler POST /taches crée une tâche et l'enregistre dans une base
// PostgreSQL (via le driver `pg`). Il ne fonctionne PAS correctement :
// il contient exactement 4 bugs.
//
// Ta mission : repérer les 4 bugs et corriger le code directement ci-dessous.
// Pense à voix haute pendant que tu lis le code.

// POST /taches — créer une tâche (Express + PostgreSQL / pg)
app.post("/taches", async (req, res) => {
  const { titre, statut, priorite } = req.params;
  const result = pool.query(
    "INSERT INTO taches (titre, statut, priorite) VALUES (?, ?, ?)",
    [titre, statut, priorite]
  );
  res.status(200).json(result.rows);
});

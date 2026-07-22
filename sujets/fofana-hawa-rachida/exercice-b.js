// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /taches qui doit créer une tâche dans
// l'application de gestion d'association (stack Express + PostgreSQL
// via le driver `pg`).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /taches — crée une tâche dans l'association
app.post("/taches", async (req, res) => {
  const { titre, membre_id, statut } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO taches (titre, membre_id, statut) VALUES (?, ?, ?)",
      [titre, membre_id, statut]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});

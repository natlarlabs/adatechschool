// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /voyages/:voyageId/activites qui doit ajouter une
// activité à un voyage (stack Express + PostgreSQL via le driver `pg`).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /voyages/:voyageId/activites — ajoute une activité à un voyage
app.post("/voyages/:voyageId/activites", (req, res) => {
  const { voyageId } = req.params;
  const { titre, cout } = req.body;

  try {
    const result = pool.query(
      "INSERT INTO activites (voyage_id, titre, cout) VALUES (?, ?, ?) RETURNING *",
      [voyageId, titre, cout]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
  }
});

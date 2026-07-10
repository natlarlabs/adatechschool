// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /competences qui doit créer une compétence
// rattachée à un projet (stack Express + PostgreSQL via le driver `pg`).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /competences — crée une compétence rattachée à un projet
app.post("/competences", async (req, res) => {
  const { nom, categorie, projet_id } = req.params;
  try {
    const result = await pool.query(
      "INSERT INTO competences (nom, categorie, projet_id) VALUES (?, ?, ?)",
      [nom, categorie, projet_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});

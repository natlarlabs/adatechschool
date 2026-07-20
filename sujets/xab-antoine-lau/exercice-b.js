// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /mesures qui doit enregistrer une nouvelle mesure
// du tableau de bord (stack Express + PostgreSQL via le driver `pg`).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /mesures — enregistre une nouvelle mesure du dashboard
app.post("/mesures", async (req, res) => {
  const { label, categorie, valeur } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO mesures (label, categorie, valeur) VALUES (?, ?, ?) RETURNING *",
      [label, categorie, valeur]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});

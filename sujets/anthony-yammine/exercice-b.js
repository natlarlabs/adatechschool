// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /factures qui doit créer une facture pour
// un client (stack Express + PostgreSQL via le driver `pg`).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /factures — crée une facture pour un client
app.post("/factures", async (req, res) => {
  const { client_id, montant_ht, tva } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO factures (client_id, montant_ht, tva) VALUES (?, ?, ?)",
      [client_id, montant_ht, tva]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});

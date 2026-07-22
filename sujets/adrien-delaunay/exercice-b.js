// Exercice B — Débogage Express + PostgreSQL
//
// Voici un handler POST /messages qui doit enregistrer un message échangé avec
// l'assistant IA, dans une stack Express + PostgreSQL (via le driver `pg`).
//
// CE CODE CONTIENT 4 BUGS. À toi de les repérer et de les corriger.
// Lis-le à voix haute et explique ce qui cloche au fur et à mesure.
//
// (Stack de référence : PostgreSQL. Si tu utilises plutôt MySQL, dis-le,
//  on adaptera ensemble.)

const pool = require("./db"); // pool pg déjà configuré

// POST /messages — enregistre un message échangé avec l'IA
app.post("/messages", async (req, res) => {
  const { role, sujet, tokens } = req.params;
  try {
    const result = await pool.query(
      "INSERT INTO messages (role, sujet, tokens) VALUES (?, ?, ?)",
      [role, sujet, tokens]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.json({ error: err.message });
  }
});

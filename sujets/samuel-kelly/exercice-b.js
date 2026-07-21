// Exercice B — Débogage Express + PostgreSQL
//
// Ce handler POST /reservations doit enregistrer une réservation de table.
// Il contient 4 BUGS. À toi de les repérer et de les corriger.
//
// Stack : Express + PostgreSQL (driver `pg`).
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

const pool = require("./db"); // pool pg déjà configuré

// POST /reservations — enregistre une réservation
app.post("/reservations", async (req, res) => {
  const { client, couverts, date_reservation } = req.params;
  try {
    const result = pool.query(
      "INSERT INTO reservations (client, couverts, date_reservation) VALUES (?, ?, ?)",
      [client, couverts, date_reservation]
    );
    res.json(result);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
});

// Indices, si tu bloques (à ne lire qu'en dernier recours) :
// - D'où viennent les données quand on fait un POST ?
// - Cette syntaxe de placeholders SQL, c'est bien celle de PostgreSQL ?
// - Que renvoie pool.query() exactement, et le récupère-t-on correctement ?
// - Si la requête échoue, quel code HTTP le client reçoit-il ?

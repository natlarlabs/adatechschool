// Exercice B — Débogage d'une route Express + MySQL
//
// La route ci-dessous est censée enregistrer une nouvelle livraison dans une base
// MySQL (driver mysql2). Elle contient 4 bugs.
//
// Repère les 4 problèmes, explique pourquoi chacun est un bug, et propose ici même
// une version corrigée.

// POST /livraisons — enregistrer une nouvelle livraison
app.post("/livraisons", (req, res) => {
  const { ville, statut } = req.params;
  const sql = "INSERT INTO livraisons (ville, statut) VALUES ($1, $2)";
  try {
    const result = pool.execute(sql, [ville, statut]);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

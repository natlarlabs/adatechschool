// Exercice B — Débogage ASP.NET Core + EF Core
//
// Voici un endpoint POST /conges qui doit enregistrer une demande de congé
// d'un employé (stack ASP.NET Core minimal API + Entity Framework Core).
//
// Ce code contient 4 bugs. Repère-les et corrige-les directement ici.
// Lis le code à voix haute et explique ce qui cloche au fur et à mesure.

public class Employe
{
    public int Id { get; set; }
    public string Nom { get; set; } = "";
}

public class Conge
{
    public int Id { get; set; }
    public int EmployeId { get; set; }
    public DateOnly Debut { get; set; }
    public DateOnly Fin { get; set; }
}

// PlanningDb est un DbContext EF Core déjà configuré,
// avec DbSet<Employe> Employes et DbSet<Conge> Conges.

// POST /conges — enregistrer une demande de congé d'un employé
app.MapPost("/conges", (PlanningDb db, int employeId, DateOnly debut, DateOnly fin) =>
{
    var employe = db.Employes.Find(employeId);
    var conge = new Conge { EmployeId = employe.Id, Debut = debut, Fin = fin };

    db.Conges.Add(conge);

    return Results.Ok(conge);
});

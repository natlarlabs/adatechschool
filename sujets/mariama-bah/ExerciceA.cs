// Exercice A — Logique / algo
//
// On gère le planning d'un service de soins. Chaque soignant·e a un nombre
// d'heures déjà planifiées cette semaine et un indicateur de disponibilité.
// Écris une fonction `SoignantsAProposer` qui renvoie les noms des
// soignant·es disponibles, triés du moins chargé au plus chargé.

public record Soignant(string Nom, int HeuresPlanifiees, bool EstDisponible);

public static class ExerciceA
{
    public static List<Soignant> Equipe = new()
    {
        new("Awa",    32, true),
        new("Bruno",  18, false),
        new("Chloé",  12, true),
        new("David",  35, true),
        new("Emma",   22, false),
    };

    // Résultat attendu pour les données ci-dessus :
    // ["Chloé", "Awa", "David"]

    public static List<string> SoignantsAProposer(List<Soignant> equipe)
    {
        // À toi de jouer : complète le corps de la fonction.
        throw new NotImplementedException();
    }
}

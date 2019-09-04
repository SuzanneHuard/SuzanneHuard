//Calculer la surface d'un rectangle dont la longueur et la largeur sont lues à l'écran
/*var longueur;
var largeur;
var surface;

longueur = Number (prompt ("Veuillez entrer la longueur svp :"));
largeur = Number (prompt ("Veuillez entrer la largeur svp :"));

surface = longueur * largeur;
alert ("La surface pour une largeur de " + largeur + " mètres et une longueur de " + longueur + " mètres est de " + surface + " mètres carrés ");
*/

//Calculer le salaire brut d'un employé

var nb_heure;
var nb_taux_horaire;
var salaire_brut;

nb_heure = Number (prompt ("Inscrire le nombre d'heures travaillées"));
nb_taux_horaire = Number (prompt ("Inscrire le taux horaire"));

salaire_brut = nb_heure * nb_taux_horaire;
//alert ("Le nombre d'heures travaillées " + nb_heure + " le taux horaire " + nb_taux_horaire + "Le salaire brut sera " + salaire_brut + ".00 $");
alert (nb_heure * nb_taux_horaire);


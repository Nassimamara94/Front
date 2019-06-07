/*--------------------------------------------
            LES OPERATEURS ARITHMETIQUES
-------------------------------------------------*/
//--- 1: Addition
// //  ----- On peut déclaraction de plusieurs variable à la suite
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

// Addition de nb1 + nb2 avec l'operateur "+"
resultat = nb1 + nb2;
console.log(resultat);
document.write(resultat + "<br>");

// ###### La soustraction ##########
//  ---  Soustraction de nbr1 - nbr2 avec l'opérateur "-"
resultat = nb1 - nb2;
console.log(resultat);
document.write(resultat + "<br>");

// ###### La Multiplication ##########
//  ---  La Multiplication  de nb1 * nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);
document.write(resultat + "<br>");

// ###### La Division ##########
//  --- La Divisionde nbr1 / nbr2 avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);
document.write(resultat + "<br>");

// ###### Le Modulo ##########
//  --- NB : Le Modulo retourne le reste d'une division 
//  --  Le Modulo de nb1 et nb2 avec l'operateur "%"
nb1 = 11;
resultat = nb1 % nb2;
console.log(resultat);
document.write(resultat + "<br>");
console.log("le reste de la division de " + nb1 + " par " + nb2 + " est egale à " + resultat);

/* ---------------------------------
        Les écritures simplifiées 
        ------------------------------------- */

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 10; // --- nb1 + une nouvelle valeur
console.log(nb1);
// --- je peux procéder de la même façon pour les autres opérateurs aritméthiques : "+", "-", "*", "/", "%"


//*alert('Js ok'); pour vérifier que mon fichier js est bien lier à mon html

/* syntaxe de base */

// pour un commentaire uniligne

/*
    ici jepeux faire un commentaire 
    sur plusieurs ligne
*/
// -- 1: Déclaration d'une variable en js (une variable c'est un élément de stockage)
var prenom;
// -- 2 : Afficher une valeur
var prenom ="Sarah";
// -- 3 : Une instruction se termine toujours par un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne
var instruction_1;
var instruction_2, instruction_3;

// 4 : Afficher une boite de dialogue (2 façons)
alert("WOW ! tu es sur ma page");
window.alert("WOW ! tu es sur ma page !");

// 5 : Afficher dans la console (ici, la valeur de ma variable prenom)
console.log(prenom);

// -- 6 : Afficher du texte dans une page web 
document.write("Bonjour à tous ! ");
// -- 7 : Demander à l'utilisateur une valeur (2 façons)
var retournerValeur = window.prompt("Question : on est quel jour?", "saisissez le jour de la semaine");
var retournerValeur = prompt("Question : on est quel jour?", "saisissez le jour de la semaine");

// -- 8 Attention le js est sensible à la casse (case sensible)
// mavariable=/=maVariable /!\


// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut être un mot réservé (var, for... des éléments natifs du languages JS)
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// -- 10 : Une variable peut être déclarée de façon explicite :
var prenom ="Sarah";
// ou implicite:
prenom = "Sarah";

// -- 1. Chaine de caractères (string)
var vacances = "2017";
var destination = "gadalajara";

// -- 2. Un nombre entier (integer)
var annee = 2017;

// -- 3. Un nombre décimal (float)
var name_a_virgule = -5.32;

// -- Un boolean (boolean = Vrai ou Faux = True or false)
var unBoolean= false; // -- true

// 5. Les Conctantes 
/* la déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable, sa valeur ne peut être modifiée par réafféctation plus bas dans le code */

// Par convention les constantes sont en MAJISCULES
 const PAYS = "France";

/**=================================================================== */

// Intro JS & Algo 
/*================================

        LA CONCATENATION
var x = "Auguste";
console.log('Bonjour' + x + "!!");

====================================== */

// 1er exemple 
var annee = 2017;
var mois = "3";
var calcul = annee + mois; 
// console.log(calcul);
document.write(calcul+ "<br>");

// Je réaffecte une valeur à ma variable mois
mois =" 7";
var calcul = annee + mois;
console.log(calcul);
document.write(calcul + "<br>");
// 2ème exemple
var DebutDePhrase ="Ajourd'hui";
var NombreDeStagiaires =" 9";
var NombreDePhrase =" stagiaires";
var FinDePhrase =" sont présent.<br>";

// Nous souhaitons maitenant, grâce à la concaténation, afficher tout ce petit monde, en un seul morceau
document.write(DebutDePhrase + NombreDeStagiaires + NombreDePhrase + FinDePhrase );

var phrase1 = "Je m'apelle";
var phrase2 = " Sarah et j'ai ";
var phrase3 = 375;
var phrase4 = " ans !";
document.write(phrase1+ phrase2+ phrase3+ phrase4);

/*--------------------------------------------
            LES OPERATEURS ARITHMETIQUES
-------------------------------------------------*/

// ####### L'ADDITION ##########
//  ----- Déclaraction de plusieurs variable à la suite
var nbr1, nbr2, resultat;
nbr1 =10;
nbr2 =5;

// Addition de nbr1 + nbr2 avec l'operateur "+"
resultat = nbr1 + nbr2;

// Affichage du resultat dans la console 
console.log(resultat);

// ###### La soustraction ##########
//  ---  Soustraction de nbr1 - nbr2 avec l'opérateur "-"
resultat = nbr1 - nbr2;
console.log(resultat);

// ###### La Multiplication ##########
//  ---  La Multiplication  de nbr1 * nbr2 avec l'opérateur "*"
resultat = nbr1 * nbr2;
console.log(resultat);

// ###### La Division ##########
//  --- La Divisionde nbr1 / nbr2 avec l'opérateur "/"
resultat = nbr1 / nbr2;

// Affichage du resultat dans la console 
console.log(resultat);

// ###### Le Modulo ##########
//  --- NB : Le Modulo retourne le reste d'une division 
//  --  Le Modulo de nb1 et nb2 avec l'operateur "%"
nbr1 =11;
resultat = nbr1 % nbr2;

//  -- Affichage du resultat dans la console 
console.log(resultat);

/* ---------------------------------
        Les écritures simplifiées 
        ------------------------------------- */

nbr1 =15;
nbr1 =nbr1 + 5;
console.log(nbr1);

        nbr1 + 5; // --- ce qui équivaut à écrire nb1 = nb1 + 5 ;
        //  -- ici j'ai incrémenté et réaffécté
console.log(nbr1);

// --- je peux procéder de la même façon pour les autres opérateurs aritméthiques : "+", "-", "*", "/", "%"

/* ---------------------------------
        INCREMENTATION et DECREMENTATION
        ------------------------------------- */
var nbr1 = 1;
nbr1 = nbr1 + 1;
//  -- Affichage du resultat dans la console 
console.log(nbr1);

//  écriture simplifiée
nbr1++
//  -- Affichage du resultat dans la console 
console.log(nbr1);

// ########## DECREMENTATION #########
nbr1 = nbr1 -1;
//  -- Affichage du resultat dans la console 
console.log(nbr1);

//  écriture simplifiée 
nbr1--
console.log(nbr1);
/* ---------------------------------
        LES CONDITIONS
        ------------------------------------- */
var majoritefr = 18;
var age = prompt("Question : Quel âge avez-vous?", "saisissez votre âge");
var mineur = window.location.href = 'http://www.google.fr/';

if (age < majoritefr == true){
    alert("Vous n'êtes majeur");
}
else{
    mineur;
}

// CORRECTION
//  -- 1 déclaration variable
var tonage = prompt("Quel âge avez-vous?", "saisissez votre âge");
//  -- 2 ma condition
if (tonage >= 18){
    alert("binvenue");
}
else{
    alert("Vous n'êtes majeur");
    mineur;
}
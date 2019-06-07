// commentaire sur une seule ligne 
/* commentaire sur 
plusieurs lignes */

// **********************************************************************************************************************
// --- 1: déclarer une variable en js
// var prenom;

// **********************************************************************************************************************
// --- 2: Affecte une valeur à une variable.
//  prenom = "Sarah"; 
//  var prenom = "Sarah";

// **********************************************************************************************************************
//--- 3: une instruction se termine toujours par un point virgule ;
// aussi il est possible d'écrire plusieurs instructios en une seule ligne 
// var inst_1;
// var instr_2; instr_3;

// **********************************************************************************************************************
//--- 4: Afficher une boîte de dialogue (2 façons)
// alert("Super, tu es arrivé sur mon site!");
// window.alert("Super, tu es arrivé sur mon site!");

// **********************************************************************************************************************
//--- 5: Afficher dans la console ici
// console.log("prenom");

// **********************************************************************************************************************
//--6: Afficher dans la age web 
// document.write("A la pause vous aurez des haribo qui pik !");

// **********************************************************************************************************************
//--- 7: Demander à l'utilisateur une valeur(2 façons)
// window.prompt("Question: quel jour on est ?", "mettre le jour.");
// prompt("question: comment ça va ?", "response.");
//--->  et pour manipuler cette valeur, je n'oublie pas de la stocker.
// var jour = prompt("Question: Quel jour sommes nous?", "Jour de la semaine");
// console.log(jour);

// **********************************************************************************************************************
// --- 8: /!\ Attention le JS est sensible à la casse 
// var mavariable =x; var maVariable =/= mavariable

// **********************************************************************************************************************
// --- 9: Une variable ne peut pas commencer par un chiffre, que des caractères alphanumérique, et ne peut pas être un mot réservé
//  mot réservé exemple : var, for ... des éléments natifs du language JS

// **********************************************************************************************************************
// --- 10: un variable doit être déclarée de façon explicite: 
// var fruit;
// var fruit = "pomme";
// ou implicite
// var fruit2 = "banane"; bonbon = "haribo";

// ***************************************** LES TYPES DE VARIABLES *****************************************************************************
// --- 1: Chaîne de caractères (string)
// L'objet global "string" est un constructeur de chaîne de caractères 
// var vacance = '2017';
// var destination = 'Australie';

// *******************************************************************************
// --- 2:  Un nombre entier (integrer ou int)
// var annee = 2017;

// *******************************************************************************
// --- 3: Un nombre décimal (float)
//  var test = -5.32;

// *******************************************************************************
// --- 4: Un boolean (TRUE or FALSE)
// var unBoolean = false; -- TRUE

// *******************************************************************************
// --- 5: Les constantes permet de créer une constante accessible uniquement en lecture. Contrairement à une variable, sa valeur ne peut être modifiée par réafféctation plus 
// bas dans le code 
// par convention les constante sont en majuscule 
// const PAYS = "France"; // string
// const AN = "2019"; // string
// const BIRTH = 1989; // nombre

// *******************************************************************************
// --- 6: typeof() permert de connaître le type de ma variable
// console.log(typeof(vacance) + " " +typeof(annee));

// *******************************************************************************
// --- 7: les variables qui sont auto-typées
// on peut contenir une var de type number en string et aussi une string en number avec les fonctions natives de JS
// -- la fonction parseInt() renvoie un entier à partir d'une chaîne de caractères. ( parseInt analyse un string fournie en argument et renvoie un entier dans une BDD ) 
var unChiffre = "12";
console.log(unChiffre + typeof(unChiffre));

// String => Number

unChiffre = parseInt(unChiffre);
console.log(unChiffre + typeof(unChiffre));

//  je ré-affecte une valeur 
unChiffre = "12.22";
console.log(unChiffre + typeof(unChiffre));


// *******************************************************************************
// STRING => FLOAT 
//  --- La fonction parseFloat permet de transformer un string en un nombre flottant après analyse de celle-ci
unChiffre = parseFloat(unChiffre);
console.log(unChiffre + typeof (unChiffre)); 

// *******************************************************************************
// --- NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres + typeof(nb_en_lettres)); 

// méthode toString() en js permet de donner un aperçu d'un objet instancié. C'est à dire retourner un string en number. 
var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres + typeof (nb_en_lettres)); 








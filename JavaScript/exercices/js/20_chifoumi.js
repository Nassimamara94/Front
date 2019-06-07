
/* Le mode strict de ECMAScript 5 permet de choisir une variante restrictive de JavaScript. Le mode strict n'est pas seulement un sous-ensemble de JavaScript : il possède intentionnellement des sémantiques différentes du code normal. Les navigateurs ne supportant pas le mode strict exécuteront le code d'une façon légèrement différente de ceux le supportant, il ne faut donc pas compter sur le mode strict pour éviter des tests sur les navigateurs qui ne le supportent pas. Les codes en mode strict et en mode non-strict peuvent coexister, ce qui permet de réécrire les scripts en mode strict de façon incrémentale.

Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:

Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.
Voir la page Passer au mode strict pour plus de détails quant à la migration d'une base de code non-stricte vers une base de code compatible avec le mode strict.
*/ 


// CORRECTION
// DECLARATION DE NOS VARIBLES 
var computer;
var player;
var random;

// recuperation du choix du joeur
player = window.prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");


// recuperation d'un nombre aléatoire  entre 0 et 1
random = Math.random();

// test du random
console.log(random);

if(random <= .33){
    computer = 'pierre';
} else if(random <= .66){
    computer = 'feuille';
} else {
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : " + computer + "</p>");

if(computer == player){
    document.write("<p>Vous avez choisit la même chose : égalité ! " + computer + "</p>");
} else {
    // le joueur et l'ordi n'ont pas choisi la même chose : bataille
   switch(computer){
       case 'ciseau':
       if(player == 'pierre'){
           document.write("<p>La pierre ecrase le ciseau : vous avez gagnez</p>");
       } else{ // player == 'feuill'
           document.write("<p>La feuille est découpée par le ciseau : Vous perdez !</p>");
       } break;

       case 'feuille':
           if (player == 'pierre') {
               document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
           }
           else // player == 'ciseau'
           {
               document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
           }
           break;
           
       case 'pierre':
       if(player == 'feuille'){
           document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
        } else {// player == 'ciseau'
               document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
           }
           break;
           }
}







// var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

// var choix = function () {
//     choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
// };


// var nonValide = function () {
//     while (choixUtilisateur !== 'pierre' && choixUtilisateur !== 'feuille' && choixUtilisateur !== 'ciseaux') {
//         confirm(choixUtilisateur + " l'entrer n'est pas valide !");
//         choix();
//     }
// };
// nonValide();

// var choixOrdi = Math.random();

// if (choixOrdi <= 0.34) {
//     choixOrdi = 'pierre';
// } else if (choixOrdi <= 0.67) {
//     choixOrdi = 'feuille';
// } else {
//     choixOrdi = 'ciseaux';
// }
// var ordiGagne = choixOrdi;

// ordiGagne = "Victiore pour l'ordinnateur";
// var userGagnent = choixUtilisateur;

// userGagnent = "Victiore pour l'utilisateur";
// console.log('L\'ordinnateur a choisi ' + choixOrdi);

// var comparer = function (choix1, choix2) {
//     if (choix1 === choix2) {
//         return "Egalité " + choixUtilisateur;
//     } else if (choix1 === 'pierre') {
//         if (choix2 === 'ciseaux') {
//             return 'La pierre gagne ! ' + userGagnent;
//         } else {
//             return 'La feuille gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
//         }
//     } else if (choix1 === 'feuille') {
//         if (choix2 === 'pierre') {
//             return 'La feuille gagne ! ' + userGagnent;
//         } else {
//             return 'Le ciseaux gagnent ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
//         }
//     } else if (choix1 === 'ciseaux') {
//         if (choix2 === 'feuille') {
//             return 'Le ciseaux gagne ! ' + userGagnent;
//         } else {
//             return 'La pierre gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi le ' + choixUtilisateur;
//         }
//     }
// };

// console.log(comparer(choixUtilisateur, choixOrdi));
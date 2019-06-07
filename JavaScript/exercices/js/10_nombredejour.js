// var mois = prompt("quel mois sommes-nous ?");

// if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12){
//     alert("ce mois à 31 jours");
// } else if(mois == 2){
//     alert("ce mois à 28 jours");
// } else if(mois == 4 || mois == 6 || mois == 9){
//     alert("ce mois à 30 jours ");
// } else{
//     alert("cette valeur est incorectte");
// }



// switch (mois) {
//     //Cas où mois contient la valeur 1
//     case '1':
//         alert("31");
//         break;
//     //Cas où mois contient la valeur 2
//     case '2':
//         alert("28");
//         break;
//     //Etc., etc.
//     case '3':
//          alert("31");
//          break;
//     case '4':
//         alert("30");
//         break;
//     case '5':
//         alert("31");
//         break;
//     case '6':
//         alert("30");
//         break;
//     case '7':
//         alert("31");
//         break;
//     case '8':
//         alert("31");
//         break;
//     case '9':
//         alert("30");
//         break;
//     case '10':
//         alert("31");
//         break;
//     case '11':
//         alert("30");
//         break;
//     case '12':
//         alert("31");
//         break;
//     //Si jour contient une autre valeur
//     default:
//         alert("Je ne reconnais pas cette valeur");
// }

var mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

if (mois === 2) { // si on a choisi février => chiffre 2
    document.write("Le mois numéro " + mois + " fait 28 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) { // si on a choisi un mois qui fait 30 jours
    document.write("Le mois numéro " + mois + " fait 30 jours.");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 9) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
    document.write("Le mois numéro " + mois + " fait 31 jours.");
} else {
    document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
}
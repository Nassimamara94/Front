/* ---------------------------------
        CONDITIONS
------------------------------------- */
//  L'instruction "if" éxecute une instruction si une condition donnée est vrai.
//  Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction

// ------------------ IF -----------------
// if(true){ /* "if" vérifie si la condition est vrai*/
//         var nb1 = 10;
//         if(nb1 < 50 ){
//             console.log("nb1 est inferieur à 50");
//         }
// }
// if(true){
//     /* le code ... si c'est vrai*/
// }
// else{
//     /* le code ... si c'est faux*/ 
// }

// if(nb1 > 50){
//     console.log("nb1 est bien inférieur à 50");
// }
// else{
//     console.log("nb1 n'est pas inférieur à 50");
// }

// EXERCICE 
// if pour vérifier l'âge de l'internaute, 
// si majeur je lui souhaite la bienvenue, 
// si mineur 1 : lui signalé, 2 : le renvoyez vers google 

var majeur = 18;
var age = prompt("Quel âge avez-vous?", "saisissez votre âge");

if(age >= majeur){
    alert("bienvenue sur mon site");
}
else{
    alert("Vous n'êtes pas majeur");
    window.location.href = 'http://www.google.fr/';
}
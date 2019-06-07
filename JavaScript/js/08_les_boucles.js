/*************************   LES BOUCLES  *********************/
/*
Les boucles permettent de répéter es cations simplement et rapidement. Une boucle peut être vue comme une version informatique de "copier N lignes" ou de faire "X fois quelque chose". Par exemple en JS on peut traduire "Faire 5 pas vers l'Est" avec cette boucle. 
// */
// var pas;
// for(pas = 0; pas < 5; pas++){
//     //ceci sera exécuté 5 fois, à chaque éxécution la variable "pas" augmentera de 1. Une fois à 5, la boucle est terminé.
//     console.log("faire un pas vers l'est");
// }
// il y a différent types de boucles mais elles se ressemble toutes au sens ou elles répètent une action un certain nombre de fois (ce nombre peut être zéro). 
// Les différents types de boucles permettent d'utiliser différentes façons de commencer et de terminer. Chaque boucle pourra être utilisée en fonction de la situation et du problème que l'on cherche à résoudre. 


//  -------- LA BOUCLE FOR --------------------------------
/* for(3arguments) (argument est un objet, semblable à un tableau correspondant aux arguments passés à une fonction) {
        *** code ici***
}
*/
// var i;
// for(i = 1; i <= 10; i += 2){
//     document.write("<p>Instruction éxécutée: " + i + "</p>");
// }

//  -------- LA BOUCLE WHILE (if - tant que ) --------------------------------
//  très utilisée quand on ne connaît pas le nombre de tours de boucles à l'avance.

// var j = 1;
// while( j <= 10){
//     document.write("<hr/><p>Instruction éxécutée: " + j + "</p>");
//     j++; // j = j+1; ou j +=1;
// }

// j'ai 1000€ sur mon compte, chaque mois j'ajoute 50€, combien de temps me faut-il pour avoir 2000€ sur mon compte.
var a;
var tps = 0;
 for(a = 1000; a < 2000; a+=50){
     document.write("<h3>le mois suivant j'ai: " + a + "</h3>");
     tps++;
}
document.write("<h3>le nombre de mois necessaire est de: " + tps + "</h3>");


// var j = 1000;
// var temps = 0;
// while( j < 2000){
//   j += 50;
//   temps++;
//  }
// document.write("<h3>Sous sur mon compte: " + j +  "</h3>");
// document.write("<h3>Le nombre de mois: " + temps +  "</h3>");
// document.write("<h3>jusqu'à 2000€: " + temps/12 +  "</h3>");
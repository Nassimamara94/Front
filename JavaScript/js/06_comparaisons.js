// JS fournit 3  opérations permettant de comparer des valeurs:
// => si l'égalité stricte ( ou identité ou <<triple égal>>) utilisant "===" permet de vérifier la valeur et le type
// => si l'égalité faible ( ou <<double égal>>) justifiant "=="
// => objet.is()(ajouté avec ECMAScript 2015)
//  L'opérateur de comparaison ==signifie 'égale à'
// // il permet de vérifier que les 2 valeurs de 2 variables sont identiques. 
// var nb1 = 123;
// var nb2 = 123;
// console.log(nb1 == nb2);
// console.log(nb1 === nb2);
// //  != signifie différent de....  en valeur
// console.log(nb1 != nb2);
// //  !== signifie strictement différent de ...  en valeur et en type 
// console.log(nb1 !== nb2);

// ---------------- EXERCICES -------------------------
//  j'arrive sur un espace sécurisé, prénom et âge, je dois les saisir pour être authentifié sur le site ( infos en BDD, ici dans mes variables prénom et âges)
//  si echec une alerte m'informe 
//  si tout se passe bien, un message de bienvenue m'accueille

var prenom = "Sarah";
var age = 29;
var password = "helloWorld";

var x = prompt("Saisissez votre prénom");
var y = prompt("Saisissez votre âge");
var z = prompt("saisissez votre mdp");

if( x === prenom || y === age || z === password){
        alert("Welcome");
        }
    else{
        alert("error");
    }
/*
// --------------------- AUTRE FACON DE FAIRE ------------------

// var prenom = "Sarah";
// var age = 29;
// var password = "helloWorld";

// var x = prompt("Saisissez votre prénom");

// if ( x === prenom ) {
//      var y = parseInt(prompt("Saisissez votre âge"));
//     if (y === age) {
//          var z = prompt("saisissez votre password"); 
//          if (z === password) {
//              alert("bienvenu");
//           } else {
//         alert("error password");
//         }
//     } else {
//        alert("error age");
//        }
//      } else {
//              alert("Attention prénom non reconnu");
//      }
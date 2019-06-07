// function that's gonna switch the image onclick 
var monImage = document.querySelector('img '); /* on récupère la 1ère img du doc*/
// var monImage = document.querySelectorAll('img ')[0] ; /* on récupère la 1ère img du doc aussi */
console.log(monImage);
// la méthode addEventListener  pour ajouter un écouteur au click sur l'image 
monImage.addEventListener('click', function(){
    // récupèrer dans une var maSrc la valeur actuelle de l'attribut de monImage
    // la méthode getAttribute
    // l'argument attendu est le nom d'un attribut de balise HTML   
   var maSrc =  monImage.getAttribute('src');  
    console.log(maSrc);
     /* si (valeur maSrc = 'images/logo_firefox_1.png'){
        alors:  alert("je suis l'image 1"); 
     } esle{
         Sinon: alert(maSrc + "n'est pas l'image 1");
     } 
    if (maSrc === 'images/logo_firefox_1.png'){
        alert("je suis l'image 1" + " ma source est " + maSrc);
    }else{
        alert("je ne suis pas l'image 1");
    }*/

    // ici on va intervertir les images avec setAttribute
    if (maSrc === 'images/logo_firefox_1.png') {
        // alert("je suis l'image 1" + " ma source est " + maSrc);
        monImage.setAttribute('src', 'images/logo_firefox_2.png');
    } else {
        // alert("je ne suis pas l'image 2");
        monImage.setAttribute('src', 'images/logo_firefox_1.png');
        
    } 
   /* 1. on click sur l'image dans la fonction addEventLister
      2. on utilise la condition if else pour voir si la valeur de l'attribut src est égale au chemin de l'image originale 
      3. Si c'est la cas, on change la valur de l'attribut src pour le chemin de la 2ème image
      4. Si ça n'est pa le cas, l'attribut revint à sa valeur initiale
   */
});/* fin de la fonction pour inverser les images */

/* fonction ajouter un message personalisé en changant le titre de la page, ce message sera gardé quand l'utilisateur quitte le site et s'il y revient plus tard.
1. récupèrer dans une var monTitre le 1er h1 du doc
2. récupèrer dans une var monBoutton (la 1ère balise boutton du document)  */
var monTitre = document.querySelector('h1');
console.log(monTitre);
var monBoutton = document.querySelector('button');
// préparer la fonction du message accueil
function definirNomUtilisateur(){
    var monNom = prompt("quel est votre prénom ? ");
    localStorage.setItem('nomUtilisateur', monNom);
    monTitre.textContent = "J'ai changé mon titre :-)" + monNom;
}
/* 1.tester si le nom n'est pas dans le cache, si non on demande à l'utilisateur avec un prompt
2. si le nom est déjà dans le cache on le récupère et on l'affiche dans le titre 
3. au click sur le button, invoquer la fonction definirNomUtilisateur
 */
// localStorage.clear();
if(!localStorage.getItem('nomUtilisateur')){
    definirNomUtilisateur(); 
    alert('mon local est vide');
}else{
    var nomEngesistre = localStorage.getItem('nomUtilisateur');
    monTitre.textContent = "bienvenue à nouveau " + nomEngesistre;

}
monBoutton.addEventListener('click', function(){
    definirNomUtilisateur();
});





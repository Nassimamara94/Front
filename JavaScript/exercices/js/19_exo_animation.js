


// function bascule()
//     {
//     var etat = document.getElementsByI('rectangle').style.display;
//     var boutton = document.getElementById('toggle_rectangle');

//     if ( etat == "none"){

//         document.getElementsByI('rectangle').style.display = "block";
//         boutton.value = 'cacher';

//     } else{
//         document.getElementsByI('rectangle').style.display = "none";
//         boutton.value = 'afficher';
//     }
// }


var boutton = document.getElementById('toggle_rectangle');
var rectangle = document.querySelector('.rectangle'); /* appeler un class */


// CORRECTION

// 1 - va supprimer la class
function surClicBouton(){
    rectangle.classList.toggle('hide');
}

// 2 - fonction au double click
function auDoubleClickRectangle(){
    rectangle.classList.toggle('good');
}

// 3 - survol rectangle
function auSurvolSourisRectangle(){
    rectangle.classList.add('important');
}

// 4- A la sortie du survol
function aSortieSourisRectangle() {
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}
/***************** 3 ECOUTEURS EVENEMENTS *************************************/
// paramètre évenement - au click du bouton
boutton.addEventListener('click', surClicBouton);

//  2 instalation géstionnaire évenement  au double click
rectangle.addEventListener('dblclick', auDoubleClickRectangle);

//  3 - instalation géstionnaire évenement  au survol rectangle
rectangle.addEventListener('mouseover', auSurvolSourisRectangle);

//  3 - instalation géstionnaire évenement  à la sortie
rectangle.addEventListener('mouseout', aSortieSourisRectangle);
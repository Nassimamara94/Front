// var a = 3;
// var b = 2;
// var x = 8;  

// function multiplie(x, a, b){ 
//     return x * a ;
//     return a * b ;
// }
// var resultat = multiplie(8, 3);
// var resultat1 = multiplie(3, 2);

// function affiche(){
//     alert(resultat);
//     alert(resultat1);
// }

var a = 3 ;
var b = 2 ;

function multiplie(x = 8){
    return 3 * x;
}
function affiche(){
    alert(multiplie (a));
    alert(multiplie (b));
    alert(multiplie ());
}




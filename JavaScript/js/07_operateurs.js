/*
L'operateur et : && ou AND 
-- Si je cumule 2 conditions :
var prenom = "prenomLongin";
var monAge = ageLogin ;

Pour que les 2 correspondent pour être validés il faut les associer if(((prenom === prenomLongin) && monAge === agelogin)){
    code ....
    //je ne rentre ici que si les 2 conditions sont vraies
}
if((A) && (B)){
    => si A est FAUX et B est VRAI => FAUX
    => si A est VRAI et B est FAUX => FAUX
    => si A est FAUX et B est FAUX => FAUX
    => si A est VRAI et B est VRAI => VRAI
}

****************************
L'operateur ou : ||

if((c) || (d)){
    => si C est FAUX et D est FAUX => FAUX
    => si C est FAUX et D est VRAI => VRAI
    => si C est VRAI et D est FAUX => VRAI
    => si C est VRAI et D est VRAI => FAUX
}

******************** 
L'opérateur "!" signifie le contraire
var utilisateurLog = true;
if (!utilisateurLog){
    //si l'utilisateur n'est pas loggé
}
ce qui revient à écrire :
if (utilisateurLog == false){
    //si l'utilisateur n'est pas loggé
}
*/ 


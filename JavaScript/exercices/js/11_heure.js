var heure = prompt("quel heure est il ?");
var minute = prompt("minutes ? ");
var seconde = prompt("et les secondes ?");

if (heure >= 0 && heure <= 23 && minute >= 0 && minute <= 59 && seconde >= 0 && seconde <= 59) {
    seconde++;
    // on incrémente les secondes 
    if (seconde === 60){
        //on met les secondes à 0 et o passe à l'heure suivante 
        seconde = 0;
        minute++;
        if (minute === 60){
            // on met les minutes à zero et passe à l'heure siuvante
            minute = 0;
            heure++;
            if (heure === 24){// l'heure suivant est minuit
            heure = 0;           
            }
        }      
    }
    // afficher l'heure
    document.write("<h3>Dans une seconde il sera: </h3>" + heure + "h" + minute + "m" + seconde + "s");
} else{
    document.write("heure incorrecte");
}

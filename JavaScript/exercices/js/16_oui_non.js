var dismoi = "";
var i = 0;
while((dismoi !== "oui") && (dismoi !== "non")){
    dismoi = prompt("alors on jour=e ou ni oui ni non ?");
    document.write(dismoi + "pour la " + i + " ° fois, dis moi oui ou non!<br>");
    i++;
}
document.write("<h1>FINI</h1>");
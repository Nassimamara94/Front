// var today = prompt("quel jour sommes-nous ?");
// var jour1 ="Lundi", jour2 = "Mardi", jour3 = "Mercredi", jour4 = "Jeudi", jour5 = "Vendredi", jour6 = "Samedi", jour7 = "Dimanche";

//     if (today === jour1){
//         alert("demain on sera mardi");
//         }
//     else if (today === jour2) {
//         alert("demain on sera Mercredi");
//     }
//     else if (today === jour3) {
//         alert("demain on sera Jeudi");
//     }
//     else if (today === jour4) {
//         alert("demain on sera Vendredi");
//     }
//     else if (today === jour5) {
//         alert("demain on sera Samedi");
//     }
//     else if (today === jour6) {
//         alert("demain on sera Dimanche");
//     }
//     else if (today === jour7) {
//         alert("demain on sera Lundi");
//     }
//     else {
//         alert("votre saisie est incorect");
//     }



     var jour = prompt("quel jour sommes-nous ?");

            switch(jour){
                //Cas où jour contient la valeur Lundi
                case "Lundi" :
                    alert("demain on sera mardi");
                    break;
                //Cas où jour contient la valeur Mardi
                case "Mardi" :
                    alert("demain on sera Mercredi");
                    break;
                //Etc., etc.
                case "Mercredi" :
                    alert("demain on sera Jeudi");
                    break;
                case "Jeudi" :
                    alert("demain on sera Vendredi");
                    break;
                case "Vendredi" :
                     alert("demain on sera Samedi");
                    break;
                case "Samedi" :
                     alert("demain on sera Dimanche");
                    break;
                case "Dimanche" :
                      alert("demain on sera Lundi");
                    break;
                //Si jour contient une autre valeur
                default :
                    alert("Je ne reconnais pas ce jour");
            }
    
    




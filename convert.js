/**
 * Convert
 */
function dollarToEuro() {
    var dollar = document.convert.usd.value;
    var resultat = 0;
    if(dollar > 0) {
        resultat = Math.round(dollar * 0.726089);
        document.convert.eu.value = resultat;
    } else {
        erreur("Vous devez saisir un nombre au dessus de 0 !");
    }
}

function erreur(message) {
    alert(message);
}
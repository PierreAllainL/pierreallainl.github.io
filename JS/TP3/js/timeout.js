/**
 * Changement automatique d'une liste d'images
 * @version 2.0
 * @since 2021
 */
var listeImages = new Array(3);
var positionImage = 0;
var timeout;
listeImages[0] = "https://www.toutvert.fr/wp-content/uploads/2021/01/shutterstock_787922713.jpg";
listeImages[1] = "https://www.lesdebrouillards.com/wp-content/uploads/2019/01/volcan.jpg";
listeImages[2] = "https://www.lesothers.com/wp-content/uploads/2020/01/lesothers-aventure-nature-outdoor-trek-volcan-stromboli-1-1200x800.jpg";
 
/* Changement de l'image */
function ChangeImage() {
    document.getElementById("image").src = listeImages[positionImage];
    //console.log("[DEBUG] - image n°"+positionImage);
    if (positionImage == 2) {
        positionImage = 0;
    } else {
        positionImage++;
    }
    timeout = window.setTimeout("ChangeImage()", 2000);
}
 
/* Arret du Timeout */
function StopImage() {
    //console.log("[DEBUG] - Arrêt du timeout);
    window.clearTimeout(timeout);
    
}

/* Redémarrage du Timeout */
function RedemarrerImage() {
    //console.log("[DEBUG] - Redémarrage du timeout);
    timeout = window.setTimeout("ChangeImage()", 2000);
}
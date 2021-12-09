/**
 * Exercice 1
 */
function chargement() {
    alert("Nom: "+window.navigator.appName+"\nVersion: "+window.navigator.appVersion+"\nNom de code: "+window.navigator.appCodeName);
}

function bgChangement() {
    var bouton = document.getElementById("bouton");
    document.body.style.backgroundColor = "#808000";
    bouton.style.backgroundColor = "#be0000";
    bouton.style.color = "#efefef";
    bouton.style.padding = "5px";
    bouton.style.border = "1px solid #3b3b3b";
}

function Survole() {
    var p = document.getElementById("texte");
    p.style.color = "red";
}

function Click() {
    var p = document.getElementById("texte");
    p.style.color = "lime";
}

function DoubleClick() {
    var p = document.getElementById("texte");
    p.style.color = "navy";
}

function changementImage() {
    if (document.getElementById("image").src == "https://www.curionautes.com/wp-content/uploads/2019/05/GettyImages-142924771-1110x740.jpg") {
        document.getElementById("image").src = "https://www.lesdebrouillards.com/wp-content/uploads/2019/01/volcan.jpg";
    }
}

function resetImage() {
    document.getElementById("image").src = "https://www.curionautes.com/wp-content/uploads/2019/05/GettyImages-142924771-1110x740.jpg";
}

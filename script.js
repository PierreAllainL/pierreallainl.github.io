/**
 * EX 1
 */

function ex1() {
    var pi = Math.PI;
    document.write("Hello World ! <br>");
    document.write(pi+"<br>");
    var a = 10;
    document.write(a+"<br>")
    var rand = Math.round(Math.random() * 100);
    document.write(rand+"<br>");

    var temperature = Math.round(Math.random() * 100);
    var seuil = Math.round(Math.random() * 100);

    if (temperature > seuil) {
        document.write(temperature+" c'est trop chaud par rapport au seuil "+seuil+"!<br>");
    } else {
        document.write(temperature+" c'est froid par rapport au seuil "+seuil+"!<br>");
    }

    document.write("<b>boucle while</b><br>");
    var i = 0;
    while (i <= 100) {
        document.write(i+", ");
        i++;
    }

    document.write("<b>boucle for</b><br>");
    for (j = 0; j <= 100; j++) {
        document.write(j+", ");
    }
}

function multiplication() {
    var saisie = prompt("Donnez un nombre entre 1 et 9:");
    if(saisie > 0) {
        for (i = 0; i <= 10; i++) {
            document.write(saisie+"x"+i+" = "+saisie*i+"<br>");
        }
    } else {
        document.write("Veuillez entrer un nombre au dessus de 0");
    }
}

function saisie() { 
    do {
        var saisie = prompt("Entrer :");
        var position = saisie.indexOf("@");
    } while (position == -1);
    document.write(saisie);
}

/**
 * EX 3
 */

function ex3(actuel, suivant) {
    var size = 2;
     if (actuel.value.length == size) {
         suivant.focus();
     }
}

function afficher() {
    var res;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    res = num1+"."+num2+"."+num3+"."+num4+"."+num5;
    alert("Votre numéro: "+res)
}

/**
 * EX 4
 */
function verifierNom(){
    var nom = document.getElementById("nom").value;
    var error = document.getElementById("erreur");
    if(nom.length < 2) {
        error.innerHTML = "Vous devez saisir au moins 2 caractères pour le nom";
    } else {
        error.innerHTML = "";
    }
}

function verifierPrenom(){
    var prenom = document.getElementById("prenom").value;
    var error = document.getElementById("erreur");
    if(prenom.length < 2) {
        error.innerHTML = "Vous devez saisir au moins 2 caractères pour le prénom";
    } else {
        error.innerHTML = "";
    }
}


function verifierAge(){
    var age = document.getElementById("age").value;
    var error = document.getElementById("erreur");
    if(!isNaN(age)) {
        if(age <= 5 || age >= 140) {
            error.innerHTML = "Vous devez être plus jeune";
        } else {
            error.innerHTML = "";
        }
    } else {
        error.innerHTML= "Vous devez saisir un nombre !"
    }
}

function verifierPseudo(){
    var pseudo = document.getElementById("pseudo").value;
    var error = document.getElementById("erreur");
    if(pseudo.length < 4) {
        error.innerHTML = "Vous devez avoir un pseudo plus grand :)";
    } else {
        error.innerHTML = "";
    }
}

function verifierPassword(){
    var password = document.getElementById("password").value;
    var error = document.getElementById("erreur");
    if(password.length < 6) {
        error.className = "alert";
        error.innerHTML = "Vous devez avoir un pseudo plus grand :)";
    } else {
        error.innerHTML = "";
    }
}

function verifierConfirmation(){
    var password = document.getElementById("password").value;
    var confirmation = document.getElementById("confirmation").value;
    var error = document.getElementById("erreur");
    if(password !== confirmation) {
        error.className = "alert";
        error.innerHTML = "Vous devez saisir le même mot de passe";
    } else {
        error.className = "success";
        error.innerHTML = "Les deux mots de passe correspondent";
    }
}

function verifierSexe() {
    var sexe = document.getElementsByName("sexe");
    var error = document.getElementById("erreur");
    if(sexe[0].checked == false && sexe[1].checked == false) {
        error.className = "alert";
        error.innerHTML = "Vous devez cocher votre sexe";
    } else {
        error.innerHTML = "";
    }
}
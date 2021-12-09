/**
 * Exercice 1
 */
function modif_paragraphe() {
    var paragraphe = document.getElementById("paragraphe");
    paragraphe.style.fontStyle = 'italic';
}

function centrage_h1() {
    var titre = document.querySelector("body h1:first-of-type");
    titre.style.textAlign = 'center';
}

/**
 * Exercice 2
 */
function ajoutCourse() {
    var ul = document.getElementById("listecommissions");
    var li = document.createElement('li');
    var text = document.getElementById("ajout").value;
    var course = document.createTextNode(text);
    li.appendChild(course);
    ul.appendChild(li);
    document.getElementById('ajout').value = '';
}

function supprimerCourse() {
    var ul = document.getElementById("listecommissions");
    ul.removeChild(ul.lastElementChild); 
}

/**
 * Exercice 3
 */
function generateList() {
    var ul = document.getElementById('liste');
    var h2 = document.querySelectorAll("h2");
    for(var i = 0; i < h2.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = "#titre"+(i+1);
        var valeur = document.createTextNode(h2[i].textContent);
        a.appendChild(valeur)
        li.appendChild(a);
        ul.appendChild(li);
    }
}

/**
 * Exercice 4
 */
function definition(mot) {
    var width = 570;
    var height = 520;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 4;
    if(mot.value = "serrurier") {
        var def = "Artisan qui fait, vend ou pose des serrures, fabrique des clés.";
        var fenetre = window.open('', 'Définition de'+mot, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width'+width+', height='+height+', top=' + top + ', left=' + left);
        fenetre.document.body.innerHTML = def;
        fenetre.document.title = "Définition de "+mot;
    }
}
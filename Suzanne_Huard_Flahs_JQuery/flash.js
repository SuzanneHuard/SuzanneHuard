//Bouton gauche

$('#flashID').css("position","relative");

var compteur = 0;
var bas = 0;


$("#boutonGauche").click(function() {

    compteur = compteur - 50;
    $('#flashID').css("left", compteur)
});


//Bouton droite

$("#boutonDroite").click(function() {
    compteur = compteur + 50;
    $('#flashID').css("left", compteur);
});


//Changer image
$("#boutonChangerImage").click(function() {
var monImage;
monImage = $("#flashID").attr("src");

if(monImage === "img/flash.jpg") {
    $("#flashID").attr("src" , "img/flash2.jpg");
}
else{
    $("#flashID").attr("src" , "img/flash.jpg");
}
});

//Enlever l'image

$("#boutonEnleverImage").click(function() {
    $("#flashID").hide ("src");
});

//Afficher l'image

$("#boutonAjouterImage").click(function() {
    $("#flashID").show ("src");
});


//Ajouter attribut
$("#boutonAjouterAttribut").click(function() {
    $("#flashID").after ("photo de flash");
});


//Ajouter un titre
$("#boutonAjouterTitre").click(function() {
    $("#flashID").before ("<h1>FLASH JQUERY</h1>");
});


//Dupliquer
$("#boutonDupliquer").click(function() {
    $("#flashID").clone().insertAfter("#flashID");
});

//Ralentir - enlever une image
$("#boutonRalentir").click(function() {
    $("#flashID").remove("#flashID");
});


//Téléporte
$("#boutonTeleport").click(function() {

    if (bas === 0){
        $("#flashID").appendTo("body");
        bas=1;
    }
    else{
        $("#flashID").prependTo("body");
        bas=0;
    }
});

//Bouton vitesse suprême
$("#boutonVitesseSupreme").click(function() {
    var myVar = setInterval(disparaitreFlash, 500);

setTimeout (function(){
clearInterval (myVar)},5000);

});

function disparaitreFlash() {
    $('#flashID').toggle();
};



//Bouton Nuke
$("#boutonNuke").click(function() {
    $("#sectionbody").hide ("src");
    $("#flashID").attr("src" , "img/explosion.jpg");
    $("#flashID").show();
});

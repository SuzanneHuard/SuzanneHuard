/**
 * Suzanne
 */

var premierClic = 1;
var premierImageSRC;
var premiereImageID;
var deuxiemeImageSRC;
var deuxiemeImageID;

var int_click = 0;
$("#victoireID").hide();
$("#txtvictoireID").hide();
$( ".img-fluid").click(function() {

    this
    var idImage = this.id;
    var sourceImage = this.src;
   // alert("ID = " + idImage + "\n" +
    //    "Source = " + sourceImage);

    if (premierClic === 1)
    {
        premierImageSRC = sourceImage;
       premiereImageID = idImage;
        $("#"+premiereImageID).hide();
        premierClic =0;
    int_click = int_click + 1;
        //alert( idImage );
    }
    else
    {
        deuxiemeImageSRC = sourceImage;
        deuxiemeImageID = idImage;
        $("#"+premiereImageID).attr( "src", deuxiemeImageSRC );
        $("#"+deuxiemeImageID).attr( "src", premierImageSRC );
        $("#"+premiereImageID).show();

        premierClic =1;
    }
});

$("#boutonRecommencer").click(function() {
    $( "p" ).remove(".container");
    $("#image1").attr("src" , "img/image-3.jpg");
    $("#image2").attr("src", "img/image-6.jpg");
    $("#image3").attr("src", "img/image-5.jpg");
    $("#image4").attr("src", "img/image-1.jpg");
    $("#image5").attr("src", "img/image-4.jpg");
    $("#image6").attr("src", "img/image-2.jpg");
    $("#image7").attr("src", "img/image-9.jpg");
    $("#image8").attr("src", "img/image-7.jpg");
    $("#image9").attr("src", "img/image-8.jpg");
   $("#victoireID").hide();
    $("#txtvictoireID").hide();
});

$( "#boutonTricher" ).click(function()
{
    $("#image1").attr("src", "img/image-1.jpg");
    $("#image2").attr("src", "img/image-2.jpg");
    $("#image3").attr("src", "img/image-3.jpg");
    $("#image4").attr("src", "img/image-4.jpg");
    $("#image5").attr("src", "img/image-5.jpg");
    $("#image6").attr("src", "img/image-6.jpg");
    $("#image7").attr("src", "img/image-7.jpg");
    $("#image8").attr("src", "img/image-8.jpg");
    $("#image9").attr("src", "img/image-9.jpg");

});

$( "#boutonVictoire" ).click(function()
{
var int_victoire = 0;
    if($("#image1").attr("src")  === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-1.jpg")
    {
    int_victoire = int_victoire + 1;
    if($("#image2").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-2.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image3").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-3.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image4").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-4.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image5").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-5.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image6").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-6.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image7").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-7.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image8").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-8.jpg")
    {
        int_victoire = int_victoire + 1;
    if($("#image9").attr("src") === "http://localhost:63342/Suzanne/Dropbox/www/SuzanneHuard/SuzanneHuard/Suzanne_Huard_casse-tete(JQuery-JavaScript)/img/image-9.jpg")
    {
        int_victoire = int_victoire + 1;
    }}}}}}}}}
       if (int_victoire === 9)
       {
           $("#txtvictoireID").show();
           $("#victoireID").show();

          // $("#victoireID").before ("<h1>VICTOIRE</h1>");

        alert("Réussie en " + int_click + " coups")
           int_click = 0;
       }

});
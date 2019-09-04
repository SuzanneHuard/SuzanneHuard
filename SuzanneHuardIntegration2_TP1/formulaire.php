<?php include "header.php"; ?>





<div class="container-fluid h-100 parallax1 px-0 py-0">
    <div class="row h-75 align-items-end">
        <div class="col-xl-3 offset-xl-6">
            <h2 class="carreJaune">DES VIVACES OU DES ANNUELLES</h2>
        </div>
    </div>
    <div class="row h-25 carreGris align-items-center">
        <div class=""col-xl-3 offset-xl-6">
            <h2>Il suffit de faire les bons choix</h2>
        </div>
    </div>
</div>


<div class="container p2">
    <h1>ABONNEZ-VOUS À NOTRE INFOLETTRE!</h1>
    <form action="formulaireEnvoye.html">
        <div class="form-group">
            <label for="nom">Nom:</label>
            <input type="text" class="form-control" id="nom" placeholder="Entrer votre nom ici">
        </div>
        <div class="form-group">
            <label for="prenom">Prénom:</label>
            <input type="text" class="form-control" id="prenom" placeholder="Entrer votre prénom ici">
        </div>
        <div class="form-group">
            <label for="matiere">Voulez-vous recevoir des informations</label>
            <select class="form-control" id="matiere">
                <option>Nos promotions</option>
                <option>Nos formations</option>
                <option>Nos services en aménagement paysager</option>
            </select>
        </div>
        <div class="form-group">
            <label for="email">Courriel</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
        </div>
       <input type="submit" value="Envoyer"/>
    </form>
</div>

<div class="container-fluid px-0 py-0">
    <div class="row no-gutters align-items-center">
        <div class="col-xl-4 col-sm-12 noir text-center p">
            <i class="fa-3x far fa-question-circle"></i>
            <h3>INFORMATIONS SUPPLÉMENTAIRES</h3>
            <p>N'hésitez pas à consulter notre foire aux questions.</p>
            <button type="button" class="btn btn-light">Cliquez ici</button>
        </div>
        <div class="col-xl-4 col-sm-12 gris text-center p">
            <i class="fa-3x fas fa-user-friends"></i>
            <h3>CONTACTEZ-NOUS</h3>
            <p>N'hésitez pas à nous contacter au 514 555-5555.</p>
            <button type="button" class="btn btn-light">Cliquez ici</button>
        </div>
        <div class="col-xl-4 col-sm-12 noir text-center p">
            <i class="fa-3x fas fa-dollar-sign"></i>
            <h3>PRIX</h3>
            <p>Consultez notre inventaire.</p>
                <button type="button" class="btn btn-light">Cliquez ici </button>
        </div>
    </div>
</div>

<div class="container-fluid px-0 py-0">
    <div class="row align-items-center text-center bg-2 pied-page no-gutters">
        <div class="col-xl-4 col-md-4 col-sm-4">
            <p><b>ÉCRIVEZ-NOUS AUX JARDINS DE SUE</b><br>
                1111, rue des Oeillets<br>
                Granby, Québec, J2J 1P1</p><hr>
        </div>
        <div class="col-xl-4 col-md-4 col-sm-4">
            <p><b>Suivez-nous sur Facebook pour connaître nos nouveautés !</b><br>
                  <a href="https://www.facebook.com/suzanne.huard.988 target_blank"> en cliquant ici</a>
            <p><hr>
        </div>
        <div class="col-xl-4 col-md-4 col-sm-4">
            <p><b>INFOLETTRE</b><br>
                <button type="button" class="btn btn-primary">Abonnez-vous dès maintenant !</button>
                <p><hr>
        </div>
    </div>
</div>





<?php include "footer.php"; ?>
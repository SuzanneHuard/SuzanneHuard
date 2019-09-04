<?php include"header.php" ; ?>


<div class="container-fluid h-100 parallax1">
    <div class="row h-75 align-items-end">
        <div class="col-xl-3 offset-xl-6">
            <h2 class="carreJaune">LE JARDINAGE<BR />DES VIVACES OU DES ANNUELLES</h2>
        </div>
    </div>
    <div class="row h-25 carreGris text-center align-items-center">
        <div class=""col-xl-3 offset-xl-6">
        <h2>Il suffit de faire les bons choix</h2>
    </div>
</div>


<div class="container">
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
        <input type="submit" value="Envoyer" />
    </form>
</div>


<section>
    <div class="container-fluid">
        <div class="row no-gutters text-center align-items-center h-100 p">
            <div class="col-xl-4 col-sm-12 pink">
                <i class="fa-3x far fa-question-circle"></i>
                <h3>INFORMATIONS SUPPLÉMENTAIRES</h3>
                <p>N'hésitez pas à consulter notre foire aux questions.</p>
                <button type="button" class="btn btn-light">Cliquez ici</button>
            </div>
            <div class="col-xl-4 col-sm-12 gris">
                <i class="fa-3x fas fa-user-friends"></i>
                <h3>CONTACTEZ-NOUS</h3>
                <p>N'hésitez pas à nous contacter au 514 555-5555.</p>
                <button type="button" class="btn btn-light">Cliquez ici</button>
            </div>
            <div class="col-xl-4 col-sm-12 pink">
                <i class="fa-3x fas fa-dollar-sign"></i>
                <h3>PRIX</h3>
                <p>Consultez notre inventaire.</p>
                <button type="button" class="btn btn-light">Cliquez ici </button>
            </div>
        </div>
    </div>
</section>


<div class="container-fluid">
    <div class="row no-gutters padding-top: 3px padding-bottom: 3px margin-bottom: 5px">
        <div class="col-xl-12 bg-2">
<p> Ce site a été construit par Suzanne Huard.<br/>
Juillet 2019<br />
    <i class="far fa-copyright"></i>Aucune reproduction possible</p>
        </div>
    </div>
</div>


<?php include"footer.php" ; ?>






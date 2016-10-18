// première ligne obligatoire, dit : quand mon doc html est pret, lance la fonction
$(document).ready(function(){
  console.log('Bienvenue dans jquery');

  /*
  * Exercice 14:
  * Générer 2 nombre aléatoire pour le capcha et l'afficher a coté du champ Capcha lors du chargement de la page
  (fonction text() pour modifier du texte sur un element )
  */

  var capOne = Math.floor(Math.random() * 10)
  $('form div span#capchaUn').html(capOne)
  var capTwo = Math.floor(Math.random() * 10)
  $('form div span#capchaDeux').html(capTwo)


  // je crée un evenement blur sur mes element nom et prenom
  $("form input#nom, form input#prenom").blur(function(){

     // je stocke mon element courant dans une variable
     var elt = $(this);

     if(elt.val().length <= 3 ){

       elt.css({
         "border": "1px solid red"
       });

    }else if ($('form input#prenom').val() == $("form input#nom").val()) {
        elt.css({
          "border":"2px solid orange"
        });

    }else{
        elt.css({
         "border": "1px solid green"
       });
    }

  });


   // Exercice: Controller à la perte de focus le champs code postal
   // pour qu'qu'il y ait 5 chiffres: Vert si c'est bon , rouge si ce n'est pas bon

   $('form input#cp').blur(function(){
     var elt = $(this);
     console.log(elt.val());

     if (elt.val().length < 5) {
       elt.css({
         "border":"2px solid red"
       });
     }else {
       elt.css({
         "border":"1px solid green"
       });
     }

   }); //fin de blur

 /* ----------factoriser avec exo1
    Exercice 2 : Ajouter un controle quand on quitte  le focus sur le champs nom
    ou prenom que le nom soit différent du prénom. SI le nom est égal au prénom
    mettre une bordure orangef
*/

  //  $('form input#prenom, form input#nom').blur(function(){
  //    var elt = $(this);
  //
  //    if ($('form input#prenom').val() == $("form input#nom").val()) {
  //      elt.css({
  //        "border":"2px solid orange"
  //      });
  //    }else{
  //      elt.css({
  //        "border":"1px solid green"
  //      });
  //    }
  //
  //  }); //fin de blur

 /*
   Exercice 3 : Ajouter un controle quand on quitte le champs
   telephone qu'il y ait 10 chiffres
 */

 $('form input#tel').blur(function(){
   var elt = $(this);
   console.log(elt.val());

  if ($('form input#tel').val() != 10) {
     elt.css({
       "border":"2px dashed red"
     });
  }else {
     elt.css({
        "border":"1px solid green"
     });
  }

}); //fin function

/*
   Exercice 4 : Controller si la description a 50 caractères quand je tape
   sur le clavier avec l'evenement keyyup
   + SI la description fait <10 caractees: bordure rouge
   + SI la description est comprise entre 10 et 20: bordure orange
   + Si la description est 20 et 30 caractères: bordure jaune
   + SI la description est supérieur à 30 caractères: bordure verte
 */

 $('form textarea#description').keyup(function(){
  var elt = $(this);
  // console.log(elt.val());

  if (elt.val().length < 10) {
     elt.css({
       "border":"2px solid red"
     });
  }else if (elt.val().length >= 10 && elt.val().length < 20) {
    elt.css({
      "border":"2px solid orange"
    });

  }else if (elt.val().length >= 20 && elt.val().length < 30) {
    elt.css({
      "border":"2px solid yellow"
    });
  }else {
    elt.css({
      "border":"1px solid green"
    });
  }

 }); //fin function



 /*
   Exercice 5: Controller quand je quitte  la confirmation de mon mot de passe (evenement     keyup) que cette confirmation soit égal à mon mot de passe
 */

  $('form input#passwordConfirm').keyup(function(){
  var elt = $(this);

  if ($('form input#password').val() != $('form input#passwordConfirm').val()) {
    elt.css({
      "border":"2px solid red"
    });

  }else {
    elt.css({
      "border":"1px solid green"
    });
    }

  }); //fin function

  /*
  * Exercice 6: Controller quand je tape mon age( evenemnt keyup) que mon age soit compris  entre 18 et 99 ans
  */

  $('form input#age').keyup(function(){
  var elt = $(this);
  //console.log(elt.val())

  if ($('form input#age').val() < 18 || $('form input#age').val() > 99) {
    elt.css({
      "border":"2px solid red"
    });

  }else {
    elt.css({
      "border":"1px solid green"
    });
    }

  }); //fin function

  /*
  * Exercice 7: Controller quand je quite mon champs username que mon champ soit différent      du nom et du prénom
  */

  $('form input#username').blur(function(){
  var elt = $(this)
  //console.log(elt.val());

    if ($('form input#prenom').val() == elt.val() || $('form input#nom').val() == elt.val()) {
      elt.css({
        "border":"2px solid red"
      });
    }else {
      elt.css({
        "border":"1px solid green"
      });
    }

  }); //end function

  /*
    * Exercice 8: Controller quand je clique sur mon boutton crée un compte que
    * j'ai coché au moin 1 sexe (Fille ou Garcon ou Indifférent)
  */


  $('form button#submitF').click(function(){
  console.log($('form input[name="sexe"]:checked').length);

    if ($('form input[name="sexe"]:checked').length < 1 ) {
      alert("vous n'avez pas choisi de sexe")
    }

  }); //end function

/*
    * Exercice 9: Controller quand je clique sur mon boutton de vérifier si j'ai au moin
    * 2 cases à cocher dans mon formulaire
*/

  $('form button#submitF').click(function(){
  //console.log($('form input:checkbox:checked').length);

    if ($('form input:checkbox:checked').length < 2 ) {
      alert("Vous avez choisi moins de 2 checkbox")

    }
  }); //end function

/*
      * Exercice 10: Controller quand je clique sur mon boutton de vérifier si j'ai ma case
      * a cocher C.G.U. est bien valider
*/

  $('form button#submitF').click(function(){
  console.log("statut cgu " + $('form input#cgu:checked').length);

    if ( $('form input#cgu:checked').length == 0 ) {
      alert("Vous n'avez pas accepter les CGU")
    }
  }); //end function

/*
      * Exercice 11: Ajouter un bouton "+" et un bouton "-" sur la description
      * pour augmenter ou diminuer la taille de police de saisie des contenu
*/

  var FontSize = 1;

  $('form button#FSplus').click(function(){
    FontSize = FontSize + 1;
    $('textarea#description').css({
      "font-size":FontSize + "em"
    });

  });//end fonction

  $('form button#FSmoins').click(function(){
    FontSize = FontSize - 1;
    $('textarea#description').css({
      "font-size":FontSize + "em"
    });

  });//end fonction

/*
*  Exercice 12: Controller quand je tappe une url de photo, cela m'affiche l'apercu
*  de l'image en dessous ( Il existe une fonction attr() en Jquery)
*/


  $('form input#photo').keyup(function(){

    var elt=$(this);

    $('form img#photoPreview').attr({
      "src": elt.val(),
      "alt": elt.val()
    })

  });  //end function

/*
* Exercice 13:
* Modifier le compteur de caractères pour la description (par décrémentation) quand je tape dans la zone de saisie
* Fonction text() ou fonction html()
*/

  $('form textarea#description').keyup(function(){
    var elt = $(this);
    $('form div span.help-block b').html(300 - elt.val().length)

  }); //end function


/*
* Exercice 14:
* Générer 2 nombre aléatoire pour le capcha et l'afficher a coté du champ Capcha lors du chargement de la page
(fonction text() pour modifier du texte sur un element )
*/

  // voir debut de document

/*
* Exercice 15: Ajouter une checkbox "Voir le mot de passe en claire" en HTML et quand je clique su cette checkbox
* le mot de passe est révélé en claire (fonction attr() pour modifier un attribut)
*/

  $('form input#passClear').click(function(){

    if ($('form input#passClear').is(":checked")){
      $('form input#password').attr("type", "text")

    }else {
      $('form input#password').attr("type", "password")
    }

  });//end function

/*
* Exercice 16:
* Lors du clique du bouton "Créer un compte", vérifier la saisie du CAPCHA que se soit el resultat de la somme
* des 2 chiffres généré aléatoirement
* Indice: Fonction text() ou fonction html()
*/

  $('form input#capcha').blur(function(){
    var elt = $(this);
    console.log("val elt =" + elt.val());

    if (elt.val() != capOne + capTwo) {
      alert("ressaissez le résultat de l'adition")
    }


  }); //end function


/*
* Exercice 17:
* Créer une barre de progression (Exemple: http://getbootstrap.com/components/#progress)
* qui augmente de taille selon la longeur du mot de passe quand je saisi mon mot  de passe
*/




















































































































































}); //fin jQuery

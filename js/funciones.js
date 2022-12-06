/************************************************************************************/
/*  Web de MR.Robot                                                            */
/*  Funciones JS para index.html                                          */
/*  autor: Daniel Contreras Pastrana                                                */
/*  version: 1.0                                                                    */
/*  fecha: 02 de Dciciembre de 2022                                                  */
/************************************************************************************/

/* ****************JS QUE DISTINTE LA BARRA DE NAVEGACION ****************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
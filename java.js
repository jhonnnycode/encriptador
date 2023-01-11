
// funcion para solo usar letras

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }


// PARA ENCRIPTAR DEBEMOS TENER ENCUENTA ESTO

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//funcion de encriptacion

function encriptar () {
    
   
    var texsinencrip = document.getElementById("textoprincipal").value.toLowerCase();
    //volviendo todo a minusculas con tolowercase
    //alert (texsinencrip); VERIFICACION DE ENTRADA DE DATOS
    
      var texencrip = texsinencrip.replace(/e/igm,'enter');
      var texencrip = texencrip.replace (/i/igm,'imes');
      var texencrip = texencrip.replace (/a/igm,'air');
      var texencrip = texencrip.replace (/o/igm,'ober');
      var texencrip = texencrip.replace (/u/igm,'ufat');

     document.getElementById('imagen-no-found').style.display='none';
     document.getElementById('ningunmensaje').style.display='none';
     document.getElementById('textoder').innerHTML=texencrip;
     document.getElementById("copiarr").style.display="block";
     
     //reiniciando el text area

     const textarea = document.getElementById("textoprincipal");
     textarea.value = '';
     
     

}
 
//funcion de desencriptacion

function desencriptar () {
    
   
    var texsinencrip = document.getElementById("textoprincipal").value;
    
      var texencrip = texsinencrip.replace(/enter/igm,'e');
      var texencrip = texencrip.replace (/imes/igm,'i');
      var texencrip = texencrip.replace (/air/igm,'a');
      var texencrip = texencrip.replace (/ober/igm,'o');
      var texencrip = texencrip.replace (/ufat/igm,'u');

     document.getElementById('imagen-no-found').style.display='none';
     document.getElementById('ningunmensaje').style.display='none';
     document.getElementById('textoder').innerHTML=texencrip; 
     
     //reiniciando el text area

     const textarea = document.getElementById("textoprincipal");
     textarea.value = '';

}

function copiar(){

    let texto = document.getElementById("textoder");
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy');

    
}


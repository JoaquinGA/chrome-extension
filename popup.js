function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;


  chrome.tabs.getSelected(null, function(tab){
    document.getElementById('anchoNavegador').innerHTML = tab.width;
    document.getElementById('altoNavegador').innerHTML = tab.height;


    document.getElementById("botonGenerarPass").addEventListener("click", funcionGenerarPass);
    document.getElementById("botonCopiarPass").addEventListener("click", funcionCopiarPass);
    document.getElementById("botonCopiarLorem").addEventListener("click", funcionCopiarLorem);
    document.getElementById("botonEncodeBase").addEventListener("click", funcionEncodeBase);
    document.getElementById("botonDecodeBase").addEventListener("click", funcionDecodeBase);
    document.getElementById("botonCopiarBase").addEventListener("click", funcionCopiarBase);

    function funcionGenerarPass() {

      var checkMayus = document.getElementById('checkMayus').checked;
      var checkMin = document.getElementById('checkMin').checked;
      var checkNum = document.getElementById('checkNum').checked;
      var checkCarac = document.getElementById('checkCarac').checked;

      var cadenaMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var cadenaMin = "abcdefghijklmnopqrstuvwxyz";
      var cadenaNum = "1234567890";
      var cadenaCarac = ",.-_*+{}<>:[]";
      var cadena = "";

      if(checkMayus){
        cadena += cadenaMayus;
      }

      if(checkMin){
        cadena += cadenaMin;
      }

      if(checkNum){
        cadena += cadenaNum;
      }

      if(checkCarac){
        cadena += cadenaCarac;
      }

      var longitudCadena = cadena.length;
      var pass = "";
      var longitudPass= document.getElementById("selectLongitudPass").value;
      var pos;
      for(var i=1 ; i<=longitudPass ; i++){
          pos = Math.floor((Math.random() * longitudCadena));
          pass += cadena.substring(pos,pos+1);
      }
      document.getElementById("inputPass").value = pass;
    }

    function funcionCopiarPass() {
      var selectPass = document.getElementById("inputPass");
      selectPass.select();
      document.execCommand("copy");
      mensajeInfo("Contraseña copiada al portapapeles");
    }

    function funcionCopiarLorem() {
      var selectLorem = document.getElementById("inputLorem");
      selectLorem.select();
      document.execCommand("copy");
      mensajeInfo("Lorem Ipsum copiado al portapapeles");
    }

    function funcionEncodeBase() {
      document.getElementById("inputBase").value = Base64.encode(document.getElementById("inputBase").value);
    }

    function funcionDecodeBase() {
      document.getElementById("inputBase").value = Base64.decode(document.getElementById("inputBase").value);
    }

    function funcionCopiarBase() {
      var selectBase = document.getElementById("inputBase");
      selectBase.select();
      document.execCommand("copy");
      mensajeInfo("Cadena Base64 copiada al portapapeles");
    }






    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

    function mensajeInfo(mensaje){
      document.getElementById("spanInfo").innerHTML = "- " + mensaje;
    }


  });



}


mostrarDimensiones();

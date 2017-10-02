function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;


  chrome.tabs.getSelected(null, function(tab){
    document.getElementById('anchoNavegador').innerHTML = tab.width;
    document.getElementById('altoNavegador').innerHTML = tab.height;


    document.getElementById("botonGenerarPass").addEventListener("click", funcionGenerarPass);
    document.getElementById("botonCopiarPass").addEventListener("click", funcionCopiarPass);
    document.getElementById("botonCopiarLorem").addEventListener("click", funcionCopiarLorem);

    function funcionGenerarPass() {
      var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
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
      console.log('pass copiado!');
    }

    function funcionCopiarLorem() {
      var selectLorem = document.getElementById("inputLorem");
      selectLorem.select();
      document.execCommand("copy");
      console.log('lorem copiado!');
    }






  });



}


mostrarDimensiones();

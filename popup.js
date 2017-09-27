function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;


  chrome.tabs.getSelected(null, function(tab){
    document.getElementById('anchoNavegador').innerHTML = tab.width;
    document.getElementById('altoNavegador').innerHTML = tab.height;


    document.getElementById("botonGenerar").addEventListener("click", funcionGenerarPass);

    function funcionGenerarPass() {

      var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      var longitudCadena = cadena.length;
      var pass = "";
      var longitudPass=10;
      var pos;
      for(var i=1 ; i<=longitudPass ; i++){
          pos = Math.floor((Math.random() * longitudCadena));
          pass += cadena.substring(pos,pos+1);
      }

      document.getElementById("inputPass").value = pass;

    }

  });



}


mostrarDimensiones();

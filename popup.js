function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;


  chrome.tabs.getSelected(null, function(tab){
    document.getElementById('anchoNavegador').innerHTML = tab.width;
    document.getElementById('altoNavegador').innerHTML = tab.height;


    document.getElementById("botonGenerarPass").addEventListener("click", funcionGenerarPass);
    document.getElementById("botonCopiarPass").addEventListener("click", funcionCopiarPass);





    function funcionGenerarPass() {
      var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      var longitudCadena = cadena.length;
      var pass = "";
      var longitudPass= document.getElementById("selectLongitusPass").value;
      var pos;
      for(var i=1 ; i<=longitudPass ; i++){
          pos = Math.floor((Math.random() * longitudCadena));
          pass += cadena.substring(pos,pos+1);
      }
      document.getElementById("inputPass").value = pass;
    }

    function funcionCopiarPass() {
      console.log("COPIAR");
    }






  });



}


mostrarDimensiones();

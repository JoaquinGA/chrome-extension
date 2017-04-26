function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;


  chrome.tabs.getSelected(null, function(tab){
    document.getElementById('anchoNavegador').innerHTML = tab.width;
    document.getElementById('altoNavegador').innerHTML = tab.height;
  });
}


mostrarDimensiones();

function mostrarDimensiones() {
  let anchoNavegador = document.body.clientWidth;
  let altoNavegador = document.body.clientHeight;
  document.getElementById('anchoNavegador').innerHTML = anchoNavegador;
  document.getElementById('altoNavegador').innerHTML = altoNavegador;
}


mostrarDimensiones();

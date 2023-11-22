
window.onload = function() {
  var eventosCadastrados = JSON.parse(localStorage.getItem("eventos")) || [];
  filmesListados(eventosCadastrados);
};


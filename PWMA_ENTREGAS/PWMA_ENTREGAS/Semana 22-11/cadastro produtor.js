const imagens = [];
const titulos = [];
const descricao = [];
const local = [];
const datas = [];

function adicionarEvento() {
  var nomeDoEvento = document.getElementById("nome").value;
  var imagem = document.getElementById("img").value;
  var descricap = document.getElementById("descricao").value;
  var lugar = document.getElementById("local").value;
  var dataDoEvento = document.getElementById("data").value; // Captura o valor da data

  if (imagem.endsWith(".jpg")) {
    imagens.push(imagem);
    titulos.push(nomeDoEvento);
    descricao.push(descricap);
    local.push(lugar);
    datas.push(dataDoEvento); // Armazena a data no array

    eventosListados(imagens, titulos, descricao, local, datas);
  } else {
    console.error("imagem inválida");
  }
  
  // Esvaziando os campos de entrada
  document.getElementById("img").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("local").value = "";
  document.getElementById("data").value = "";
}

function eventosListados(imagens, titulos, descricao, local, datas) {
  var elementoListaEvento = document.getElementById("listaEventos");
  elementoListaEvento.innerHTML = "";
  for (var i = 0; i < titulos.length; i++) {
    elementoListaEvento.innerHTML +=
      "<figure><img src =" +
      imagens[i] +
      "><figcaption>" +
      (i + 1) +
      "-" +
      titulos[i] +
      "</figcaption>" +
      datas[i] + 
      "</figure>" +
      local[i] +
      "</figcaption><p>" +
      descricao[i] +
      "</figcaption><p>";
  }
}

function removerEvento() {
  var indiceEvento = parseInt(document.getElementById("remover").value);
  if (indiceEvento > 0) {
    titulos.splice(indiceEvento - 1, 1);
    imagens.splice(indiceEvento - 1, 1);
    descricao.splice(indiceEvento - 1, 1);
    datas.splice(indiceEvento -1, 1);
    local.splice(indiceEvento -1, 1);

  }
  eventosListados(titulos, imagens, descricao,datas,local);
  document.getElementById("remover").value = "";
}


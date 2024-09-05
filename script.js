function selecionarCarne(selecionarThis){

  //pegar o botão selecionado anteriormente
  const selecionadoAnterior = document.querySelector(".carnes .borda");

  //antes de remover a class selecionado, verificar se o elemento não é null
  if (selecionadoAnterior !== null) {

  //remover a classe selecionado desse botão
  selecionadoAnterior.classList.remove("borda");
  }
  //adicionar a classe selecionado ao botão
  selecionarThis.classList.add("borda");
}


function selecionarBebida(selecionarThis){

  const selecionadoAnterior = document.querySelector(".bebidas .borda");

  if (selecionadoAnterior !== null){
    selecionadoAnterior.classList.remove("borda");
  }

  selecionarThis.classList.add("borda");
}


function selecionarSobremesa(selecionarThis){

  const selecionadoAnterior = document.querySelector(".sobremesas .borda");

  if (selecionadoAnterior !== null){
    selecionadoAnterior.classList.remove("borda");
  }

  selecionarThis.classList.add("borda");
}
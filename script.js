function selecionar(seletor){

  //pegar o botão selecionado anteriormente
  const selecionadoAnterior = document.querySelector(".borda");

  //antes de remover a class selecionado, verificar se o elemento não é null
  if (selecionadoAnterior !== null) {

  //remover a classe selecionado desse botão
  selecionadoAnterior.classList.remove("borda");
}
  //pegar o botão clicado 
  const selecionar =document.querySelector(seletor);

  //adicionar a classe selecionado ao botão
  selecionar.classList.add("borda");
}
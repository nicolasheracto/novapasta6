
// Carregar as imagens dos trabalhos
function carregarImagens() {
    // Iterar sobre os elementos da lista de trabalhos
    const trabalhos = document.querySelectorAll(".meus-trabalhos ul li");
    for (const trabalho of trabalhos) {
      // Obter a imagem do trabalho
      const imagem = trabalho.querySelector("img");
      // Carregar a imagem
      imagem.src = imagem.dataset.src;
    }
  }
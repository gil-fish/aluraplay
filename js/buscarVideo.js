import { conectAPI } from "./conectAPI.js";
import constroiCard from "./mostrarVideos.js"; //importa a função de construir cards para uso na busca.

//função assíncrona de busca
async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]");
    const busca = await conectAPI.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    } //laço de repetição que filtra para aparecer apenas o que for relacionado aos itens que estão de acordo com o termo que eu pesquisei.

    busca.forEach(elemento = lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos referentes a esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
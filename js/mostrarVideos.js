import { conectAPI } from "./conectAPI.js";

//data atributes para manipular o DOM
const lista = document.querySelector("[data-lista]")

//construir os li's da lista
function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src=${url}
    title= ${titulo} frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src= ${imagem}>
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
}

//acessar e consumir a API
async function listaVideos() {
    try {
        const listaApi = await conectAPI.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }

}

listaVideos();
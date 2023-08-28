import { conectAPI } from "./conectAPI.js";

//criar constante para o formulario
const formulario = document.querySelector("[data-formulario]");

//adicionar functions para os data-atributes do HTML
async function criarVideo(evento) {
    evento.preventDefault(); //previne que a ação padrão de recarregamento aconteça ao apertar botão

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectAPI.criaVideo(titulo, descricao, url, imagem); //importa a const conectAPI, a ordem dos parâmetros deve ser a mesma.

        window.location.href = "../pages/envio-concluido.html"; //redirecionamento para mensagem de envio concluido
    } catch (e) {
        alert(e);
    }
}

//captar valores após clique no botão
formulario.addEventListener("submit", evento => criarVideo(evento));
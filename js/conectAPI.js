//Requisição GET
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//Requisição POST para salvar novos dados no json
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

//buscador de videos
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}

//Requisições do tipo POST são usadas para enviar dados para a API. Por exemplo, criar um novo registro de usuário com: nome, idade e endereço de e-mail. Diferente de requisições do tipo GET, você precisará passar um objeto das opções de configuração como um segundo argumento em requisições POST.
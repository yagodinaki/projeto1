let botao = document.querySelector(".botao-gerar")

async function gerarCodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado-codigo")

    if (!textoUsuario.trim()) {
        alert("Por favor, escreva algo na caixa de texto!")
        return
    }

    blocoCodigo.textContent = "Carregando..."
    
    try {
        // Chamar seu backend (você precisa criar um)
        let resposta = await fetch("http://seu-backend-aqui.com/gerar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: textoUsuario
            })
        })

        if (!resposta.ok) {
            throw new Error("Erro ao conectar com a IA")
        }

        let dados = await resposta.json()
        let resultado = dados.resultado

        blocoCodigo.textContent = resultado
        resultadoCodigo.srcdoc = resultado

    } catch (erro) {
        blocoCodigo.textContent = "Erro: " + erro.message
        console.error(erro)
    }
}

botao.addEventListener("click", gerarCodigo)
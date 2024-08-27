let campoTexto = document.getElementById('entradaTexto');
let campoSaida = document.getElementById('saidaTexto');
let mensagemValidacao = document.getElementById('mensagemValidacao');

function validarTexto(texto) {
    if (!/^[a-z\s]+$/.test(texto)) {
        mensagemValidacao.style.color = 'red';
        mensagemValidacao.textContent = 'Apenas letras minúsculas e sem acento.';
        return false;
    }
    mensagemValidacao.textContent = '';
    return true;
}


function criptografar() {
    let texto = campoTexto.value;
    if (!validarTexto(texto)) return;

    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    campoSaida.value = textoCriptografado;
    mensagemValidacao.textContent = 'Texto criptografado com sucesso.';
    mensagemValidacao.style.color = 'black';
}
function descriptografar() {
    let texto = campoTexto.value;
    if (!validarTexto(texto)) return;

    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    campoSaida.value = textoDescriptografado;
    mensagemValidacao.textContent = 'Texto descriptografado com sucesso.';
    mensagemValidacao.style.color = 'black';
}

function copiarTexto() {
    navigator.clipboard.writeText(campoSaida.value)
        .then(() => {
            mensagemValidacao.textContent = 'Texto copiado para a área de transferência.';
            mensagemValidacao.style.color = 'black';
        })
        .catch(err => {
            mensagemValidacao.textContent = 'Erro ao copiar o texto.';
            mensagemValidacao.style.color = 'red';
        });
}

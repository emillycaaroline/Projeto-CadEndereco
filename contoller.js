'use restrict'; //Modo restrito

//Limpar formulario
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('bairro').value = '';

}

//VERIFICAR SE CEP É VALIDO
const eNumero = (Numero) => /^[0-9]+$/.test(numero);
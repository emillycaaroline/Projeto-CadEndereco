'use restrict'; //Modo restrito

//Limpar formulario
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
    document.getElementById('bairro').value = '';

}

//VERIFICAR SE CEP É VALIDO
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//PREENCHE CAMPOS DO FORMULARIO
const preencherformulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('Cidade').value = endereco.localidade;
    document.getElementById('Estado').value = endereco.uf;
}

/*Função para consumo de API ultilizando a função do tipo assincrona*/
const pesquisarCep = async() =>{
    limparFormulario()
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
        alert('CEP não encontrado')
        }else{
            preencherformulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

//adiciona um evento DOM, no imput CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

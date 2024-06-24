export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity("Você não e maior de idade")
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const idadeMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= idadeMais18
}
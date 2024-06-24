export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "")
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity("Cpf Inválido")
    } 
    

}
function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]
    return numerosRepetidos.includes(cpf)
}


// Essa function valida o primeiro numero após - do cpf ex(193.798.057-05), no caso desse cpf essa function iria me retornar o valor 0 (de -05)

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10
    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma*10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0
    }

    return soma != cpf[9]
}

// Essa function valida o segundo numero após - do cpf ex(193.798.057-05), no caso desse cpf essa function iria me retornar o valor 5 (de -05)

function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11
    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma*10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0
    }

    return soma != cpf[10]
}
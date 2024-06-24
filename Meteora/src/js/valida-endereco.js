export default function enderecoVerificado(campo){

    const enderecoInformado = campo.value
    const resultado = enderecoInformado.length

    if(resultado <= 6){
        console.log("Endereco informado não existe")
    }
    else if(resultado >= 90){
        console.log("o endereco está muito grande, insira um menor")
    }
    else{
        console.log("Endereco verificado") 
    }
}
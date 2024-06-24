export default function ehUmEmailValido(campo){
    const email = campo.value
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/i;
    
    if(emailRegex.test(email)){
        console.log("Email válido com sucesso")
        return true;
    }else{
        console.log('E-mail Inválido')
        return false;
    }
}
import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
import ehUmEmailValido from "./valida-email.js";
import enderecoVerificado from "./valida-endereco.js";

const camposFormularios = document.querySelectorAll("[required]")
const formulario = document.querySelector("[data-formulario]")


// Pegando os valores capturados no formulario e armazenando de forma web
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "cpf": e.target.elements["cpf"].value,
        "RG": e.target.elements["RG"].value,
        "endereco": e.target.elements["endereco"].value,
        "email": e.target.elements["email"].value,
        "dtNascimento": e.target.elements["dtNascimento"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas))

    window.location.href = "http://127.0.0.1:5500/src/cadastro.html"
})


camposFormularios.forEach((campo) => {
    campo.addEventListener("blur", () => {
        verificarCampo(campo)
        campo.addEventListener("invalid", evento => evento.preventDefault())
    })
})

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    Email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}


//Function principal para validação de cada campo

function verificarCampo(campo) {

    campo.setCustomValidity('');

    let mensagem = ""

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo)
    }
    if (campo.name == "dtNascimento" && campo.value != "") {
        ehMaiorDeIdade(campo)
    }
    if(campo.name == "email" && campo.value != ""){
        ehUmEmailValido(campo)
    }
    if(campo.name == "endereco" && campo.value != ""){
        enderecoVerificado(campo)
    }

    tiposDeErros.forEach(erro =>{
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name] [erro];
            console.log(mensagem)
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro') // pega o campo abaixo do input para imprimir a mensagem de erro
    const validadordeInput = campo.checkValidity() //Checar se o campo está válido

    if(!validadordeInput){
        mensagemErro.textContent = mensagem
    }else{
        mensagemErro.textContent = ""
    }
}
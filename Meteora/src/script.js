
//Menu Hamburguer
const btnMenu = document.getElementById("btn-menu")
const btnMKT = document.getElementById("btn_email_mkt")
function toggleMenu(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
}
btnMenu.addEventListener("click", toggleMenu)

//Verifica email

const emailMKT = document.getElementById("input_email")


function VerficaEmail(email){
    email = emailMKT.value
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/i;

    if(emailRegex.test(email)){
        var modal = new bootstrap.Modal(document.getElementById('modalSucesso'));
        modal.show();
        return true;
    }else{
        var falseModal = new bootstrap.Modal(document.getElementById('modalFalse'));
        falseModal.show();
        return false;
    }
}

btnMKT.addEventListener("click", VerficaEmail)

// Filtro dos produtos
const inputBusca = document.getElementById('input-busca')
const cards = document.querySelectorAll("#card__anuncio")
inputBusca.addEventListener("input", filtro)

function filtro(){
    //Verificando se o valor do campo input não é vazio
    if(inputBusca.value != ""){
        //For para pecorrer todos os cards
        for(let card of cards){
            //Capturando apenas o elemento do texto
            let tituloCard = card.querySelector("h5")
            //Transformando o texto em letras minusculas para busca
            tituloCard = tituloCard.textContent.toLowerCase()
             //Transformando a busca em letras minusculas para busca
            let filtroTexto = inputBusca.value.toLowerCase()
            // Comparando o texto digitado com o do titulo, se for diferente declara display none
            if(!tituloCard.includes(filtroTexto)){
                card.style.display = "none"
            }
            else{
                //Se for verdadeiro continua apresentando na tela
                card.style.display = "block"
            }
        }

    }else{
        // Se o campo input estiver vazio faz com que apresente todos os elementos na tela
        for(let card of cards){
        card.style.display = "block"
    }
    }
}

//Buscar por categoria

const btnCamisetas = document.getElementById("btn_Camiseta")
const btnBolsa = document.getElementById("btn_Bolsa")
const btnCalcados = document.getElementById("btn_Calcados")
const btnCalca = document.getElementById("btn_calcas")
const btnCasacos = document.getElementById("btn_Casacos")
const btnAcessorios = document.getElementById("btn_Acessorios")

btnCamisetas.addEventListener("click", () => resultado("Camiseta"));
btnBolsa.addEventListener("click", () => resultado("Bolsa"));
btnCalcados.addEventListener("click", () => resultado("Calcados"));
btnCalca.addEventListener("click", () => resultado("Calcas"));
btnCasacos.addEventListener("click", () => resultado("Casacos"));
btnAcessorios.addEventListener("click", () => resultado("Acessorios"));

function resultado(tipo) {
    const cards = document.querySelectorAll('#card__anuncio');
        cards.forEach(card => {
            if (card.getAttribute('data-tipo') === tipo) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
}

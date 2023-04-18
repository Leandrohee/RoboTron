// CONSTANTES E VARIAVEIS
const botoesAjuste = document.querySelectorAll(".controle-ajuste");
const numeroEstatistica = document.querySelectorAll("[data-numeroestat]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//Loop repetição botoes
 botoesAjuste.forEach((item)=>{
    item.addEventListener("click", () => {
        let inputSelec = item.parentNode.querySelector("[data-contador]"); // descobre o input referente
        let botaoSelec = item.dataset.ajuste;                              // descobre o texto dentro do botao
        let pecaSelec = item.dataset.peca;                                 // descobre a peca selecionada
        ajusteValores(botaoSelec,inputSelec);
        ajusteEstatisticas(pecaSelec);                                     
    })
 });

//Loop repetição número estatistica
function ajusteEstatisticas (pecaSelec){
    numeroEstatistica.forEach((item)=>{
        let tipoDeHab = item.dataset.numeroestat;                         // tipo de habilidade: forca|poder|energia|velocidade
        let estatRecebida = pecas[pecaSelec][tipoDeHab];                  // estatisticas referentes ao botao pressionado
        item.innerText = parseInt(item.innerText) + estatRecebida;        // Atualização da habilidade
    })
};



// funcao para ajustar os valores dos botoes
function ajusteValores(botaoSelec,inputSelec){
    if (botaoSelec === '+'){
    inputSelec.value =  parseInt(inputSelec.value) + 1 ;
    }
    else if (botaoSelec === "-"){
    inputSelec.value =  parseInt(inputSelec.value) - 1 ;
    }
};



function htmlOperacoes(lstOperacoes){
    let tabela = document.getElementById("tabela");
    let numOfRows = tabela.rows.length;
    let nro = 1
    let linhas = "";
    for(oper of lstOperacoes){
        let newRow = tabela.insertRow(numOfRows);
        let newFM = newRow.insertCell(0);
        newFM.innerHTML = "<legend>"+oper.op1+" "+oper.oper+" "+oper.op2+"</legend>";
        let newResp = newRow.insertCell(1);
        newResp.innerHTML = "<input id='resp"+nro+"' size='4'>";
        let corrResp = newRow.insertCell(2);
        corrResp.innerHTML = "<legend id='leg"+nro+"'>"+oper.texto+"</legend>";
        nro = nro + 1;       
    }
}

function removeOperacoesAntigas(){
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = 
      "<tr><th>Frase matemática</th><th>Resposta</th></tr>"
}

// Corrige questões e avança pontuação
function corrigeOperacoes(operacoes){
    let nro=1;
    for(oper of operacoes){
        let respDigitada = document.getElementById("resp"+nro).value;
        gAp.corrigeOperacao(oper,respDigitada);
        document.getElementById("leg"+nro).innerHTML = oper.texto;
        nro = nro + 1;
    }
}

// Exibe pontuacao
function exibeStatusJogador(){
    let lbPontuacao = document.getElementById("lbPontuacao");
    lbPontuacao.innerHTML = "Pontos: "+gAp.pontos;
    let lbNivel = document.getElementById("lbNivel");
    lbNivel.innerHTML = "Nivel: "+gAp.nivel;
    let lbRodada = document.getElementById("lbRodada");
    lbRodada.innerHTML = "Rodada: "+gAp.rodada;
}

function selOper(tipo){
    document.getElementById("pgAbertura").style.display = "none";
    document.getElementById("mainPage").style.display = "inline";
    gAp.inicializaOperacoes(tipo);
    removeOperacoesAntigas();
    htmlOperacoes(gAp.operacoes);
}

// --- início do programa

// Esconde a main page deixando apenas a pagina de configuração aparecendo
document.getElementById("mainPage").style.display = "none";
var gAp = new GerenciaAprendizado();
htmlOperacoes(gAp.operacoes);
let butOk = document.getElementById("butOk");
butOk.onclick = function(){
    // Corrige operacoes e acerta pontuacao
    corrigeOperacoes(gAp.operacoes);
    // Ajusta o novel de dificuldade
    gAp.verificaNivel();
    // Exibe status do jogador
    exibeStatusJogador();
    // Desabilita botao OK
    butOk.disabled = true;
};

let butNovas = document.getElementById("butNovas");
butNovas.onclick = function(){
    // limpa operacoes antigas
    removeOperacoesAntigas();
    // Gera nova rodada
    gAp.novaRodada();
    // Exibe novas operacoes
    htmlOperacoes(gAp.operacoes);
    // Habilita botao OK
    butOk.disabled = false;
}


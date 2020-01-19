
function htmlOperacoes(lstOperacoes,htmlDiv){
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
        nro = nro + 1;       
    }
}

function removeOperacoesAntigas(){
    console.log("remove oper antigas");
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = 
      "<tr><th>Frase matemática</th><th>Resposta</th></tr>"
}

// Corrige questões e avança pontuação
function corrigeOperacoes(operacoes){
    let nro=1;
    for(oper of operacoes){
        let respDigitada = document.getElementById("resp"+nro).value;
        //console.log(respDigitada+" : "+oper.resp);
        gAp.corrigeOperacao(oper,respDigitada);
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

// --- início do programa
var gAp = new GerenciaAprendizado();
let operacoes = gAp.operacoes;
htmlOperacoes(operacoes,"divOperacoes");
document.getElementById("butOk").onclick = function(){
    // Corrige operacoes e acerta pontuacao
    corrigeOperacoes(operacoes);
    // Ajusta o novel de dificuldade
    gAp.verificaNivel();
    // Exibe status do jogador
    exibeStatusJogador();
};

document.getElementById("butNovas").onclick = function(){
    console.log("butNovas click");
    removeOperacoesAntigas();
    gAp.novaRodada();
    operacoes = gAp.operacoes;
    htmlOperacoes(operacoes,"divOperacoes");
}


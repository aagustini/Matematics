
function htmlOperacoes(lstOperacoes,htmlDiv){
    let tabela = document.getElementById("tabela");
    let numOfRows = tabela.rows.length;
    //let numOfCols = tabela.rows[numOfRows-1].cells.length;

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
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = 
      "<tr><th>Frase matemática</th><th>Resposta</th></tr>"
}

// Acerta imagem, exibe resposta e retorna pontuação
function corrigeOperacoes(operacoes){
    let nro=1;
    let pontos = 0;
    for(oper of operacoes){
        let respDigitada = document.getElementById("resp"+nro).value;
        console.log(respDigitada+" : "+oper.resp);
        if (oper.resp == respDigitada){
            pontos = pontos + 1;
        }
        nro = nro + 1;
    }
    return pontos;
}

// Exibe pontuacao
function exibePontuacao(pontos){
    let divPontuacao = document.getElementById("divPontuacao");
    divPontuacao.innerHTML = "Pontos: "+pontos;
}

// --- início do programa
var pontuacao = 0;
var qtdadeOperacoes = 5;
var operacoes = Operacao.sorteiaOperacoes(qtdadeOperacoes,"+",100,100);
htmlOperacoes(operacoes,"divOperacoes");
document.getElementById("butOk").onclick = function(){
    pontos = corrigeOperacoes(operacoes);
    pontuacao = pontuacao + pontos;
    exibePontuacao(pontuacao);
};
document.getElementById("butNovas").onclick = function(){
    removeOperacoesAntigas();
    operacoes = Operacao.sorteiaOperacoes(qtdadeOperacoes,"+",100,100);
    htmlOperacoes(operacoes,"divOperacoes");
}

//      
//      <p id="op1">13 + 9 = <input id="resp1" size="4"><image id="imgResp1" src="thinkingImg.jpg" height="20" width="20"></p>
//      

/*

// Estruturas de dados
// Esta opcao seria melhor. Guardaria só os códigos de cidade no imovel
// e no seletor HTML associa o codigo da cidade com a cidade
//var destinos = [{id:10,nome:"Sao Paulo"},"Rio de Janeiro","Brasilia","Porto Alegre"];
var destinos = ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Porto Alegre"];

var imoveis = [
    new imovel(10, 2, "Porto Alegre", 100),
    new imovel(20, 4, "Sao Paulo", 200),
    new imovel(15, 3, "Rio de Janeiro", 250),
    new imovel(5, 4, "Brasilia", 180),
    new imovel(50, 4, "Porto Alegre", 120),
    new imovel(40, 4, "Sao Paulo", 210),
    new imovel(35, 4, "Rio de Janeiro", 300),
    new imovel(30, 2, "Brasilia", 210)
];

// Preenche o seletor de destinos com 
// os destinos disponiveis
var selDestino = document.getElementById("selDestino");

var nro = 0;
for (destino of destinos) {
    selDestino.options.add(new Option(destino, nro, true, true));
    nro = nro + 1;
}

// deixa visivel a tela inicial e configura botao 
// de selecao de destino
document.getElementById("selectPage").style.display = "none";
document.getElementById("butDestino").onclick = function () {
    // Recupera o destino escolhido
    selDestino = document.getElementById("selDestino");
    var destinoEscolhido = selDestino.options[selDestino.selectedIndex].text;
    // Exibe a lista de imoveis no destino escolhido

    var opcoesEstadia = document.getElementById("opcoesEstadia");
    //var imoveisDispEm = document.getElementById("imoveisDispEm");
    var caption =  "<legend>Imoveis disponiveis em: " + destinoEscolhido+"</legend>";
    var opcoes = "";
    for (imovel of imoveis) {
        if (imovel.cidade == destinoEscolhido) {
            var opcao = "<input type='radio' name='estadia' value=" +
                        imovel.id + " checked >"+
                        imovel.toString()+
                        "<br>";
            opcoes += opcao;
        }
    }
    opcoesEstadia.innerHTML = caption + opcoes;
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("selectPage").style.display = "block";
};
document.getElementById("butEstadia").onclick = function () {
    var estadia = document.querySelector('input[name=estadia]:checked').value
    console.log(estadia);
    $("#mainPage").show();
    $("#selectPage").hide();
};
//alert("Qualquer coisa");
var classTextoAzul = document.getElementsByClassName("textoAzul");
//console.log(classTextoAzul.item(0));

var lovelyButton = document.getElementById("lovelyButton");
lovelyButton.addEventListener("click", (ev) => {
    var novotexto = document.getElementById("novoTexto").value;
    //console.log(novotexto);
    //console.log(novotexto[0]);
    //console.log(novotexto[0] == "A");
    //console.log(novotexto[0] == "B");
    if (novotexto[0] === "*") {
        //console.log("oi");
        classTextoAzul.item(0).innerHTML = "<b><em>" + novotexto + "</em></b>";
        $("#testaRequest").attr("value",novotexto);
    } else {
        classTextoAzul.item(0).innerHTML = "<b>" + novotexto + "</b>";
    }
    classTextoAzul.item(0).setAttribute("style", "font-size:40px;color:red");
});


var testaRequest = document.getElementById("testaRequest");
testaRequest.addEventListener("click",(ev)=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
         if (xhr.readyState === 4){ // == tenta contextualizar a comparação e === testa o tipo tb ...
             document.getElementById('result').innerHTML = xhr.responseText;
         }
    };
    xhr.open('GET', 'https://www.google.com');
    xhr.send();
});

// $ = seletor, #=id
//$("#testaRequest").css("font-size","40px");
*/


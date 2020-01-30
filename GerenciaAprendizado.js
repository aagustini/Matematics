class GerenciaAprendizado {
    constructor() {
        this._pontos = 0;
        this._rodada = 0;
        this._nivel = 0;
        this._quantidadeOperRodada = 5;
        this._niveis = [Operacao.sorteiaOperacaoSubN1,
                        Operacao.sorteiaOperacaoSomaN1,
                        Operacao.sorteiaOperacaoSubN2,
                        Operacao.sorteiaOperacaoSomaN2,
                        Operacao.sorteiaOperacaoSomaN3];
        this._operacoes = [];
        this.novaRodada();
    }

    get pontos() { return this._pontos; }
    get rodada() { return this._rodada; }
    get nivel() { return this._nivel; }
    get operacoes() { return this._operacoes; }
    get qtdadeOperRodada(){ return this._quantidadeOperRodada; }

    novaRodada() {
        this._operacoes = [];
        this._rodada++;
        for (let i = 0; i < this._quantidadeOperRodada; i++) {
            let op = this._niveis[this._nivel]();
            this._operacoes.push(op);
        }
    }

    verificaNivel() {
        // Se ainda pode avançar o nivel, avança
        if (this._nivel < this._niveis.length-1){
            let maxPontos = this._quantidadeOperRodada * this._rodada;
            let pontosParaAvancarNivel = maxPontos * 0.7;
            if (this._pontos > pontosParaAvancarNivel){
                this._nivel++;
            }
        }
    }

    corrigeOperacao(operacao, resposta) {
        if (operacao.resp == resposta) {
            this._pontos++;
            operacao.texto = "Correto";
            return true;
        }else{
            operacao.texto = "Errado";
            return false;
        }
    }
}
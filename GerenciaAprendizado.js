class GerenciaAprendizado {
    constructor() {
        this._pontos = 0;
        this._rodada = 0;
        this._nivel = 0;
        this._quantidadeOperRodada = 5;
        this._niveis = [Operacao.sorteiaOperacaoSomaN1,
                        Operacao.sorteiaOperacaoSubN1,
                        Operacao.sorteiaOperacaoSomaN2,
                        Operacao.sorteiaOperacaoSomaN3];
        this._operacoes = [];
        this.novaRodada();
    }

    get pontos() { return this._pontos; }
    get rodada() { return this._rodada; }
    get nivel() { return this._nivel; }
    get operacoes() { return this._operacoes; }

    novaRodada() {
        this._operacoes = [];
        this._rodada++;
        for (let i = 0; i < this._quantidadeOperRodada; i++) {
            console.log("Nivel:"+this._nivel);
            let op = this._niveis[this._nivel]();
            this._operacoes.push(op);
            console.log("Operacao: "+op.toString());
        }
    }

    verificaNivel() {
        this._nivel++;
        /*
        console.log(this._nivel+":"+this._niveis.length);
        if (this._nivel < this._niveis.length) {
            console.log("Pontos:"+this._pontos+"-"+"rp:"+this._rodada);
            if (this._pontos / this._rodada >= 3.0) {
                this._nivel++;
            } else {
                if (this._nivel > 0) {
                    this.nivel--;
                }
            }
        }
        */
    }

    corrigeOperacao(operacao, resposta) {
        if (operacao.resp == resposta) {
            this._pontos++;
            return true;
        }else{
            return false;
        }
    }
}
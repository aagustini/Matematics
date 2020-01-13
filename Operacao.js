class Operacao{
    constructor(op1,oper,op2,resp){
        this._op1 = op1;
        this._oper = oper;
        this._op2 = op2;
        this._resp = resp;
    }

    get op1(){
        return this._op1;
    }

    get oper(){
        return this._oper;
    }

    get op2(){
        return this._op2;
    }

    get resp(){
        return this._resp;
    }

    static sorteiaOperacaoSoma(maxOp1,maxOp2){
        let op1 = Math.floor(Math.random() * (maxOp1+1));
        let op2 = Math.floor(Math.random() * (maxOp2+1));
        let oper = "+";
        let resp = op1+op2;
        return new Operacao(op1,oper,op2,resp);
    }

    static sorteiaOperacoes(qtdade,oper,maxOp1,maxOp2){
        let operacoes = [];
        for(let i=0;i<qtdade;i++){
            switch(oper){
            case "+":
                let op = this.sorteiaOperacaoSoma(maxOp1,maxOp2);
                operacoes.push(op);
            }
        }
        return operacoes;
    }
}
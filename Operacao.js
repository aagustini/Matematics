class Operacao{
    constructor(op1,oper,op2,resp){
        this._op1 = op1;
        this._oper = oper;
        this._op2 = op2;
        this._resp = resp;
        this._texto = "não verificada"
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

    get texto(){
        return this._texto;
    }

    set texto(umTexto){
        this._texto = umTexto;
    }

    static sorteiaOperacaoSomaN1(){
        let op1 = Math.floor(Math.random() * (101));
        let op2 = Math.floor(Math.random() * (101));
        let oper = "+";
        let resp = op1+op2;
        return new Operacao(op1,oper,op2,resp);
    }

    static sorteiaOperacaoSomaN2(){
        let op1 = Math.floor(Math.random() * (1001));
        let op2 = Math.floor(Math.random() * (101));
        let oper = "+";
        let resp = op1+op2;
        return new Operacao(op1,oper,op2,resp);
    }

    static sorteiaOperacaoSomaN3(){
        let op1 = Math.floor(Math.random() * (1001));
        let op2 = Math.floor(Math.random() * (1001));
        let oper = "+";
        let resp = op1+op2;
        return new Operacao(op1,oper,op2,resp);
    }

    static sorteiaOperacaoSubN1(){
        let op1 = Math.floor(Math.random() * 10)*10;
        if (op1 < 10){
            op1 = 10;
        }
        let op2 = Math.floor(Math.random() * (101));
        if (op1 < op2){
            let aux = op1;
            op1 = op2;
            op2 = aux;
        }
        let oper = "-";
        let resp = op1-op2;
        return new Operacao(op1,oper,op2,resp);
    }

    static sorteiaOperacaoSubN2(){
        let op1 = Math.floor(Math.random() * (101));
        let op2 = Math.floor(Math.random() * (101));
        if (op1 < op2){
            let aux = op1;
            op1 = op2;
            op2 = aux;
        }
        let oper = "-";
        let resp = op1-op2;
        return new Operacao(op1,oper,op2,resp);
    }

    toString(){
        return this.op1+"-"+this.oper+"-"+this.op2+":"+this.texto;
    }

}
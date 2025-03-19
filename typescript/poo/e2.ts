class ContaBancaria{
    private saldo: number;
    
    
    constructor(saldo: number){
      this.saldo = saldo;
      
    }
    
    depositar(v: number): void{
      this.saldo = this.saldo + v;
    }
    
    getSaldo(): number{
      return this.saldo;
    }
    
    
}

const cb1 = new ContaBancaria(1);

console.log(cb1.getSaldo());

cb1.depositar(1);

console.log(cb1.getSaldo());

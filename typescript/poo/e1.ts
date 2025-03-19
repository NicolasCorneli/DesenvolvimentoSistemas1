class Carro{
    private marca: string;
    private modelo: string;
    
    
    constructor(marca: string, modelo: string){
      this.marca = marca;
      this.modelo = modelo;
      
    }
    
    detalhes(): string {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
    
  
}

const c1 = new Carro("Honda","Civic");
console.log(c1.detalhes());

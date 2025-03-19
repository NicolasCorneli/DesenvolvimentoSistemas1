class Animal {
  
  emitirSom(): string {
    return "Som de Animal";
    
  }
  

}

class Gato extends Animal{
  
  
  emitirSom(): string{
    return "Miaauuu!"
  }
  
  
}

const a1 = new Animal();

console.log(a1.emitirSom());

const g1 = new Gato();

console.log(g1.emitirSom());

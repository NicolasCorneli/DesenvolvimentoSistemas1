// Função com Parâmetro Opcionais: Crie uma função chamada orderPizza que recebe dois parâmetros: size (tamanho obrigatório) e flavor (opcional).
// Se flavor não for informado, assuma "Mussarela" como padrão. Exiba a mensagem "Pedido: Pizza [flavor], tamanho [size].".

function orderPizza(size: string, flavor: string = "Mussarela"): void {
    console.log(`Pedido: Pizza ${size} de ${flavor}`);    
}

orderPizza("Grande","Figo com gorgonzola");
orderPizza("Pequena");

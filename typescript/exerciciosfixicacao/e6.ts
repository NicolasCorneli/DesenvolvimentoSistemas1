// Função com Parâmetro Padrão: Crie uma função chamada discountPrice que recebe um preço e um desconto opcional (valor padrão de 10%). A função deve retornar o valor final com o desconto aplicado.

function discountPrice(preco: number): number {
    let discount: number = 0.90;
    return preco * discount;
}

const new_price = discountPrice(100);
console.log(new_price);

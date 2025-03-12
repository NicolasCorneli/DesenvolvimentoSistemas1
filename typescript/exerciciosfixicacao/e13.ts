// Propriedades Dinâmicas: Crie um objeto produto que tenha uma propriedade fixa nome (string) e permita armazenar propriedades adicionais dinâmicas.

interface Produto{
    nome: string;
    [key:string]: any;
    
}

let produto: Produto = {
    nome: "Camisa",
    cor: "Branca",
    tamanho: "P",
    preco: 111
}

console.log(produto);

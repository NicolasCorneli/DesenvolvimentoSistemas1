// Uso de Arrays e Tuplas: Crie uma tupla chamada car que contenha o nome do carro (string) e o ano de fabricação (number). Depois, acesse e exiba esses valores no console.

let car: [string,number] = ["Corolla",234324];

for (let x in car){
    let valor = car[Number(x)];
    console.log(valor);
}

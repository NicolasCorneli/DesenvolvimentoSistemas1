let car: [string,number] = ["Corolla",234324];

for (let x in car){
    let valor = car[Number(x)];
    console.log(valor);
}

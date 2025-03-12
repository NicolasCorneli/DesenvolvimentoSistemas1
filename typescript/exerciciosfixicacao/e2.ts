// Trabalhando com Enums: Crie um enum chamado DaysOfWeek representando os dias da semana.
// Em seguida, declare uma variável do tipo DaysOfWeek e atribua a ela o valor correspondente a "quarta-feira". Exiba o valor no console.
enum DaysOfWeek{
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado"
}

let dia: DaysOfWeek = DaysOfWeek["Quarta-Feira"];

console.log(dia);

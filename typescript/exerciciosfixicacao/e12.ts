// Propriedades Opcionais: Crie um objeto usuario com as propriedades nome (string) e email (opcional). Exiba os valores no console.

interface Usuario {
  nome: string;
  email?: string;
}

let usuario: Usuario = {
  nome: "João"
};

console.log(`Nome: ${usuario.nome}`);
console.log(`Email: ${usuario.email ?? "Não fornecido"}`);

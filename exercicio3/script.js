//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt('Qual é o seu nome? ')

nome === 'José' ? console.log('Oi, Zé') : console.log('Olá, '+nome)

let idade = Number(prompt('Qual a sua idade? '))

idade >= 18 ? console.log('Você pode tirar carteira de motorista! ') : console.log('Você ainda não pode tirar carteira de motorista! ')
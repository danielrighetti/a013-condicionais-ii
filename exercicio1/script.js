const num = Number(prompt("Insira um número: "))

if(num % 2 === 0){
    console.log('Esse número é divisível por 2.')
    if(num % 3 === 0)
    console.log('Esse número é divisível por 3.')
}

if(num % 2 === 0 && num % 3 === 0){
    console.log('Esse número é divisível por 2 e 3.')
}

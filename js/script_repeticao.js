//Pegando Elementos do Dom
const divfor = document.querySelector('#div-for')

//ESTRUTURA DE REPETIÇOES
for (i = 0; i < 10; i++){
    console.log(i)
    divfor.innerHTML += `${i} <br>`

}

//Contador e Acumulador
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0 , contPar = 0, contImpar = 0
let acum = 0.0

btnNum1.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum1.value)

    //Declaração de Contador
    cont++
    //Declaração de Acumulador
    acum += numDigitado

    if(numDigitado % 2 == 0){
        contPar++
    }else{
        contImpar++
    }

    divResult.innerHTML = `Total de número digitado ${cont} <br> A soma dos números digitado ${acum} <br> Total de número Par digitado: ${contPar} <br> Total de número impar digitado: ${contImpar} <br>`
})

//Repetição com WHILE
const inputFrase = document.querySelector('#msg')
const inputNumRepeticao =  document.querySelector('#numRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')

let contFrase = 0
let totalRepeticao = Number(inputNumRepeticao.value)

btnExibir.addEventListener('click', (evt)=>{
  totalRepeticao = Number(inputNumRepeticao.value)
  
  while(totalRepeticao > contFrase){
    divResultFrase.innerHTML += `${contFrase + 1} - ${inputFrase.value} <br>`
    contFrase++
  }
})

//Coleção de dados - Array
transporte = ['Bicicleta', 'Carro', 'Moto','Ônibus', 'Avião', 'Tototo']

for (i = 0; i <transporte.length; i++){
  console.log(transporte[i])
}
//For In
const divForin = document.querySelector('#div-forin')

for(let pos in transporte){
  console.log(transporte[pos])
  divForin.innerHTML += `${transporte[pos]} <br>`
}

//For Of
const divForOf = document.querySelector('#div-forof')

for(let elem of transporte){
  divForOf.innerHTML += `${elem} <br>`
}

//Coleção de Pessoas - Array de Objeto
const pessoas = [
  {nome: 'Maria', idade: 18, renda: 15000},
  {nome: 'Josefina', idade: 23, renda: 1800},
  {nome: 'Chicó', idade: 32, renda: 1.50},
  {nome: 'João Grilo', idade: 34, renda: 2.20}
]

console.log('-------------Lista Por For In--------------')
for(let indiceObjPessoa in pessoas){
  console.log(pessoa[indiceObjPessoa].nome, pessoas[indiceObjpessoa].idade, pessoas[indiceObjPessoa].renda)

}

console.log('-------------Lista Por Of------------------')
for(let pessoa of pessoas){
  console.log(pessoa.nome, pessoa.idade, pessoa.renda)
}

//Foreach
const divForeach = document.querySelector('#div-foreach')

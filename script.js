/////////////////////////////////////////////////////////////////Questão 2
function fibonacci(){
let num1 = 0
let num2 = 1
let num3 = 0

let numDigitado = Number(prompt("Insira um numero "))

while(numDigitado > num3){
    num3 = num1 + num2
    num1 = num2
    num2 = num3
}

if(numDigitado === 0 || numDigitado === 1){
    alert("O Número digitado faz parte da sequência de Fibonacci")
}else if(numDigitado === num3){
    alert("O Número digitado faz parte da sequência de Fibonacci")
}else{
    alert('O número digitado não faz parte da sequência de Fibonacci.')
}
}

///////////////////////////////////////////////////////////////
//Questão 3
function faturamento(){
    fetch('faturamentos.json').
    then((response)=> response.json()).
    then((data) => calcularFaturamento(data))

    function calcularFaturamento(mes){
    const faturamentos = []
       for(let dia of mes){
        for(let faturamento in dia){
           faturamentos.push(dia[faturamento])
        }
       }
    ;

    const valoresSemZero = faturamentos.filter((valor) =>{
        return valor != 0
    })

    const menorFaturamento = valoresSemZero.reduce((anterior, atual) => {
      return anterior  < atual  ? anterior : atual
    })

    const maiorFaturamento = valoresSemZero.reduce((anterior, atual) => {
        return anterior > atual ? anterior : atual
    })

    const total = valoresSemZero.reduce((anterior, atual)=>{
       return anterior + atual
    })

    const diasMediaSuperior = valoresSemZero.filter((valor)=>{
        return valor > (total/30)
    }) 

    console.log("O menor Faturamento foi de: R$",menorFaturamento);

    console.log("O maior Faturamento foi de: R$",maiorFaturamento);

    console.log(`A média de faturamento é de ${total/30} `)
    console.log(`Número de dias em que o valor de faturamento foi superior a média mensal: ${diasMediaSuperior.length}`)
    }
}

////////////////////////////////////////////////////////// 
// Questão 4
function calcularPercentual(){
    const sp = 67836.43, 
    rj = 36678.66, 
    mg = 29229.88,
    es = 27165.48,
    outros = 19849.53;

    const total = sp+rj+mg+es+outros

    const percentSP =( (sp/total)*100),
    percentRJ = ((rj/total)*100),
    percentMG = ((mg/total)*100),
    percentES = ((es/total)*100),
    percentOutros = ((outros/total)*100)

    console.log(`Porcentagem de SP ${percentSP.toFixed(2)}%`)
    console.log(`Porcentagem de RJ ${percentRJ.toFixed(2)}%`)
    console.log(`Porcentagem de MG ${percentMG.toFixed(2)}%`)
    console.log(`Porcentagem de ES ${percentES.toFixed(2)}%`)
    console.log(`Porcentagem de Outros ${percentOutros.toFixed(2)}%`)
}

/////////////////////////////////////////////////////////////////Questão 5
function inverteString(){
    let stringDigitada = prompt("Digite uma palavra ou frase")
    
    let stringInvertida = '';

    for(let i = stringDigitada.length - 1; i >= 0; i--){
        stringInvertida += stringDigitada[i]
    }

    alert(stringInvertida)
}




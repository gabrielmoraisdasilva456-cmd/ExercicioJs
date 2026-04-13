// criar arrays no js 
let names = ["fulano","ciclano","beltrano"]
console.log(names)
//tamanho 
console.log(`Tamanho do array:${names.length}`)
//indice 
console.log(`Indice ${names[0]}`)
// percorrer o array 
for(let contador=0;contador < names.length;contador++){
    let mensagem = `Boas vindas ${names[contador]}`
    console.log(mensagem)
}

const cores =["Amarelo","Vermelho","rosa"]
cores.forEach((cores)=>{
    console.log(cores)
})
//Adiciona elemento no final do Array
cores.push("Azul")
console.log(cores)
//Remove um elemento do Array 
cores.pop ()
console.log(cores)
//remove o primeiro elemento de um array 
cores.shift()
console.log(cores)
//Adiciona um elemento no inicio do array 
cores.unshift("roxo")
console.log(cores)
//remove na posição desejada "vermelho"(índice 1)
cores.splice(1, 1)
console.log(cores)
//adicionar em qualquer posição 
cores.splice(1, 0,"verde")
console.log(cores)
let valores = [8, 1, 7, 4, 2, 9]

for(let posição = 0; posição < valores.length; posição++){
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`)
}
console.log('--------------------------')

for(let posição in valores){
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`)
}
console.log('--------------------------')

console.log(`O valor está na posição ${valores.indexOf(2)}`) //mostra a posição que o valor indicado está
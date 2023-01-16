function calcular(){
    let número = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    
    if (número.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        let num = Number(número.value)
        let cont = 1
        tabuada.innerHTML = ''
        while (cont <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `tabuada${cont}`
            tabuada.appendChild(item)
            cont++
        }   
    }
}
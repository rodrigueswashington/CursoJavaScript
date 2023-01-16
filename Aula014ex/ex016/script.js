function contar(){
    let início = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.querySelector('div#resultado')
    let contador = início

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
    } else{
        resultado.innerHTML = 'Contando:<br>'
        let i = Number(início.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{27A1} `
            }
        } else{
            //contagem regressiva
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        }
        resultado.innerHTML += `\u{1f3c1}` 
    }
}


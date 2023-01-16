function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    msg.innerHTML = `Agora são ${horaAtual}:${minutoAtual}`

    if (horaAtual >= 0 && horaAtual < 12){
        img.scr = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if (horaAtual >= 12 && horaAtual <= 18){
        img.scr = 'foto-tarde.png'
        document.body.style.backgrond = '#b9846f'
    }
    else{
        img.scr = 'foto-noite.png'
        document.body.style.background = '#515154'
    }
    
}

function verificar(){
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > anoAtual){
        window.alert('[ERRO]! Verifique os dados e tente novamente!')
    } else{
        var fSex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fSex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulta.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}

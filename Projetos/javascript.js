let contador = 0
let tarefa = document.getElementById('input-tarefa')
let botãoAdd = document.getElementById('btn-add')
let main = document.getElementById('area-lista')

function addTarefa(){
    let valorTarefa = tarefa.value
    if ((valorTarefa !== "") && (valorTarefa !== null) && (valorTarefa !== undefined)){
        
        ++contador
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorTarefa}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`

        main.innerHTML += novoItem
        tarefa.value = ""
        tarefa.focus()
    }
}

function deletar(id){
    var delTarefa = document.getElementById(id)
    delTarefa.remove()
}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if (classe == 'item'){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)
    } else{
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
    }
}

//ADICIONAR O EVENTO DE ADICIONAR A TAREFA AO APERTAR ENTER
tarefa.addEventListener('keyup', function(event){
    //SE TECLOU O ENTER (CÓDIGO DO ENTER = 13)
    if(event.keyCode === 13){
        event.preventDefault()
        botãoAdd.click()
    }
})
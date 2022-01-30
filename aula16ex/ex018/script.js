
Adic.addEventListener('click', adic)

var Final = []

function adic(){
    
    let N = document.getElementById('txtN').value
    let tab = document.getElementById('tabela')
    

    if (N < 1 || N > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${N} adicionado.`
        tab.appendChild(item)
        Final.push(N)
    }
}




/* 
var Num = parseInt(document.getElementById('txtN').value)

function Adicionar(N) {
    
    

    if (N < 1 || N > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${N} adicionado.`
        tab.appendChild(item)
        return N
    }
}

let res = Adicionar(4)
*/
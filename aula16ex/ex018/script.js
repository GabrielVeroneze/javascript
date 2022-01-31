Adic.addEventListener('click', adic)

var Valor = []

function adic(){
    
    let Num = document.getElementById('Numero').value
    let Lis = document.getElementById('lista')
    let Com = Valor.includes(Num)

    Valor.push(Num)

    if (Num < 1 || Num > 100 || Com == true) {

        window.alert('Valor inválido ou já encontrado na lista.')

    } else {

        let item = document.createElement('option')
        item.text = `Valor ${Num} adicionado.`
        Lis.appendChild(item)
        
    }
}


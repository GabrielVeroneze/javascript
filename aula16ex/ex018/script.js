Adic.addEventListener('click', adic)
var Valor = []
let apag = document.getElementById('Numero')

function adic(){
    let Num = Number(document.getElementById('Numero').value)
    let Lis = document.getElementById('lista')
    let Com = Valor.includes(Num)
    if (Num < 1 || Num > 100 || Com == true) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${Num} adicionado.`
        Lis.appendChild(item)
        Valor.push(Num)
    }
    apag.value = ''
    apag.focus()
}

Final.addEventListener('click', final)
var Res = document.querySelector('div#res')

function final(){

    Res.innerHTML += `Ao todo, temos ${Valor.length} números cadastrados.`

    Array.max = function(array) {
        return Math.max.apply(Math, array);
    };  
    Res.innerHTML += `<br>O maior valor informado foi ${Array.max(Valor)}.`

    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
    Res.innerHTML += `<br>O menor valor informado foi ${Array.min(Valor)}.`
    
    let soma = 0
    for (let i = 0; i < Valor.length; i++) {
        soma = soma + Valor[i]    
    }
    Res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`

    let media = soma / Valor.length
    Res.innerHTML += `<br>A média dos valores digitados é ${media}.`
}

/* OUTRA FORMA DE DESCOBRIR O MAIOR VALOR
let maior = Valor.reduce(function(a, b) {
    return Math.max(a, b);
});
Res.innerHTML += `<br>O maior valor informado foi ${maior}.`
*/


Adic.addEventListener('click', adic)
var Valor = []
let apag = document.getElementById('Numero')
var Res = document.querySelector('div#res')

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
        Res.innerHTML = ''
    }
    apag.value = ''
    apag.focus()
}

Final.addEventListener('click', final)


function final(){
    if (Valor.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        Res.innerHTML = ''

        Res.innerHTML += `<p>Ao todo, temos ${Valor.length} números cadastrados.</p>`

        Array.max = function(array) {
            return Math.max.apply(Math, array);
        };  
        Res.innerHTML += `<p>O maior valor informado foi ${Array.max(Valor)}.</p>`

        Array.min = function(array) {
            return Math.min.apply(Math, array);
        };
        Res.innerHTML += `<p>O menor valor informado foi ${Array.min(Valor)}.</p>`
        
        let soma = 0
        for (let i = 0; i < Valor.length; i++) {
            soma = soma + Valor[i]    
        }
        Res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        let media = soma / Valor.length
        Res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

/* OUTRA FORMA DE DESCOBRIR O MAIOR VALOR
let maior = Valor.reduce(function(a, b) {
    return Math.max(a, b);
});
Res.innerHTML += `<br>O maior valor informado foi ${maior}.`
*/


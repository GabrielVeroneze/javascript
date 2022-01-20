bt.addEventListener('click', contar)

function contar() {

    var numI = document.getElementById('Ini')
    var numF = document.getElementById('Fim')
    var pass = document.getElementById('Pas')
    var res = document.getElementById('res')

    if (numI.value.length == 0 || numF.value.length == 0) {
        
        res.innerHTML = 'Impossível contar!'

    } else if (pass.value == 0) {

        window.alert('Passo inválido! Considerando PASSO 1')

    } else { 

        res.innerHTML = 'Contando:'
        var inicio = Number(numI.value)
        var fim = Number(numF.value)
        var passo = Number(pass.value)
        
        if (inicio < fim) { // Contagem Crescente
            
            for (var c = inicio; c <= fim; c = c + passo) {
                res.innerHTML += `${c}-`
            }

        } else { // Contagem Decrescente

            for (var c2 = inicio; c2 >= fim; c2 = c2 - passo) {
                res.innerHTML += `${c2}-`
            }
        }

    } 
    
}
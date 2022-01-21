bt.addEventListener('click', contar)

function contar() {

    var numI = document.getElementById('Ini')
    var numF = document.getElementById('Fim')
    var pass = document.getElementById('Pas')
    var res = document.getElementById('res')

    if (numI.value.length == 0 || numF.value.length == 0) {
        
        res.innerHTML = 'Você esqueceu de digitar um valor. Tente novamente!'
    
    } else { 
          
        var inicio = Number(numI.value)
        var fim = Number(numF.value)
        var passo = Number(pass.value)
        
        res.innerHTML = 'Contando: <br>'

        if (passo <= 0) {
            
            window.alert('Passo inválido! Considerando Passo 1')

            passo = 1
        }

        if (inicio < fim) { // Contagem Crescente
            
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449} `
            }

        } else { // Contagem Decrescente

            for (var c2 = inicio; c2 >= fim; c2 -= passo) {
                res.innerHTML += `${c2} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    } 
    
}
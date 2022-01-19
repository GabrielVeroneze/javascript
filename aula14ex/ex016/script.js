function contar() {
    var res = document.querySelector('div#res')
    var numI = document.querySelector('input#Ini').value
    var numF = document.querySelector('input#Fim').value
    var pass = document.querySelector('input#Pas').value
    
    
    if (numI <= numF) {
        for (numI; Cont <= numF; i += pass) {
            res.innerHTML = `${numI}`
        }

    }
}
botao.addEventListener('click', clicar)
function clicar() { 
    var Num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (Num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var N = Number(Num.value)
        tab.innerHTML = ''
        for (var c = 0; c < 11; c += 1) {  
            var item = document.createElement('option')
            item.text = `${N} x ${c} = ${N*c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
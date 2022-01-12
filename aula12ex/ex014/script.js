function carregar(){
    var msg = window.document.querySelectorAll('div')[0]
    var img = window.document.querySelector('img')
    var data = new Date()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'blue linear-gradient(#5E68FF , #5CFF4D) center center / cover no-repeat fixed' 
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
    } else {
        img.src = 'fotonoite.png'
    }
}
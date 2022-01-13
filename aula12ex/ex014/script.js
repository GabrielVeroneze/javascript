function carregar(){
    var msg = window.document.querySelectorAll('div')[0]
    var img = window.document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    if (minu < 10) {
        minu = '0' + minu 
    }
    msg.innerHTML = `Agora são <strong>${hora}:${minu}</strong> horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'green linear-gradient(#1F8C3A , #5CFF4D) center center / cover no-repeat fixed' 
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = 'yellow linear-gradient(#EBA400, #F7F700) center center / cover no-repeat fixed' 
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = 'darkblue linear-gradient(#190000, #090057) center center / cover no-repeat fixed' 
    }
}

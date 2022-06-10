var tempo = new Date()
var hora = tempo.getHours()
 function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var fundo = document.querySelector('body#fundo')
    msg.innerHTML = `Agora são exatamente ${hora}h`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
    }else if (hora >=12 && hora < 18){
        img.src = 'tarde.jpg'
        fundo.style.background = 'orange'
    }else{
        img.src = 'noite.jpg'
        fundo.style.background = 'black'
    }
}
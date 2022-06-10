var tempo = new Date() //Dando um valor ao tempo de data/tempo
var hora = tempo.getHours() //Pega o horário do seu computador
 function carregar(){ //Função quando carrega a página a função ativa
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
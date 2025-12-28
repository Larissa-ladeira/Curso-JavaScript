
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    // var data = new Date()
    // var hora = data.getHours()

    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = "imagens/foto-manhã.jpg" 

    }
    else if (hora <= 18 ){
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = "imagens/foto-tarde.jpg" 

    }else{
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = "imagens/foto-noite.jpg" 

    }
}

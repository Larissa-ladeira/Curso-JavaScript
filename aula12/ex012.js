
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${min} horas.`)


if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!')
}
else if (hora < 12){
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa Noite!')
}
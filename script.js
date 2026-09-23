const botoesCurtir = document.querySelectorALL(".curtir")
botoesCurtir.forEach(function(botaoCurtir){
    let curtir = false;
    botaoCurtir.addEventListener("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtir === false){
        contador.textContent++;
        curtir = true;
    }else{
        contador.textContent--;
        curtir = false;
    }
}});
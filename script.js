const botoesCurtir = document.querySelectorALL(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){
        contador.textContent++;
        curtiu = true;
    }felse{
        contador.textContent--;
        curtiu = false;
    }
}});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click",mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}
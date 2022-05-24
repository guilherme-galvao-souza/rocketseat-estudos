let resultado = document.querySelector('.resultado');
let valor = 0
function somar(){
 resultado.innerHTML = ++valor
 if(valor>=0){
     resultado.style.color = 'black'
 }
}
function subtrair(){
 resultado.innerHTML = --valor
if(valor<0){
    resultado.style.color = 'red'
}
}

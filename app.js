let nombre=document.getElementById('nombre');
let mail=document.getElementById('mail');
let contra=document.getElementById('contra');
let confirmarContra=document.getElementById('confContra');
let submit=document.getElementById('envForm');

function contieneNumero(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') { // Verifica si el carácter es un número y no es un espacio
        return true;
      }
    }
    return false;
  }


const validacionContra=()=>{
    contra=document.getElementById('contra');
    if(contieneNumero(contra.value)){
        console.log("a");
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    
});
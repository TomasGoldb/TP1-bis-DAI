const minCaracteres=8;

let nombre=document.getElementById('nombre');
let mail=document.getElementById('mail');
let contra=document.getElementById('contra');
let confirmarContra=document.getElementById('confContra');
let submit=document.getElementById('envForm');
let numero=document.getElementById('pNumero');
let caracteres=document.getElementById('pCaracteres');
let letra=document.getElementById('pLetra');

function contieneNumero(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') { // Verifica si el carácter es un número y no es un espacio
        return true;
      }
    }
    return false;
  }

  function contieneLetra(str) {
    return /[a-zA-Z]/.test(str);
  }
  function esEmailValido(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
const esValidaContra=(contra)=>{
    return contieneNumero(contra)&&contieneLetra(contra)&&contra.length>=8;
}


const validacionContra=()=>{
    contra=document.getElementById('contra');
    if(contieneNumero(contra.value)){
        numero.innerText='✔ Al menos un número';
        numero.className="verde";
    } else{ 
        numero.innerText='✘ Al menos un número';
        numero.className="rojo";
    }
    if(contra.value.length>=minCaracteres){
        caracteres.innerText='✔ Mínimo 8 caracteres';
        caracteres.className="verde";
    } else{
        caracteres.innerText='✘ Mínimo 8 caracteres';
        caracteres.className="rojo";
    }
    if(contieneLetra(contra.value)){
        letra.innerText='✔ Al menos una letra';
        letra.className="verde";
    } else{
        letra.innerText='✘ Al menos una letra';
        letra.className="rojo";
    }
    if(!esValidaContra(contra.value)){
        contra.style.border="2px solid rgb(133, 6, 6)";
    } else{
        contra.style.border="1px solid black";
    }
}
const validarNombre=()=>{
    let pNombre=document.getElementById('pNombre');
    nombre=document.getElementById('nombre');
    if(nombre.value.length<3) {
        pNombre.innerText='El nombre debe tener al menos 3 caracteres.';
        nombre.style.border="2px solid rgb(133, 6, 6)";
    } else{
        pNombre.innerText='';
        nombre.style.border="1px solid black";
    }
}
const validarConfContra=()=>{
    confirmarContra=document.getElementById('confContra');
    pConfContra=document.getElementById('pConfContra');
    if(confirmarContra.value==contra.value){
        pConfContra.innerText="";
        confirmarContra.style.border="1px solid black";
    } else{
        pConfContra.innerText="Las contraseñas no coinciden.";
        confirmarContra.style.border="2px solid rgb(133, 6, 6)";
    }
}
const validarMail=()=>{
    mail=document.getElementById('mail');
    let pMail=document.getElementById('pMail');
    if(esEmailValido(mail.value)){
        pMail.innerText='';
        mail.style.border="1px solid black";
    } else{
        pMail.innerText='Debes ingresar un email valido.';
        mail.style.border="2px solid rgb(133, 6, 6)";
    }
}  
const validarDatosCorrectos=()=>{
    nombre=document.getElementById('nombre');
    mail=document.getElementById('mail');
    contra=document.getElementById('contra');
    confirmarContra=document.getElementById('confContra');
    return nombre.value.length>3&&esEmailValido(mail.value)&&esValidaContra(contra.value)&&contra.value==confirmarContra.value;
}

contra.addEventListener('input', ()=>{
    validacionContra();
});

submit.addEventListener('click',()=>{
    event.preventDefault()
    let textolog=document.getElementById("confirmacionLogueo");
    console.log(validarDatosCorrectos());
    if(validarDatosCorrectos()){
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        console.log(usuarios);
        const cuentaAGuardar= {
            nombre: nombre.value,
            mail: mail.value,
            contra: contra.value
        };
        usuarios.push(cuentaAGuardar);
        console.log(usuarios);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        Swal.fire({
            title: "Tu cuenta se ha creado correctamente!",
            icon: "success",
            draggable: true
          });
    }else{
        Swal.fire({
            title: "Hay un error en tu registro!",
            icon: "error",
            draggable: true
          });
    }
});

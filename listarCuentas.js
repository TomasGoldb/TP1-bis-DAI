let tabla=document.getElementById("cuentas");

const cargarCuentas=()=>{
    let cuentas=JSON.parse(localStorage.getItem('usuarios'));
    let iconoTacho='<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#c43c3c" fill-rule="evenodd" d="M320 85.334H192V42.667h128zm-85.333 128H192V384h42.667zm85.333 0h-42.667V384H320zM448 128v42.667h-42.667v298.667H106.667V170.667H64V128zm-85.333 42.667H149.333v256h213.334z"/></svg>';
    let linea="";
    if(cuentas){
        for(let i=0;i<cuentas.length;i++){
            linea+=`
            <tr id="linea${i}">
                <td>${cuentas[i].mail}</td>
                <td>${cuentas[i].nombre}</td>
                <td>${cuentas[i].contra}</td>
                <td class="tachito"><button class="icono-tacho" onclick="borrarCuenta(${i})">${iconoTacho}</button></td>
            </tr>
            `;
        }
    }
    console.log(cuentas);
    tabla.innerHTML+=linea;
}

document.addEventListener('DOMContentLoaded', ()=>{
    cargarCuentas();
});

const borrarCuenta=(numero)=>{
    let cuentas=JSON.parse(localStorage.getItem('usuarios'));
    cuentas.splice(numero, 1);
    localStorage.setItem('usuarios', JSON.stringify(cuentas));
    let linea="linea"+numero;
    let lineaABorrar=document.getElementById(linea);
    lineaABorrar.remove();
}
let tabla=document.getElementById("cuentas");


document.addEventListener('DOMContentLoaded', ()=>{
    let cuentas=JSON.parse(localStorage.getItem('usuarios'));
    let linea="";
    if(cuentas){
        for(let i=0;i<cuentas.length;i++){
            linea+=`
            <tr>
                <td>${cuentas[i].mail}</td>
                <td>${cuentas[i].nombre}</td>
                <td>${cuentas[i].contra}</td>
            </tr>
            `;
        }
    }
    console.log(cuentas);
    tabla.innerHTML+=linea;
});
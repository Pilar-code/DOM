//Bienvenidos

let Ingresar =prompt('ingrese su nombre');
if (Ingresar >= 0){
    alert("No ingresaste un nombre valido. Para que funcione intenta nuevamente");
    
}else if (Ingresar == ""){
    alert("No ingresaste un nombre valido. Para que funcione intenta nuevamente");
}
let Nombre = document.createElement("ul");
Nombre.innerHTML="<li>"+ Ingresar + "</li>";
document.body.append(Nombre); 



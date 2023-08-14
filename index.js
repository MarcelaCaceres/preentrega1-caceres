let trueOrFalse = true;

while (trueOrFalse){
    // Pide al usuario que ingrese su nombre
const nombre = prompt("Bienvenido/a Por favor, ingresa tu nombre:");
const apellido =  prompt ('Por favor, ingresa tu apellido:');
const edad = prompt ('Por favor ingresa tu edad:');
const email = prompt ('Por favor ingresa tu email:');
if (nombre!= "" && apellido != "" && edad!= "" && email !=""){
    alert ( `Bienvenido ${nombre}  ${apellido}!Gracias por registrate`);
    trueOrFalse = false;

}
else{
    alert("Por favor complete todos los campos");
}
  

}


function multiplicacion(a, b) {
    const resultado = a * b; 
    alert( "el valor de la suscripcion es " + resultado);

}
multiplicacion (1,2);

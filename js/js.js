var boton = document.getElementById('Enviar');

function calcular(){

var fecha = document.getElementById('fecha').value;
var nombre = document.getElementById('nombre').value;
var mensaje = document.getElementById('bienvenida');

var respuesta1 = "Hola niño "+ nombre
var respuesta2 = "Hola señor "+ nombre

if (fecha>=2003){
   mensaje.textContent = respuesta1
}
else{
    mensaje.textContent = respuesta2
}
}

function cajaTexto (){

mensaje.classList.add('mensaje');

}

boton.addEventListener('click', cajaTexto);
boton.addEventListener('click', calcular);

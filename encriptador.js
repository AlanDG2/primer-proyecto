function initTextarea() {
  // Obtener el elemento del textarea
  const textArea = document.getElementById("texto");
  

  // Obtenemos el elemento del botón
  const encryptButton = document.getElementById("botonEncriptar");

  // Añadimos el event listener input para detectar cuando el contenido del textarea cambia  compara que el texto solo sea minusculo   y liego lo encripta
  encryptButton.addEventListener("click", function() {
    if (soloMinuscula(textArea)) {
      encryptedText(textArea);
    }
  });

  const copyButton = document.getElementById("copiar");
  copyButton.addEventListener("click", copiarTexto);

  // Obtenemos el elemento del botón
  const desencriptarButton = document.getElementById("botonDesencriptar");

  // Añadimos el event listener click para detectar cuando se haga click en el botón
  desencriptarButton.addEventListener("click", function() {
    dencryptedText();
  });
}


//funcion para evitar que el usuario ingrese mayusculas o acentuaciones
function soloMinuscula(textArea) {

  var minuscula=false;
  // Validamos que el texto no contenga mayúsculas, acentuaciones o caracteres especiales
  const pattern = /^[a-záéíóúñ\s]+$/;
  if (!pattern.test(textArea.value)) { //test() es un método que se utiliza en objetos de expresiones regulares en JavaScript. Su función es comprobar si una cadena de texto coincide con el patrón especificado en la expresión regular.
    document.getElementById("alert").style.color = "red";
    document.getElementById("alert").style.fontSize = "16px";
    return;
    return  minuscula;
  }else{ return minuscula=true;}
}

function encryptedText(textArea){

  const textOrigin = textArea.value;
  // Remplaza las vocales con los string , g es global para seguir iterando, i es para que sea insensible a mayúsculas y minúsculas
  const textoEncriptado = textOrigin.replace(/[aeiou]/gi, remplazarAEncriptado);

  // Actualizar el contenido del elemento HTML con el texto encriptado
  const textoEncriptadoElement = document.getElementById("textoEncriptado");
  textoEncriptadoElement.innerHTML = textoEncriptado;

  }
function dencryptedText() {
  // Obtenemos el valor del textarea
  const textoEncriptado =document.getElementById("textoEncriptado").innerHTML;

  // Desencriptamos el texto
  const textoDesencriptado = desencriptarTexto(textoEncriptado);

  // Actualizamos el contenido del elemento HTML con el texto desencriptado
  const textoDesencriptadoElement = document.getElementById("textoEncriptado");
  textoDesencriptadoElement.innerHTML = textoDesencriptado;
}


function remplazarAEncriptado(match) {
  // comparara las vocales y si las encuentra, las cambia por el string
  switch (match.toLowerCase()) { // match se utiliza para buscar todas las vocales dentro de la cadena texto y devuelve un array con todas las coincidencias encontradas. Luego, se itera sobre este array y se reemplazan las vocales por los caracteres especiales correspondientes utilizando el método replace.
    case "a":
      return "enter";
    case "e":
      return "imes";
    case "i":
      return "ai";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return match;
  }
}


function desencriptarTexto(textoEncriptado) {
  // Reemplazamos los patrones encriptados por sus valores originales
  const textoDesencriptado = textoEncriptado.replace(/enter/gi, 'a')
    .replace(/imes/gi, 'e')
    .replace(/ai/gi, 'i')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');

  // Retornamos el texto desencriptado
  return textoDesencriptado;
}

function copiarTexto() {
  const textoEncriptadoElement = document.getElementById("textoEncriptado");
  const textoEncriptado = textoEncriptadoElement.innerHTML;
  navigator.clipboard.writeText(textoEncriptado);
}
// Añadimos un event listener load para esperar a que la página cargue antes de ejecutar la función initTextarea
window.addEventListener("load", initTextarea);
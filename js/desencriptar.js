/*tomo el boton desencriptar*/
var desencriptarFrase= document.querySelector(".boton-desencriptar");

/*tomo el p html (ninguna palabra ingresada)*/
var mostrarAlerta= document.querySelector(".mensaje");

/*Creamos el listener para el boton desencriptar */
desencriptarFrase.addEventListener("click", function (event) {
    event.preventDefault();
     /*salida de las palabras por el text area*/
     var cajaSalida = document.querySelector(".salida");
     var form = document.querySelector(".entrada");
     /*Obtenemos el valor la frase ingresada por el usuario*/
     frase = form.value;
     /*Convertimos toda la frase a minusculas */
     frase = frase.toLowerCase();
     /*Sacamos posibles espacios en blanco al comenzar o finalizar la frase*/
     frase = frase.trim();
     /*Para chequear frase*/
     console.log(frase);
     //Resetea el input
    form.value="";
    
    function desencriptar(frase){    
        var codigoNormal= [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
        for (var i=0; i<codigoNormal.length; i++) {
            if (frase.includes(codigoNormal[i][0])){
                var frase = frase.replaceAll(codigoNormal[i][0], codigoNormal[i][1]);
            }
        }
        mostrarAlerta.textContent="Frase Desencriptada";
        return (cajaSalida.value = frase);
    }
    desencriptar(frase);
})

    
    
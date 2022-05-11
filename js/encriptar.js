/*Tomo el boton encriptar y le agregamos un listener click*/
var encriptarFrase = document.querySelector(".boton-encriptar");

/*salida de las palabras por el text area*/
var cajaSalida = document.querySelector(".salida");
/*obtengo la frase ingresada*/
var form = document.querySelector(".entrada");
//Para resetear el input utilizo focus
form.focus();

/*Creamos el listener para el boton encriptar */
encriptarFrase.addEventListener("click", function (event) {
    event.preventDefault();
    /*Obtenemos el valor la frase ingresada por el usuario*/
    frase = form.value;
    /*Convertimos toda la frase a minusculas */
    frase = frase.toLowerCase();
    /*Sacamos posibles espacios en blanco al comenzar o finalizar la frase*/
    frase = frase.trim();
    /*Para Testear Funcionamiento de frase*/
    console.log(frase);
    //Resetea el input
    form.value="";
    
    function validar(frase){
        var quitarAcentos= [["é","e"],["í","i"],["á","a"],["ó","o"],["ú","u"]];
        for (var i=0; i<quitarAcentos.length; i++) {
            if (frase.includes(quitarAcentos[i][0])) {
                frase = frase.replaceAll(quitarAcentos[i][0],quitarAcentos[i][1]);
            }
        }
        //Creo un alerta para testear
        //alert("Frase Validada" + frase);
        return frase;
    }
 
    function encriptar(frase) {
        var codigoEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        for (var i=0; i<codigoEncriptacion.length; i++) {
            if (frase.includes(codigoEncriptacion[i][0])) {
                frase = frase.replaceAll(codigoEncriptacion[i][0], codigoEncriptacion[i][1]);
            }
        }
        mostrarAlerta.textContent="Frase Encriptada Con Exito";
        return (cajaSalida.value = frase);
    }
    validar(frase);
    encriptar(frase);
    
})

   
   





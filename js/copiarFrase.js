/*Tomo el boton copiar y le asigno un listener */
var copiarFrase=document.querySelector(".boton-copiar");
copiarFrase.addEventListener("click", function(event){
    event.preventDefault();
        
    function copiarYpegar() {
        //obtengo el Input
        var inputEntrada = document.querySelector(".entrada");
        //obtengo el text area
        var textoAcopiar = document.querySelector('.salida');
        
        textoAcopiar.select();
        document.execCommand('copy');
        //Agrego un alerta para test
        alert("Texto Copiado");
        mostrarAlerta.textContent="Texto Copiado";
        //inputEntrada.value=textoAcopiar.value;
        textoAcopiar.value="";
    }
    copiarYpegar();
});
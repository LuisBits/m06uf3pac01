/* 
    1. Abra una ventana con las siguientes características:

        a. No deben aparecer ni la barra de direcciones ni la de herramientas.
        
            - Parece que la barra de direcciones siempre aparece en los navegadores.
        
        b. Las dimensiones deben ser de 500px de ancho por 600px de alto.
        c. El tamaño de la ventana no se puede cambiar una vez abierta.
        
            - Aquí pasa lo mismo, los navegadores no permiten bloquear la especificacion
            'resizable'.
*/

function abrirVentana() {
    window.open('', '_blank', 'location=no, toolbar=no, width=500px, height=600px, resizable=no');
}

// ------------------------------------------------------------------------------------------------

/* 
    3. Ejercicio 10, pág. 142 
*/

function addLista() {
    var lista = document.getElementsByTagName("ul")[0];
    var elemento = document.createElement("li");
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    // Si los 2 campos se han completado...
    if (!nombre == "" && !edad == "") {  
        // Generamos el texto y añadimos.
        elemento.innerHTML = nombre + " (" + edad + " años)";  
        lista.appendChild(elemento);
        // Según la edad, cambiamos el color del texto.
        if (edad > 17 && edad < 65) {
            elemento.classList.add("mayorEdad");
        }
        else if (edad > 64) {
            elemento.classList.add("terceraEdad");
        }        
    }
}

// ------------------------------------------------------------------------------------------------

/* 
    4. Mostrar con 'Alert' cada nodo del arbol HTML 
*/

function mostrarNodos() {
    var listaNodos = document.getElementsByTagName("*");
    var i;
    var msjAlert = "Nodos de la página:\n----------------------\n";
    for (i = 0; i < listaNodos.length; i++) {
        msjAlert += '- ' + listaNodos[i].nodeName + '\n';
    }
    alert(msjAlert);
}

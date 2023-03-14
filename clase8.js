//CLASE 8 DOM
// la estructura del HTML son las etiquetass (body, head, etc) en el DOM cada etiqueta es un objeto (elemento) que llamamos NODO. esto nos permite dinamisar la pagina.
//del NODO RAIZ solo son BODY y HEAD
//la transformacion de las etiquetas HTMLgenerar DOS NODOS: nodo elemento (que corresponde a la propia etiqueta de HTML) y nodo texto(que contiene el texto encerrado por esa etiqueta HTML)
//ANIDACIONES
//usamosel OBJETO GLOBAL document (document.body = modificar el body)
console.log(document.body)

//TIPOS DE NODOS:document (nodo raiz,representa al HTML en si); element (representa a cada etiqueta del html);attr(representa los atributos de las etiquetas);text (nodo que contiene texto); coment(nodo que contiene comentarios).

//ACCESO A LOS NODOS: mediante la clase: document nos muestra los METODOS getElementById(busca al elemento por el ID); getElementsByClassName(busca al elemento por la class);getElementsByTagName(busca elementos pero mas ampliamente).
//console.log(document.getElementById("contenedor"))
//ByClassName y ByTagName contienen muchos elementos entonces los tratamos con arrays (usamos los metodos de arrays)
//console.log(document.getElementsByClassName("parrafo"))
//console.log(document.getElementsByTagName("div"))
/*EJEMPLO DEL PROFE:
let parrafo= getElementsByClassName("parrafo")
realizamos el recorrido como array:
for const(parrafo of parrafos){
    console.log(parrafo.innerHtml)
}
con este "for of" y el uso de innerHtml directamente entramos al texto (cuando antes nos mostraba el elemento completo)
    
    */
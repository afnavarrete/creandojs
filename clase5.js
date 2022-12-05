//---------------------------------------------------------------
//CLASE 5
//OBJETOS
/*SINTAXIS DE UN OBJETO, va siempre con "const"
const producto = {
    /*KEY : "VALUE"
    nombre: "monitor de 24 pulgadas",
    precio: 300,
    disponible: true,
//anidando propiedades*
    origen: {
        fabricacion: "China"
    }
};
*/
/*
//imprimo en consola y me sale toda la info de (producto)
console.log(producto);
*/
/*
//si quiero VER DETERMINADA INFO adentro del objeto: sintaxis de punto
console.log(producto.disponible);
console.log(producto.nombre);
console.log(producto.precio);

/*si es una CONSTANTE puedo MODIFICAR lo que esta adentro de mi objeto? si, se puede. si necesito
AGREGAR una propiedad nueva al objeto :*/
/*
producto.imagen= "imagen.jpg"

//ELIMINANDO una propiedad dentro del objeto
delete producto.disponible;

//MODIFICAR los valores:
producto.disponible=false

//ANIDACION*
console.log(producto.origen.fabricacion);

//DESTRUCTURING
//desarmar el objeto para acceder al valor que necesito:
const {nombre, precio,disponible}= producto;

//imprimo a consola y solo me da el valor
console.log(nombre);

//CONSTRUCTOR de OBJETOS- OBJECT CONSTRUCTOR: es un template (plantilla),para estandarizar las propiedades de mi objeto LA PRIMER LETRA EN MAYUSCULA. en los parentesis van las propiedades de los objetos:
function Producto (nombre, precio) {
//el THIS
    this.nombre=nombre;
    this.precio=precio;
//valor x defecto
    this.disponible=true;
}
/*le estoy diciendo a producto2 que tome como referencia el constructor Producto, "new" es palabra reservada*/
/*const producto2=new Producto ("Teclado", 1000);
const producto3=new Producto ("Mouse", 500);
const producto4=new Producto("Monitor", 1000);

console.log(producto2);
console.log(producto3);
console.log(producto4);*/

//CADENA DE CARACTERES EJEMPLO: (EN CLASE 6 SE VE COMPLETO)
/*let texto = "Bienvenidos a JS";
//length me tira en consola la cantidad de caracteres
console.log(texto.length);
//toLowerCase me pasa todo a minuscula por ej: al ingresar un mail
console.log(texto.toLowerCase());
//toUpperCase me pasa todo a mayuscula
console.log(texto.toUpperCase());*/

//dentro del constructor armamos los metodos por defecto (metodo function)
/*
function Cliente(nombre,edad,domicilio) {
    this.nombre=nombre;
    this.edad=edad;
    this.domicilio=domicilio;
    this.saludar=function(){
        console.log("SALUDOS"+this.nombre);
    };
}

const cliente1=new Cliente ("coder", 20, "mitri 154");
cliente1.saludar();*/

/* Las clases de JavaScript, proveen una sintaxis mucho más clara y simple para crear objetos personalizados.Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. */

/*
class Usuario {
    constructor(nombre, acceso){
        this.nombre=nombre;
        this.acceso= acceso;
    }
//fuera de la llave pongo mi metodo personalisado
    mostrarInfo(){
        return`Usuario : ${this.nombre}, tu acceso es ${this.acceso}`;
    }    
}
const coderhouse=new Usuario("coder", "aceptado");
console.log(coderhouse.mostrarInfo());*/




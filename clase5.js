//CLASE 5
//OBJETOS:conjunto de datos relacionados a "algo"

/*
-VARIABLES COMUNES
let nombre= "homero";
let edad= 39;
let calle= siempreviva...;

la idea del objeto es juntar todas los propiedades(nombre) y valores("homero") en una. 
lo armamos con "const" porque el objeto puede cambiar de valores PERO NO de propiedades

-OBJETO LITERAL
const persona1 ={
    nombre:"HOMERO",
    edad:"39",
    calle:"SIEMPREVIVA..."} 
    
para poder "buscar" informacion dentro de un objeto accedemos de 2 formas:
1- console.log (persona1.nombre)
2- console.log (persona1["nombre"])    

si quiero cambiar algun valor del obejto 
1- persona1.nombre= "cesar"
y ahora me va a salir en consola:
    edad:"39",
    calle:"SIEMPREVIVA...   
    nombre:"cesar", 

-CONSTRUCTORES: una funcion para crear un nuevo objeto cuando queramos.
--IMPORTANTE!
tenemos una funcion con tres parametros y dentro de las llaves los valores, que son esos parametros. esta funcion nos sirve como "molde" para cuando "construyamos" solo llamemos a la funcion y con el "new" agregarle informacion.El "this" funciona como enlace al "new"--
-en parametros de la funcion tb podemos pasar un objeto entero, ej:
function Persona (literal){ EL PARAMETRO "LITERAL" ES UN OBJETO
    this.nombre= literal.nombre;
    this.edad=literal.edad;
    this.calle=literal.calle;
}
en la creacion de un nuevo objeto:
const persona1= new Persona({nombre:"homero", edad:39, calle:av siempreviva...  })
aca tenemos una variable constante a la cual le designamos el nombre de "persona1" para cargar nuevos datos. y ponemos entre parentesis y llaves los datos para no repetir codigo haciendo una funcion (ya hecha) con un objeto (ya hecho)
mantener por un tema de prolijidad el orden de los parametros del objeto con la creacion 
No es lo mismo hacer una funcion constructora que crear un objeto, eso se hacen juntos.

-METODOS Y OPERACIONES CON OBJETOS:
metodo y funciones son parecidas, solo que los metodos se limitan a ser ejecutados solo desde el mismo objeto. En los metodos si o si es necesario un objeto, en una funcion puede o no haber un objeto. esa es la diferencia entre ambos.
los metodos se usan con palabras reservadas de JS

-CADENA DE CARACTERES EJEMPLO: (EN CLASE 6 SE VE COMPLETO)
let texto = "Bienvenidos a JS";
LENGTH me tira en consola la cantidad de caracteres
console.log(texto.length);
TOLOWERCASE me pasa todo a minuscula por ej: al ingresar un mail
console.log(texto.toLowerCase());
TOUPPERCASE me pasa todo a mayuscula
console.log(texto.toUpperCase());
    
-CREANDO Y EJECUTANDO NUESTRO METODO PARA EL OBJETO PERSONA
dentro de las propiedades ponemos una funcion (linea 64)
function Persona (literal){
    this.nombre= literal.nombre;
    this.edad=literal.edad;
    this.calle=literal.calle;
    this.saludar= function(){
        console.log(`hola`+ this.nombre)
    } 
}
--EJECUCION, llamado de metodos (nombre de objeto + la funcion)
persona1.saludar()   


-OPERADORES IN Y FOR...IN
--IN:
para poder recorrer los valores puntuales del objeto:
console.log("nombre" in persona1)
este IN va a "preguntar" si en el objeto persona1 esta el valor "nombre", en consola nos "responde" por TRUE O FALSE
con IN podemos "preguntar" si hay o no tal o cual valor

--FOR...IN:
sirve para recorrer COMPLETO al objeto persona1
traduccion: para el objeto persona1 devolver en consola todas las propiedades
en este ejemplo nombra a la variable como "propiedad" pero puede tener cualquier otro nombre 
for(const propiedad in persona1){
    console.log(persona1.[propiedad]);
}

Podemos agregar if, else, else if dentro de nuestro "FOR"
for(const propiedad in persona2){
    if (persona2.propiedad)
}


-VERIFICAR EL TEMA DEL CORCHETE Y EL PUNTO PORQUE CON UNO PUEDO ACCEDER A UNA PROPIEDAD Y EN EL OTRO PUEDO ACCEDER AL OBJETO
CUANDO PREGUNTAMOS EN EL FOR, NO PONER EL PUNTO SI LOS CORCHETES, POR ACCEDER A UNA PROPIEDAD DESDE UNA VARIABLE


--CLASS, son equivalentes a la funcion constructora
los metodos no van dentro de las clases van por fuera del constructor
tenemos una:
const persona1= new Persona("homero", 39, "av. siempre viva...");

class Persona {
    constructor(nombre, edad, calle){
        this.nombre=nombre;
        this.edad=edad;
        this.calle=calle;
    }
    saludar(){
        console.log(`Hola` +" "+ this.nombre)
    }
}
llamo a la clase
persona1.saludar();

-VER EL EJEMPLO SOBRE EL CARRITO!!!

TAREA EN CLASE:
crear una clase AUTO que contenga las propieddes de Marca, modelo, km y años. Iremos ingresando autos y respecto a sus km y años, vamos a definir un metodo "promediom km por año" que brinde el kilometraje promedio del auto.
*/

/*Resolucion del problema*/ 
//pimero creo la class Auto con el constructor. despues creo una funcion FUERA DEL CONSTRUCTOR 
class Auto {
    constructor( marca, modelo, km, anos){
        this.marca=marca;
        this.modelo=modelo;
        this.km=km;
        this.anos=anos;
    }
    promedioKilometraje(km, anos, promedio){
        promedio = this.km/(2023 - this.anos);
        console.log("este auto hizo", promedio, "por año")
    }

}

const auto1= new Auto prompt("ingrese la marca, el modelo, los km y el año")
const auto2= new Auto ("mitsubishi", "l300", 225000, 1993)

auto1.promedioKilometraje()
auto2.promedioKilometraje()


































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




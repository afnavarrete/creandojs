//CLASE 1
//Declaracion de Variable "let"
/*
let nombre = "Jeremias"; // con comillas porque es un STRING
let edad = 30; //sin comillas porque es un NUMBER
let alumno = true; //sin comillas porque es un BOOLEANS solo admite true or false
//en la web, click derecho inspeccionar Console
console.log(nombre)
console.log(edad)
console.log(alumno)

//Declaracion de Variable "const"
const CURSO="JS";
console.log(CURSO)

//Concatenaciones van con "+"
//declaracion let
let nombre="Jimena"
let apellido="Alcuaz"
console.log(nombre+" "+apellido)


//Prompt y Alert

let nombre = prompt("Ingrese su nombre por favor")
let apellido = prompt("Ingrese su apellido por favor")

alert(nombre+" "+apellido)





//CLASE 2

//Tarea en clase: crear algoritmo con prompt, compare entradas y segun muestre en consola o alert
let contraseña = prompt("Ingrese su Contraseña Por Favor");
if (contraseña == "AMOR" || contraseña == "amor") {
    alert("La Contraseña Ingresada es Correcta");
} else {
    alert("La Contraseña Ingresada es Incorrecta");
}
//si la contraseña se escribe "AMOR" o "amor" la contraseña es correcta. Sino es incorrecta

//Variables Boolean
let añoNacimiento= prompt("Ingrese su Año de Nacimiento")
if(añoNacimiento=="1990"){
    alert("Su Año de Nacimiento es Correcto");
} else {
    alert("Su Año de Nacimiento es Incorrecto")
}




//CLASE 4 
/*
//FUNCIONES sintaxis basica 
se arma la funcion y despues se llama 
function mostrarMensaje(parametro1, parametro2){
    alert("hola coder")
}

function mostrarMensaje() {
    console.log("Hola Coder");
    
}
//llamando la funcion puedo ejecutarla tanta veces como sea necesario
mostrarMensaje(); 
/*


function sumar (primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero
    *el return sirve para decirle a la funcion que me retorne un valor 
    return resultado;    
}
//ACORDARSE DEL TEMITA DE LOS PARENTESIS!
console.log (sumar (2,5));

/*
//ESTO SALE AL USUARIO POR EL PROMPT
let numero1 = Number(prompt("ingrese un numero"));
let numero2 = Number(prompt("ingrese otro numero"));

function suma(numero1, numero2) {
    return numero1 + numero2
}
//EL RESULTADO NO HASTA QUE META UN ALERT O UN CONSOLE.LOG
let resultado = suma (numero1, numero2)
console.log (resultado);





function saludar (nombre, apellido){
    /*despues de los backticks(alt+96) va el ${
    console.log (`saludos ${nombre} ${apellido}`);
}
saludar ("coder", "house");
saludar ("andres", "pata");
saludar ("omar","manias");
/*de esta manera llamo a la funcion que es saludar y va a cumplir lo que pido adentro de los corchetes*/


//CALCULADORA
/*
function calculadora (primerNumero, segundoNumero, operacion){
    /*analisis de distintos parametros segun la operacion : SWITCH
    switch (operacion){
        /* "en el caso"= case 
        case "+":
            return primerNumero + segundoNumero
            break
        case "-":
            return primerNumero - segundoNumero
            break
        case "*":
            return primerNumero * segundoNumero
            break
        case "/":
            return primerNumero / segundoNumero
            break
 //cuando no pongo que haga ninguna operacion se cumple el default con retorno de cero           
        default:
            return 0;
            break;            
    }
}
console.log (calculadora(20,30,"+"));
console.log (calculadora(20,30,"-"));
console.log (calculadora(20,30,"*"));
console.log (calculadora(20,30,"/"));
console.log (calculadora(20,30," "));
*/

//PRIMER ENTREGA DE MI PROYECTO FINAL 
/*primero planteo la funcion que seria sumar la cantidad de viandas en total que quiere el usuario*/

function sumar(parametro1, parametro2, parametro3) {
    let resultado = parametro1 + parametro2 + parametro3
    return parametro1 + parametro2 + parametro3
}
/*aca, le pido al usuario que escriba cuantas viandas quiere cada dia  */
let parametro1 = Number(prompt("Ingrese el n° de viandas que desea para el día LUNES"))
console.log("LUNES" + "   " + parametro1)
let parametro2 = Number(prompt("Ingrese el n° de viandas que desea para el día MIÉRCOLES"))
console.log("MIÉRCOLES" + "   " + parametro2)
let parametro3 = Number(prompt("Ingrese el n° de viandas que desea para el día VIERNES"))
console.log("VIERNES" + "  " + parametro3)
let resultado = parametro1 + parametro2 + parametro3
/*aca agrego un alert para que el usuario sepa cuantas unidad de viandas encargo. y realizo un console para poder verlo "del otro lado"*/
alert("El TOTAL de viandas encargadas es de" + " " + resultado)
console.log("El TOTAL de viandas encargadas es de" + " " + resultado);


let metodoPago = Number(prompt(`Cómo desea Abonar = 
    1: efectivo
    2: transferencia
    `));

if (metodoPago == "1" ) {
    alert("Tenes un 5% de DESCUENTO");
    console.log ("del total -5%")
} else {
    if (metodoPago== "2") {
        alert("Tenes un 7% de DESCUENTO");
        console.log ("del total -7%")
    }
    else {
        alert ("Escribinos al Whatsapp")
        console.log("abona con otro medio de pago")
    }
} 







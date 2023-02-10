//CLASE 1
//PRIMER TAREA EN CLASE:
/*usuario debe ingresar su edad 
edadJubilatoria=65
tenemos que calcular en que año se jubila y mostrarlo en alert.eL año actual es 2023 */

// EJERCICIO:
//primero planteo el prompt, mi constante es la edad jubilatoria y realizo la primer operacion edad jubilatoria menos la edad del usuario. 
let edad = parseInt (prompt(`Por favor, Ingrese su Edad`))
const edadJubilatoria = 65
const calculo = edadJubilatoria - edad
//planteo el año actual y realizo la operacion de mi constante "calculo" + el "anoActual". 
const anoActual = 2023
const anoJubilacion = calculo + anoActual
//por ultimo mi resultadoTotal 
const resultadoTotal = (`Usted se Jubilara en `+" "+anoJubilacion)
alert(resultadoTotal)
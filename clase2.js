//CLASE 2
//SEGUNDA TAREA EN CLASE:
/*dependiendo de la edad que ingrese el usuario la respuesta en un alert sera
niño = 0 a 10 años
adolescente = 11 a 18 años
adulto = 19 a 80
anciano = 81 a 100
*/

const ingreseEdad = parseInt (prompt(`Ingrese su edad`))
//variable "nino" (ingreseEdad es MAYOR IGUAL a cero Y ingreseEdad es MENOR IGUAL a 10. asi puedo establecer el limite entre 0 a 10 años )
let nino = (ingreseEdad >=0 && ingreseEdad <=10)
let adolescente= (ingreseEdad >=11 && ingreseEdad <=18)
let adulto= (ingreseEdad >=19 && ingreseEdad <=80)
let anciano = (ingreseEdad >=81 && ingreseEdad <=100)

if (nino) {
    alert(`es un niño`)
}
else if (adolescente ){
    alert (`es un adolescente`)
}
else if (adulto){
    alert (`es un adulto`)
}
else if(anciano) {
    alert (`es un anciano`)
}
else{
    alert (`ingrese la edad correctamente`)
}

































/*Tarea en clase: crear algoritmo con prompt, compare entradas y segun muestre en consola o alert
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


*/

//ESTRUCTURA "FOR"
//EJEMPLO CON I++

/*for (let i=0; i<=5;i++){
    alert(`numero` + i)
}
alert(`se corta el ciclo`)*/
/*--------------------------------------------------*/
//EJEMPLO CON I--
/*for (let i=10; i>5;i--){
    alert(`numero`+i)
}
alert(`se corta el ciclo`)
*/
/*--------------------------------------------------*/
//EJEMPLO EN TABLA DE MULTIPLICAR-----
// creamos una variable que se llama numeroIngresado , le asignamos un prompt para que el usuario ingrese numero. 
/*let numeroIngresado= parseInt(prompt(`ingrese numero`))
//Creamos un ciclo FOR donde i es igual a 1 (va a comenzar la multiplicacion en 1 ); hasta que la multiplicacion llegue a "por 10". 
for(let i=1; i<=10;i++){
    let resultado = numeroIngresado * i;
//creamos un alert para que nos imprima en pantalla el numero ingresado por i (que va a ser 1,2,3,4,5,6,7,8,9,10 y corta)
    alert(numeroIngresado +`X` + i + `=`+ resultado)
}
*/
/*----------------------------------------------*/
//EJEMPLO PARA DAR TURNOS-------
//en este ejemplo, se le va a solicitar el nombre al usuario CADA VEZ que se ejecute la condicion de FOR dentro de los corchetes. es decir: ingresamos un nombre nos devuelve el turno nro 1, otra vez nos pide el nombre y el turno va a ser nro 2, asi sucesivamente hasta que llegue a 20
/*for (let i=1 ; i<=20; i++){
    let nombreIngresado= prompt(`ingrese su nombre`);
//cuando ponemos como condicion IF quiere decir que cuando el nombre ingresado sea Leandro, el ciclo se va a cortar (por el "break") y no me va a mostrar un nro de turno a leandro, sino que me va a saltar "ha ingresado leandro" y el alert de abajo no se va a ejecutar
//METEMOS IF
    if (nombreIngresado ===`Leandro`){
        alert(`ha ingresado Leandro`)
//ademas del break, tenemos el "continue" que sirve para que bajo cierta condicion se saltee la repeticion y continue con la proxima
// METEMOS CONTINUE
/* continue*/
/*cuando usamos el break, no vamos a saber si se ejecuto 20 veces como le pedimos en el for.         
//METEMOS BREAK
        break
    }   
    alert(`su turno es el nro:`+ i)
/*para poder darnos cuenta que cantidad de turnos se han dado creamos un IF que sea igual igual a 20 para que nos devuelva que se usaron todos los turnos    
//METEMOS IF
    if (i==20){
        alert(`se han terminado los 20 turnos`)
    }
}*/

/*--------------------------------------------------*/
//ESTRUCTURA "WHILE"
/*let suma= parseInt `5`
while (suma<10){
//entra al while porque suma es 5 y MIENTRAS sea menor a 10 se ejecute, una vez que sumala sea 11 se va a cortar porque es FALSO while de menor a 10
    alert(`suma es menor que 10`);
//para que el bucle tenga un fin y no se cree un infinito debemos pornerle un stop
    suma= suma + 2
//esto va a hacer que entre al bucle con 5, se cumple la condicion (que sea menor a 10) y ahora suma va a ser 7 (la primer suma +2), sigue cumpliendo la condicion y va a ser 9. 9 +2 es igual a 11 entonces ahi se corta el while porque la condicion pasa a ser FALSA     
}*/

/*-----------------------------------------------*/
//ESTRUCTURA "DO...WHILE"
//suma es 15, entra al do while. 
/*let suma=15
//primero le decimos lo que tiene que hacer
do{
    alert(`ingreso al do while, y suma es:`+ suma)
//ahora es 15 + 2 = 17     
    suma=suma+2
}
//y despues le decimos hasta cuando hacerlo
while (suma<10)*/
//como suma ahora es 17 se corta el bucle porque en el while nosotros le pedimos que sea MENOR A 10
//siempre fue falso el do... while pero nos enteramos a lo ultimos porque primero ejecuta el do y despues consulta al while.

/*-------------------------------*/
//EJERCICIO EN CLASE
//son profesores y necesitan hacer un programa para ingresar 10 calificacioes y que calcule el promedio de los estudiantes, las notas pueden ser decimales. Solucion que dio el profe:
//quiere decir que la suma comienza en 0
let suma=0;
//creamos variable por la cantidad de alumnos, en este caso son 10
let cantidadDeAlumnos=10
//creamos un FOR donde i es igual a 1 (es donde empieza, la primer nota ingresada. en el HASTA ponemos la cantidad de alumnos que van a ingresar la nota y en la actualizacion que va a ir aumentando de a 1 hasta llegar a 10)
for (let i=1; i<= cantidadDeAlumnos; i++ ){
    let calificacion = parseFloat(prompt(`Ingrese la calificacion`))
//aca se va a ir sumando la calificacion con la variable suma    
    suma = suma + calificacion
}
//aca sacamos el promedio de la suma dividido la cantidad de alumnos
let promedio =suma/ cantidadDeAlumnos
alert(`el promedio es` + promedio)


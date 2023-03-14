//ARRAYS:
//ARRAYS:es un tipo de dato almacena valores en forma de lista.
//INDICES: es la posicion que un determinado elemento/valor tiene dentro de mi array
//usar lo del array para que las personas comiencen a agregar menu al array

/*


let frutas = ["Coder", 25, true];

console.log(frutas);*/
/*en consola se ve: 0:"coder" 1:25 2:true */

//ACCESO DEL VALOR DE UN ARRAY
/*console.log(frutas[3]);*/

//si quiero reemplazar x  otro elemento
/*frutas [3]= "kiwi"*/

//agregar elementos al array
/*frutas [4]= "frutilla";
console.log(frutas);*/
//EJEMPLO PARA UN CARRITO 
/*let carrito=
console.log(carrito);
for (let i = 0; <= 3; i ++){
    console.log(frutas[i]);
}*/

/*METODOS
--LENGH cuenta 
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
console.log(frutas.length);
me devuelve 4*/

/* PUSH agregue al final
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
frutas.push("medialuna");
console.log (frutas);*/

/*UNSHIFT poner en primer (cero) lugar
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
frutas.unshift("pizza");
console.log(frutas);*/

/* POP = ELIMINAR si quiero eliminar el ultimo de mi array
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
frutas.pop();
console.log(frutas);*/

/* SHIFT si quiero eliminar el primer elemento shift
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
frutas.shift();
console.log(frutas);*/

/*
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
frutas.splice(1,2);
console.log (frutas);
me devuelve sandia y anana*/

/*separar con elemento cada fruta
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
console.log(frutas.join("-"));*/

/*combinacion de 2 arrays
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
let comidas=["pizza","hamburguesa","papas fritas"];
let alimentos= frutas.concat(comidas);
console.log(alimentos);*/

/*no modificar el array "madre" SLICE corto la sandia y el anana, te devuelve una copia desde donde parte y hasta donde llega sin incluirlo el anana seria el numero 3 acordarse que toma a sandia como numero 0
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
let alimentos = frutas.slice(1,3)

console.log(alimentos);*/
/*index of ME SALE -1 PORQUE NO SE ENCUENTRA EN LA LISTA
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
console.log(frutas.indexOf("hamburguesa"));*/
/*elemento booleano en array verdadero si esta o falso si no esta 
let frutas= ["sandia", "tomate" ,"limon" ,"anana"];
console.log(frutas.includes("sandia"));*/

/*reverse me cambia los indices de los elementos
frutas.reverse ();*/












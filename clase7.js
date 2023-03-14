//CLASE 7 FUNCIONES DE ORDEN SUPERIOR
//ABSTRACCIONES resumir un grupo complejo de instrucciones bajo una palabra clave(function) que sugiere cual es el problema a resolver por la misma(ver metodos nativos de JS)
//las funciones de orden superior es aquella que bien retorna una funcion, o recibe una funcion por parametro. este tipo de funciones nos permiten abstraernos sobre aaciones y no solo valores
/*
const pendientes =["asistencias","desafios","preentregas0","entrega final"];
/* METODOS DE BUSQUEDA Y TRANSFORMACION
pendientes.forEach((p,indice)=>{
    console.log(`${indice}: ${p}`)
})
console.log(pendientes);

//ejemplo para sumar total de la compra
const carrito=[
    {nombre: "monitor", precio:1000},
    {nombre:"tv" , precio:1500},
    {nombre:"tablet" , precio:300},
    {nombre:"teclado" , precio:200},
];
let total= carrito.reduce((accum, p)=>{
    return accum +p.precio;

},0);
console.log(total);



FOR EACH: te devuelve x consola todos los numeros, itera en el array
const numeros = [1,2,3,4,5,6]
numeros.forEach((num)=>{
    console.log(num)
})
FIND: busqueda de elemento mediante funcion comparativa.
const cursos=[
    {nombre:`JavaScript`, precio:15000},
    {nombre: `ReactJS`, precio:22000},
]

const resultado= cursos.find((el)=> el.nombre ==="ReactJS")
const resultado2=cursos.find((el)=> el.nombre==="DW")

console.log (resultado)
console.log(resultado2)


*/

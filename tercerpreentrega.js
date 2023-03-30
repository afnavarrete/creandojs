//PRIMER ENTREGA DE MI PROYECTO FINAL
/*function bienvenida() {
    alert("Bienvenidos a Copal")
}

bienvenida()

function sumar(parametro1, parametro2, parametro3) {
    let sumaTotal = parametro1 + parametro2 + parametro3
    return sumaTotal
}
const precioVianda = 650
function cantidadViandas() {
    let parametro1 = Number(prompt("Ingrese el n° de viandas que desea para el día LUNES"))
    let parametro2 = Number(prompt("Ingrese el n° de viandas que desea para el día MIÉRCOLES"))
    let parametro3 = Number(prompt("Ingrese el n° de viandas que desea para el día VIERNES"))
    alert("El TOTAL de viandas encargadas es de" + " " + sumar(parametro1, parametro2, parametro3))
    alert("El total a abonar es de $" + " " + precioVianda * sumar(parametro1, parametro2, parametro3))
}
cantidadViandas()

function metodoDePago() {
    let opcionesPago = parseInt(prompt(`Seleccione una opcion de pago 
        1:Efectivo
        2:Transferencia
        3:Debito
        4:Credito`));
    if (opcionesPago === 1) {
        alert(`Abonará en efectivo`)
    } else if (opcionesPago === 2) {
        alert("Nuestro alias es: .... RECORDA ENVIAR TU COMPROBANTE POR WHATSAPP")

    } else if (opcionesPago === 3) {
        alert(`Acercate a nuestro local`)

    } else if (opcionesPago === 4) {
        alert(`Acercate a nuestro local`)

    } else {
        alert(`ha ingresado una opcion incorrecta`)

    }
}
metodoDePago()

//SEGUNDA PREENTREGA FINAL
//objeto con metodo personalizado

function ProductoCopal(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    this.sumaEnvio = function () {
        console.log(this.precio = this.precio += 150);

    }
    this.vender = function () {
        console.log(this.vendido)
    }
}

//array con producto
const ProductosCopaleros=[]
const Producto1=new ProductoCopal ("budines", 600);
const Producto2=new ProductoCopal ("galletones", 400);
const Producto3=new ProductoCopal ("pan lactal integral", 500);
const Producto4=new ProductoCopal ("milanesas de soja simple", 600);
const Producto5=new ProductoCopal ("hamburguesa de lenteja" , 250);
const Producto6=new ProductoCopal ("hamburguesa de mijo", 250);

//for each
const Productos=[Producto1,Producto2,Producto3,Producto4,Producto5, Producto6]
Productos.forEach ((alimentos) => {
    console.log(Productos)
    console.log(alimentos.nombre)

})

//find y filter
const busquedaDeProductos=[
    {nombre:"budines", precio:600},
    {nombre:"galletones",precio:400},
    {nombre:"pan lactal integral", precio:500},
    {nombre:"milanesas de soja simple",precio: 600},
    {nombre:"hamburguesa de mijo", precio:250},
    {nombre:"hamburguesa de lenteja", precio:250}

]
const resultado=busquedaDeProductos.find((el)=>el.nombre ==="galletones")
const resultado2=busquedaDeProductos.find((el)=> el.nombre ==="hamburguesa de brocoli")
console.log(resultado)
console.log(resultado2)
//filter
const resultado1=busquedaDeProductos.filter((el)=>el.nombre.includes("hamburguesa"))
const resultado3=busquedaDeProductos.filter((el)=>el.precio>250)
console.log(resultado1)
console.log(resultado3)

//mostrando productos y usando for...in
Producto1.sumaEnvio();
Producto1.vender();
for (const propiedad in Producto5){
    console.log(Producto5[propiedad])
}
*/

//TERCERA PREENTREGA

//Manipulacion de DOM EN INDEX + Deteccion de eventos de usuario + Implementacion de JSON:
/*Planteo en mi site, para que el usuario elija la cantidad de viandas a comprar y añada al carrito, luego en la pagina carrito le dice que compro y cuanto es */

//Manipulacion de localStorage + Modificacion del DOM en: carrito.html

let boton1 = document.getElementById("btn1");
boton1.addEventListener("click", function () {
    alert("Agregaste a tu Carrito Un (1) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Un (1) menú del día', precio: "$" + 650 };
    localStorage.setItem('menu1', JSON.stringify(obj));
});

let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Dos (2) menú del día");
    let obj = { nombre: 'El Total de tu Compra es:Dos (2) menú del día', precio: "$" +  1300 };
    localStorage.setItem('menu2', JSON.stringify(obj));
});

let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: tres (3) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Tres (3) menú del día', precio: "$" +  1950 };
    localStorage.setItem('menu3', JSON.stringify(obj));
});

let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Cuatro (4) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Cuatro (4) menú del día', precio: "$" + 2600 };
    localStorage.setItem('menu4', JSON.stringify(obj));
});

let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Semana Completa de Viandas ");
    let obj = { nombre: "El Total de tu Compra es: Semana Completa de Viandas", precio: "$" + 3000 };
    localStorage.setItem('menu5', JSON.stringify(obj));
});

localStorage.clear();
























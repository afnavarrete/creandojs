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























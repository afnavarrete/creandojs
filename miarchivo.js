//PRIMER ENTREGA DE MI PROYECTO FINAL
//primero planteo la funcion que seria sumar la cantidad de viandas en total que quiere el usuario

function sumar(parametro1, parametro2, parametro3) {
//CORRECIONES DE LA PRIMER ENTREGA
    let resultado = parametro1 + parametro2 + parametro3
    return resultado //en el return solo poner "resultado" ya que los parametros estan descriptos en el "let"
}



//aca, le pido al usuario que escriba cuantas viandas quiere cada dia

let parametro1 = Number(prompt("Ingrese el n° de viandas que desea para el día LUNES"))
console.log("LUNES" + "   " + parametro1)
let parametro2 = Number(prompt("Ingrese el n° de viandas que desea para el día MIÉRCOLES"))
console.log("MIÉRCOLES" + "   " + parametro2)
let parametro3 = Number(prompt("Ingrese el n° de viandas que desea para el día VIERNES"))
console.log("VIERNES" + "  " + parametro3)
let resultado = parametro1 + parametro2 + parametro3
//aca agrego un alert para que el usuario sepa cuantas unidad de viandas encargo. y realizo un console para poder verlo "del otro lado"
alert("El TOTAL de viandas encargadas es de" + " " + resultado)




let metodoPago = Number(prompt(`Cómo desea Abonar =
    1: efectivo
    2: transferencia
    `));

if (metodoPago == "1" ) {
    alert( sumar(parametro1,) * -0.5);
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





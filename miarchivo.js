//PRIMER ENTREGA DE MI PROYECTO FINAL
// voy a solicitar por prompt que el usuario ingrese la cantidad de viandas que quiere comprar, una vez solicitado se le va a preguntar en que metodo de pago va a abonar-

//planteo la funcion de suma de viandas y los parametros son los tres dias que van a encargar
function sumar(parametro1, parametro2, parametro3) {
    let sumaTotal = parametro1 + parametro2 + parametro3
    return sumaTotal
}
//planteo la constante del precio x vianda
const precioVianda = 600
//aca, le pido al usuario que escriba cuantas viandas quiere cada dia y realizo la suma
function datosDelUsuario() {
    let parametro1 = Number(prompt("Ingrese el n° de viandas que desea para el día LUNES"))
    let parametro2 = Number(prompt("Ingrese el n° de viandas que desea para el día MIÉRCOLES"))
    let parametro3 = Number(prompt("Ingrese el n° de viandas que desea para el día VIERNES"))
    alert("El TOTAL de viandas encargadas es de" + " " + sumar(parametro1, parametro2, parametro3))
    //aca realizo la multiplicacion    
    alert("El total a abonar es de $" + " " + precioVianda * sumar(parametro1, parametro2, parametro3))
}
//llamo a la funcion
datosDelUsuario()
metodoDePago()

//ciclo para metodo de pago
function metodoDePago() {
    let costoFinal= 0;
    do{
        let opcionesPago = parseInt (prompt(`Seleccione una opcion de pago 
        1:Efectivo\n
        2:Transferencia\n
        3:Debito\n
        4:Credito\n`));
    if (opcionesPago ===1){
        alert (`Abonará en efectivo`)
    }else if (opcionesPago ===2){
        alert(`Nuestro alias es: .... RECORDA ENVIAR TU COMPROBANTE POR WHATSAPP`)
    }else if (opcionesPago ===3){
        alert(`Acercate a nuestro local`)
    }else if (opcionesPago ===4){
        alert (`Acercate a nuestro local`)
    }else{
        alert(`ha ingresado una opcion incorrecta`)
    }
    
    let seleccionAyuda= parseInt( prompt(`Necesita ayuda? 1:Si , 2: No`))
    } 
    while(seleccionAyuda ===1){
        
        alert(`comunicate con nosotros al 3493...`)
    }
    
} 






/*let metodoDePago = Number(prompt
(`como desea abonar?
1: efectivo
2: tarjeta
3: transferencia
4: `))
if( metodoDePago === 1){
    alert(`Usted selecciono el metodo en EFECTIVO`)
    
}*/























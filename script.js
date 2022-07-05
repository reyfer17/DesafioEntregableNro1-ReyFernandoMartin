let flag = 1
let acumulado = 0
let producto = 1
let quiebreDoWhile = 0
const pochoclos = 1000
const nachos = 900
const chocolate = 500
const gaseosa = 300
const agua = 200
const lista = "¿Qué producto desea agregar?: \n 1-Pochoclos ($1000) \n 2-Nachos ($900) \n 3-Chocolate ($500) \n 4-Gaseosa ($300) \n 5-Agua ($200) \n 6-nada más"

//recibe un numero de producto ingresado por el usuario
function agregarProducto(){
   do { producto = parseInt(prompt(lista))
        avisoIngreso (producto)
    }   while (quiebreDoWhile === 0)
}
//acumula los valores de los productos en un variable
function acumular(valor) {
    acumulado += valor
}
//valida que el numero ingresado por el usuario sea correcto
function avisoIngreso(aValidar){
    if (isNaN(aValidar) || (aValidar<1 || aValidar>6)){
        alert("ERROR: Ingrese un nro. entre 1 y 6")
        quiebreDoWhile = 0
    }
    else{ quiebreDoWhile = 1}
}
//da una alerta con el producto agregado
function confirmacion(producto){
    alert("Ha agregado " + producto)
}

alert ("Bienvenido a La Tienda")

do { let continuar = prompt("¿Desea agregar algún producto al carrito de compras? \n (Ingrese S/N)").toLowerCase()
    if (continuar==="s"){   agregarProducto()
                            switch (producto){
                                case 1: 
                                    acumular (pochoclos)
                                    confirmacion ("pochoclos")
                                    break
                                case 2:
                                    acumular (nachos)
                                    confirmacion ("nachos")
                                    break
                                case 3:
                                    acumular (chocolate)
                                    confirmacion ("chocolate")
                                    break
                                case 4:
                                    acumular (gaseosa)
                                    confirmacion ("gaseosa")
                                    break
                                case 5:
                                    acumular (agua)
                                    confirmacion ("agua")
                                    break
                                case 6:
                                    break    
                            }
                            flag=1}
    else if (continuar==="n"){   alert("El total de su compra es: $" + acumulado + "\n ¡Gracias por comprar en La Tienda!") 
                                 flag=0}
    else {  alert("ERROR: aprete enter, luego ingrese S para seguir comprando o N para finalizar su compra")
            flag=1}
} while (flag===1)  

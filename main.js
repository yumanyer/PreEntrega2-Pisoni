let identificar = true


let intentos = 1

do {
let usuario = prompt("Ingresar usuario (MAXIMO 5 INTENTOS)").toLowerCase();

if (usuario === null) {
    break;
}

if (usuario === "coderhouse"  && intentos <= 5) {
    let contraseña = prompt("Ingresa la contraseña:");
    
    if ((usuario === "coderhouse" && contraseña === "javascript")) {
    alert("Bienvenido señor " + usuario + "!!!");
    break;
    } else {
    alert("Contraseña incorrecta. Intentos restantes: " + (5 - intentos));
    intentos++;
    }
} else {
    alert("No estás autorizado. Solo los admins pueden entrar.");
    intentos++;
    if (intentos > 5) {
    alert("Te dije que solo los admins pueden entrar.");
    console.error("El usuario no está reconocido.");
    break; 
    }
}
} while (identificar);



const Frozz = function(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

let producto1 = new Frozz(1, "tramontana", 1500);
let producto2 = new Frozz(2, "chocolate amargo", 1500);
let producto3 = new Frozz(3, "chocolate marroc", 2000);
let producto4 = new Frozz(4, "crema oreo", 600);
let producto5 = new Frozz(5, "menta granizada", 400);
let producto6 = new Frozz(6, "frutilla", 500);
let producto7 = new Frozz(7, "dulce de leche", 700);
let producto8 = new Frozz(8, "dulce oreo", 3000);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

function filtrarObjetos() {
    let usuario = prompt("¿Qué estás buscando?").toLowerCase().trim();
    let resultado = lista.filter((x) => x.nombre.toLowerCase().includes(usuario));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No se encontró el producto " + usuario);
        let retruco= confirm("Queres agregar "+ usuario);

        if (retruco==true ){
            agregarHelado()
        }
    }
}

function agregarHelado(){

    let id =  parseInt(prompt("Ingresar el stock del producto"))
    let nombre =    prompt("Ingresar el  nombre del producto")
    let precio =   parseFloat(prompt("Ingresar el precio del producto"))

    if (isNaN(precio) || isNaN (id) || nombre=== ""|| nombre == null){
    alert ("INGRESE DATOS VALIDOS")
    return
    }   

    let helado = new Frozz (id,nombre,precio)

    lista.push (helado)
    console.table(lista)

}


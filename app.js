var nombre = "cani"
var edad = 2
var gata = "gata"

var gata = "negra"

console.log(nombre);

edad + 15

console.log(edad + 15);

var Perro = {
    nombre: "Cani",
    edad: 2,
    color: "white",
    esPeligroso: false,
};

var gato = {
    nombre: "negra",
    edad: 9,
    color: "negro",
    esPeligroso: false,
}

/* array */

var misMascotas = [
    "negra",
    "Cani",
    "siames",
    "blanca",
]

var numerosImpares = [
    1,
    3,
    5,
    7,
    9,
    11
]

/* console.log(misMascotas[2]); */

var x = 10

x = x + 5

x += 5
/* 
x = x + 5 es lo mismo que x + = 5 */

/* console.log(x); */

var saludo = "buenos"

var tiempo = "dias"

saludoCompleto = saludo + " " + tiempo

console.log(saludoCompleto);

var macho = true

/* if (edad < 20 && macho) {
    console.log("La edad es menor a 20");
} else {
    console.log("la edad es mayor a 20");
} */

var persona = {
    nombre: "Maxi",
    Apellido: "S",
    Mascota: ["negra, Cani"]
}

console.table(persona);

var comapañeros = [
    "Lucre",
    "Alicia",
    "Javier",
    "camila",
]

var edad = [
    10,
    15,
    17,
    20,
]

var compa = {
    nombre: "Lucre",
    edad: 10,
}

console.table(compa
)


function myFunction(lista) {
    console.log(lista);
}

myFunction(misMascotas)

function edadMayor(edades) {
    if (edades >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("es menor de edad");
    }
}

edadMayor(edad)
//Zona de declaración de variables: primero declaro las variables globales que voy a utilizar.
var data = []; //declaro variable data como array vacío para luego insertar la info del json.
var selected = document.querySelector("#categoryselector"); //declaro variable selected para traer el elemento select del html al javascript
const inputSearch = document.querySelector("#searchInput"); //hago lo mismo, traigo el id del input del html para poder trabajarlo a traves de document.queryselector
//(puede ser const porque este valor no va a cambiar en todo el js)
var selector = "" //declaro var como string vacío para luego insertar el valor del target del select
var input = "" //declaro var como string vacío para insertar el valor del target para que funcione el input

//Zona de funciones: el segundo paso es establecer las funciones para darles una accion a realizar dentro de las var globales o en el html
async function getData() { //creo la función getData en forma asincronica(no sé que siginifica) con "async" adelante para poder utilizar "await", esto se hace para traer los datos del json
    await fetch("../json/AmazingEvents.json") //utilizo await para que el codigo espere a recibir la info del json y lo que debe hacer son sus datos establecido en las promesas. Y fetch trae la info del json al js
        .then(response => response.json()) //.then inicia una promesa. Response guarda la respuesta que recibió del fetch (datos json) y el metodo json() interpreta esa respuesta
        .then(json => data.push(...json.eventos)) //por el metodo json() de arriba se genera una nueva promesa. Acá envio la respuesta recibida a var data = [] mediante el metodo push
    //la info del json se inserta en el array vacio de data, pero solo la propiedad "eventos" porque asi lo establecí
    displayCard(data) //llamo a la funcion que muestra las tarjetas en el html y paso como parametro data con la info de las tarjetas.
}

function displayCard(datum) { //creo displayCard y le paso de parametro "datum" (pero no sé para qué ni que hace)

    var toDisplayCard = [] //creo un array vacio 
    if (datum) {
        toDisplayCard.push(...datum) //establezco una condicion: si está ejecutando datum, datum va a estar dentro del array toDisplayCard
    } else {
        toDisplayCard.push(...data)
    } //sino es así, data (todas las tarjetas) van a estar dentro del array

    var html = "" //declaro var local html como string vacio

    toDisplayCard.map(card => { //al array le establezco .map para que pase por todas las tarjetas y que a su vez cuando recorra haga lo que está en el parentesis
        //el parametro card representa cada elemento del array y a esos elementos le paso la variable html para que muestre las tarjetas en cada elemento
        html +=  //a mi var html local vacía le agrego el siguiente html
            ` 
        <div class="events">
        <section class="cards">
            <img src="../Images/${card.image}" alt="avengers" class="photos">
            <div class="divpes">
            <h3>${card.name}</h3>
            <p><span>${card.date}</span></p>
            <p>${card.description}</p>
            <a href="../detalle.html?id=${card.id}" class="category">${card.category}👆🏼</a>
            </div>
        </section>
        </div>
    `
        //siempre se inserta texto html con comillas cruzadas en js, en este html está el armado de la tarjeta como quiero que se muestre
    })
    document.querySelector(".events").innerHTML = html //imprimo el texto html de arriba en el html original
}

getData() //llamo a la funcion getData para que se ejecute despues de leer la funcion displayCard

function search(event) { //creo funcion search para que funcione el input, le paso de parametro event
    var val = event.target.value //val contiene el valor del input (target) (lo que escriba dentro del input)
    input = val //a la var globlal input vacía le asigno el valor de val (valor del input)
    var searching; //creo una variable local "searching" sin valor alguno
    if (selector !== "") { //CONDICION: selector(valor del select) es diferente a un string vacio (es decir no hay nada escrito en el input) [si selecciono algo en el select y escribo en el input] ↆ
        searching = data.filter(card => card.name.toLowerCase().includes(val.toLowerCase()) && card.category === selector) //searching va a ser igual al valor ingresado en el input (nombre de la tarjeta en minuscula) y además la categoria seleccionada en el select va a ser igual al valor del select [si input y select coinciden lo muestra]
    } else (searching = data.filter(card => card.name.toLowerCase().includes(val.toLowerCase()))) //sino (si el input esta vacío), searching va a tener solo el valor del input [si no coinciden, no muestra nada]
    console.log(searching) //un console.log para ver el valor de searching
    displayCard(searching) //llamo a la funcion displayCard y le paso de parametro searching para que entre el valor de los filtros cruzados 
}

function selecting(event) { //creo la funcion "selecting" para que funcione el select, le paso de parametro event
    var val = event.target.value //val contiene el valor del select (la opcion que seleccione)
    var select; //creo la variable select sin ningun valor
    selector = val //a la var global selector le asigno el valor de val (valor del select)
    console.log(selector)
    if (input !== "") { //1° CONDICION: si el input es diferente a un string vacio ↆ  
        if (selector == "no seleccionada") {// y si el select es igual a "no seleccionada" (primera opcion: todas las tarjetas)ↆ 
            select = data.filter(card => card.name.toLowerCase().includes(input.toLowerCase())) //solo se va a usar el valor del input
        } else { select = data.filter(card => card.name.toLowerCase().includes(input.toLowerCase()) && card.category === val) } //sino, (si no está en "no seleccionada") se va a usar el valor del input y el valor del select, el input tiene datos y selector tiene una opción seleccionada
    } else { //2° CONDICION: 
        if (selector == "no seleccionada") { //si el select es igual a la primera opcion ↆ 
            select = data //select mostraria todas las tarjetas
        } else { select = data.filter(card => card.category === val) } //sino (si es cualquier otra opcion) muestra el valor del select (categorías), el input no tiene nada

        displayCard(select) //llamo a la funcion displayCard y le paso de parametro select para que tome los datos de esta variable en la funcion de tarjetas
    } //cierre de segundo condicional

} //cierre de funcion selecting

//ESCUCHADORES DE EVENTOS
inputSearch.addEventListener("keyup", search) //del elemento obtenido del html, le agrego un escuchador de eventos para que cuando escriba en el input ya priete una tecla ya busque lo que quiero
selected.addEventListener("change", selecting) //a selected le paso un escuchador de eventos "change" para que cuando apriete una tecla o haga click con el mouse ejecute lo que esta dentro de la funcion selecting


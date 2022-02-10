var eventosPasados = []
var eventosBuscados = []
var fechaDeHoy = ""
var textoBuscado = ""
var checkboxSeleccionado = []
var buscarParametro = ""



async function dataTraveler() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(respuestas => respuestas.json())
        .then(json => {
            fechaDeHoy = json.fechaActual
            eventosPasados.push(...json.eventos.filter(x => x.date < fechaDeHoy))
        })
    console.log(eventosPasados);
    checky(eventosPasados)
    cartas(eventosPasados)

    console.log(location);
}
dataTraveler()


function checky() {


    var unico = eventosPasados.map(pasados => pasados.category)
    const datosEnArray = new Set(unico)
    var categorias = [...datosEnArray]

    var imprimirCheckbox = ""
    categorias.forEach(category => {

        imprimirCheckbox += `<label for=${category} class="micheckbox">${category}</label>
        <input type="checkbox" id=${category} name=${category} class="checkboxCat" value="${category}"> `
    })
    document.querySelector('#checkboxCatergorias').innerHTML = imprimirCheckbox

    var checkbox = document.querySelectorAll(".checkboxCat")

    checkbox.forEach(check => check.addEventListener("click", function (event) {
        var checked = event.target.checked
        console.log(checked);


        if (checked == true) {
            checkboxSeleccionado.push(event.target.value)

            dataCheck(checkboxSeleccionado)
            console.log(checkboxSeleccionado);
        } else {
            checkboxSeleccionado = checkboxSeleccionado.filter(checkvalue => checkvalue !== event.target.value)

            dataCheck(checkboxSeleccionado)
            console.log(checkboxSeleccionado);

        }

    }))

}


checky()

/* function datosFecha() {
    fetch("../AmazingEvents.json")
        .then(respuestas => respuestas.json())
        .then(json => fechaDeHoy.push(json.fechaActual))


}

datosFecha()

var datos = []

function anunimus() {


    console.log(eventos);
    console.log(fechaDeHoy);

    var datos = eventos.filter(x => x.date > fechaDeHoy)
    console.log(datos);

    cartas(datos)
}

anunimus()

console.log(datos);
 */

var inputSearch = document.getElementById("InputText")

inputSearch.addEventListener("change", search)



function search(event) {
    console.log(event);
    var val = event.target.value
    console.log(val);

    console.log(eventosPasados);

    var eventosBuscados = eventosPasados.filter(data => data.name.toLowerCase().includes(val.toLowerCase()))
    console.log(eventosBuscados);
    cartas(eventosBuscados)
}

search()




console.log(filtroCategorias);

function cartas(data) {
    var aMostrar = []

    console.log(eventosBuscados);
    console.log(eventosPasados);


    if (data !== undefined) {
        aMostrar.push(...data)
    } else { aMostrar.push(...eventosPasados) }

    console.log(aMostrar);


    var html = ""

    aMostrar.map(event => [

        html += `
        <section class="proximos" id=${event.position} style="background-image: url(${event.image});">
        <h2><a href="./detalle.html?id=${event.id}">
        ${event.name}</a></h2>
       
        <p class="">
            <span class="negrita">
            ${event.date}  ${event.place}
            </span>
        </p>
        <p class="">
            <span class="negrita">
            ${event.description}
            </span>
        </p>
        <p class="">
            <span class="verde">
                Precio: ${event.price}
            </span>
        </p>
    </section>
        `
    ]
    )

    document.getElementById("calle").innerHTML = html

}

cartas()


function dataCheck(checkboxSeleccionado) {
    var eventosEnArray = [...eventosPasados]
    var filtroCategorias = []
    console.log(checkboxSeleccionado);
    console.log(eventosEnArray);

    if (checkboxSeleccionado.length > 0) {
        checkboxSeleccionado.forEach(category => {
            let filtroPrevio = eventosEnArray.filter(evento => {
                return evento.category == category;
            }

            )
            filtroCategorias.push(...filtroPrevio)
            console.log(filtroCategorias);
            cartas(filtroCategorias)
        }

        )


    } else {
        filtroCategorias = eventosEnArray
        cartas(filtroCategorias)
        console.log(filtroCategorias);

    }
}

dataCheck()
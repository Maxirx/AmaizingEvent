var eventosProximos = []
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
            eventosProximos.push(...json.eventos.filter(x => x.date > fechaDeHoy))
        })
    console.log(eventosProximos);
    cartas()

    console.log(location);


    var unico = eventosProximos.map(proximos => proximos.category)
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




        if (checked == true) {
            checkboxSeleccionado.push(event.target.value)

            dataCheck(checkboxSeleccionado)
            console.log(checkboxSeleccionado);
        } else {
            checkboxSeleccionado = checkboxSeleccionado.filter(checked => checked !== event.target.value)

            dataCheck(checkboxSeleccionado)
            console.log(checkboxSeleccionado);

        }

    }))
}

dataTraveler()

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

inputSearch.addEventListener("keyup", search)



function search(event) {
    console.log(event);
    var val = event.target.value
    console.log(val);

    console.log(eventosProximos);

    var eventosBuscados = eventosProximos.filter(data => data.name.toLowerCase().includes(val.toLowerCase()))
    console.log(eventosBuscados);
    cartas(eventosBuscados)
}

search()





function cartas(data) {
    var aMostrar = []


    console.log(eventosBuscados);
    console.log(eventosProximos);


    if (data) {
        aMostrar.push(...data)
    } else { aMostrar.push(...eventosProximos) }

    console.log(aMostrar);


    var html = ""


    aMostrar.map(event => [

        html += `
        <section class="proximos" id=${event.position} style="background-image: url(${event.image}); background-size:cover">
        <a href="./detalle.html?id=${event.id}">
        <h2>${event.name}</h2></a>
        <p>
            <span class="negrita">
            ${event.date}  ${event.place}
            </span>
        </p>
        <p>
            <span class="negrita">
            ${event.description}
            </span>
        </p>
        <p>
            <span class="verde">
                Costo: ${event.price}
            </span>
        </p>
    </section>
        `
    ]
    )

    document.getElementById("callesita").innerHTML = html

}

cartas()

function dataCheck(checkboxSeleccionado) {
    var eventosEnArray = [...eventosProximos]
    var filtroCategorias = []

    console.log(eventosEnArray);

    if (checkboxSeleccionado.length > 0) {
        checkboxSeleccionado.forEach(category => {
            filtroPrevio = eventosEnArray.filter(evento => {
                return evento.category == category;
            }

            )
            filtroCategorias.push(...filtroPrevio)
            cartas(filtroCategorias)
            console.log(filtroCategorias);
        }

        )


    } else {
        filtroCategorias = eventosEnArray
        cartas(filtroCategorias)
        console.log(filtroCategorias);

    }


}

dataCheck()

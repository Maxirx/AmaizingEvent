var datosEventos = []

async function datosJSON() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(respuesta => respuesta.json())
        .then(json => datosEventos.push(...json.eventos))
    console.log(datosEventos);

    /*     var id = 1
        datosEventos.map(pais => pais.id = id++)
        console.log(datosEventos);
     */
    console.log(location);
    var id = location.search.split("?id=").filter(Boolean)
    console.log(id);
    var selectId = Number(...id)
    console.log(selectId);
    var eventosID = datosEventos.find(function buscarEmparejarPorId(datos) {
        return datos.id == selectId
    }

    )

    console.log(eventosID);



    var html =
        `
        <div class="card">
        <img src="${eventosID.image}" class="card-img-bottom" alt="...">
        <div class="card-body">
            <h5 class="card-title">${eventosID.name}</h5>
            <p class="card-text color">${eventosID.date} ${eventosID.place} </p>
            <p class="card-text color">${eventosID.description}</p>
            <p class="card-text"><small class="text-muted">Costo: ${eventosID.price}</small></p>
            <p class="card-text color"><small class="text-muted">Capacidad: ${eventosID.capacity}</small></p>
        </div>
    </div>

        
        `
    document.getElementById("callejon").innerHTML = html
}
datosJSON()






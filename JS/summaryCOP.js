var datos = [];
var mayorCapacidad = [];
var mayorAudiencia = [];
var menosAudiencia = [];
var ingresoCategorias = [];
var ingresoCategorias = [];
var porcentajeCategorias = [];
var asistencia = []
var capacidad = []
var maximosPorCategoria = []
var eventosPasados = []
var fechaDeHoy = ""

aaaaaaaaaaaaa
async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then((response) => response.json())
        .then((json) => {
            fechaDeHoy = json.fechaActual
            datos.push(...json.eventos);
        });

    data(datos)
    /*     asistencia = datos.map((dat) => dat.assistance || dat.estimate);
        console.log(asistencia); */
    /*     capacidad = datos.map((dat) => dat.capacity)
        console.log(capacidad);
        data(datos) */
    //   let minimo = Math.min(...asistencia);
    //   console.log(minimo);
    //   let maximo = Math.max(...asistencia);
    //   console.log(maximo);
    /*     let suma = 0;
        let resta = 0;
        let multiplicar = 1;
        let dividir = 0;
        let porcentaje = 100;
        capacidad.forEach((numero) => {
            suma += numero;
            console.log(suma);
            // promedio = suma / asistencia.length;
            // console.log(promedio);
            porcent = Math.round(suma / asistencia[0]);
            porcent1 = Math.round(suma / asistencia[1]);
            porcent2 = Math.round(suma / asistencia[2]);
            porcent3 = Math.round(suma / asistencia[3]);
            porcent4 = Math.round(suma / asistencia[4]);
            porcent5 = Math.round(suma / asistencia[5]);
            porcent6 = Math.round(suma / asistencia[6]);
            // console.log(porcent);
            resta -= numero;
            // console.log(resta);
            multiplicar = multiplicar * numero;
            // console.log(multiplicar);
            dividir /= numero;
            // console.log(dividir);
    
            console.log(asistencia);
            var maximos = []
    
            function maximo(datosEventos) {
                var maximos = Math.max(...datosEventos.filter(Number))
                return maximos
                console.log(maximos);
    
            }
    
            maximo(capacidad)
    
            maximo(asistencia)
            /*             var minimos = Math.min(...datosEventos.filter(Number)) */
    /*     });
    
        var noNumero = "123"
        var siNumero = Number(noNumero)
        console.log(typeof (siNumero));
    
     */


    /*     asistenciaTotal = asistencia.filter(Number) */



    /*     for (let i = 0; i < categoriasUnicas.length; i++) {
    
            if (datos.includes(asistenciaTotal && categoriasUnicas[0])) {
                MaximaAsistenciaPorCategoria = Math.max(datos.assistance)
                categoriasEnArray = datos.category
            }
    
    
        } console.log(); */
}
getData();







var porcentajeAsistecia = []

function data(datos) {
    /*    var fila = document.querySelector("#porcentajedeasistencia")
   
       datos.forEach(data => {
           console.log(data.assistance)
           if (data.assistance == undefined) {
               porcentajeAsistecia.push("eventosFuturos")
           } else { porcentajeAsistecia.push((data.assistance * 100) / data.capacity) }
       })
       console.log(porcentajeAsistecia)
   
       porcentajeAsisteciaMax = porcentajeAsistecia.filter(Number)
       var maximoPorc = Math.max(...porcentajeAsisteciaMax)
       var minimoPorc = Math.min(...porcentajeAsisteciaMax)
       console.log(maximoPorc);
       console.log(minimoPorc);
       var Max = Math.floor(maximoPorc)
       console.log(Max);
       var Min = Math.floor(minimoPorc)
       console.log(Min); */


    /*     datos.forEach(data => {
            asistencia.push(data.assistance)
        })
        asistencia = asistencia.filter(Number)
        console.log(mayorAudiencia);
        var maximaAudiencia = Math.max(...asistencia)
        console.log(maximaAudiencia);
        var minimaAudiencia = Math.min(...asistencia)
    
    
        datos.forEach(data => {
            capacidad.push(data.capacity)
        })
        var mayorCapacidad = Math.max(...capacidad)
        console.log(maximaAudiencia);
        var menorCapacidad = Math.min(...capacidad)
    
    
        var datosAsistencia = []
        var ingresos = []
    
        datos.forEach(data => {
            console.log(data.assistance)
            if (data.assistance == undefined) {
                ingresos.push((data.assistance * 0) * data.price)
            } else { ingresos.push((data.assistance * 1) * data.price) }
        })
        console.log(ingresos)
        ingresosPasados = ingresos.filter(Number)
        console.log(ingresosPasados);
        var ingresosMax = Math.max(...ingresosPasados)
        var ingresosMin = Math.min(...ingresosPasados)
        console.log(ingresosMax);
        console.log(ingresosMin);
    
        console.log(asistencia);
     */
    eventosPasados.push(...datos.filter(x => x.date < fechaDeHoy))

    console.log(eventosPasados);


    var categoriasEnArray = []
    var MaximaAsistenciaPorCategoria = []
    var eventosUnicos = eventosPasados.map(eventos => eventos.category)
    const EVENTOSUNICOSENARRAY = new Set(eventosUnicos);
    var categoriasUnicas = [...EVENTOSUNICOSENARRAY]
    console.log(EVENTOSUNICOSENARRAY);
    console.log(categoriasUnicas.length);

    console.log(asistencia);

    console.table((datos));




    var categoriasDefinitivas = []
    var datosPorCategoria = []

    categoriasUnicas.map(cates => {
        categoriasDefinitivas.push({
            categorias: cates,
            data: eventosPasados.filter(datp => datp.category == cates)
        })
    });

    console.log(categoriasDefinitivas);

    categoriasDefinitivas.map(datos => {


        datosPorCategoria.push({
            categorias: datos.categorias,
            nombre: datos.data.map(item => item.name),
            asistencia: datos.data.map(item => item.assistance),
            capacidad: datos.data.map(item => item.capacity),
            precio: datos.data.map(item => item.price),
            porcentajeAsis: datos.data.map(item => Math.floor((item.assistance * 100) / item.capacity)),
            ingresos: datos.data.map(item => item.assistance * item.price),
        })
    })

    console.log(datosPorCategoria);



    datosPorCategoria.forEach(cate => {

        var sumaAsistencia = 0
        var sumaIngreso = 0
        var Porcentaje = 0
        var PorcentajeI = 0
        var promedio = cate.porcentajeAsis.length
        var PorcentajeII

        cate.asistencia.forEach(element => {

            sumaAsistencia += element
        });
        cate.asistencia = sumaAsistencia

        cate.ingresos.forEach(element => {
            sumaIngreso += element
        });
        cate.ingresos = sumaIngreso

        cate.porcentajeAsis.forEach(element => {
            PorcentajeI = (Porcentaje += element) / promedio
            PorcentajeII = Math.round(PorcentajeI)
        });
        cate.porcentajeAsis = PorcentajeII
    });

    console.log(datosPorCategoria);




    /*     for (let i = 0; i < categoriasUnicas.length; i++) { */
    var objetoNuevo = datos.map(data => {

        if (data.assistance !== undefined) {
            return {
                asistenciaMaxima: data.assistance,
                porcentajeAsis: Math.floor((data.assistance * 100) / data.capacity),
                ingresosCat: data.assistance * data.price,
                capacidadCat: data.capacity,
                categorias: data.category,
                nombre: data.name
            }
        }
    }
    )



    console.log(objetoNuevo);



    var objetoDefinitivo = objetoNuevo.filter(Boolean)
    console.log(objetoDefinitivo);
    objetoDefinitivo.sort((a, b) =>
        b.porcentajeAsis - a.porcentajeAsis
    )





    console.log(objetoDefinitivo);


    var datosEnCategoria = []

    for (let i = 0; i < categoriasUnicas.length; i++) {
        const element = categoriasUnicas[i];
        if (datos.category == element) {
            datosEnCategoria[i].push(datos)
            console.log(datosEnCategoria[i]);
        }
    }


    var objetoMaximo = objetoDefinitivo[0]
    var objetoMinimo = objetoDefinitivo[objetoDefinitivo.length - 1]

    console.log(objetoMinimo);
    console.log(objetoMaximo);
    console.log(objetoDefinitivo);

    var objetoParaCapacidad = datos.sort((a, b) =>
        b.capacity - a.capacity
    )

    console.log(objetoParaCapacidad);

    var capacidadMaxima = objetoParaCapacidad[0]
    var capacidadMinima = objetoParaCapacidad[objetoParaCapacidad.length - 1]

    var HTMLMonodato = ""

    HTMLMonodato =
        `      
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Evento con mayor asistencia(%)
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${objetoMaximo.nombre} ${objetoMaximo.porcentajeAsis}%</strong>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Evento con menor asistencia(%)
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${objetoMinimo.nombre} ${objetoMinimo.porcentajeAsis}%</strong>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Evento con mayor capacidad
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${capacidadMaxima.name} ${capacidadMaxima.capacity}</strong> 
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Evento con menor capacidad:
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>${capacidadMinima.name} ${capacidadMinima.capacity}</strong> 
                </div>
            </div>
        </div>

`

    document.querySelector(".ponerAcá").innerHTML = HTMLMonodato




    tablaGeneral(datosPorCategoria)

}



function tablaGeneral(datosPorCategoria) {

    var thUnico
    var tdUnico

    console.log(datosPorCategoria);
    datosPorCategoria.forEach(cat => {
        thUnico = document.createElement("th")
        tdUnico = document.createElement("td")
        console.log(document.querySelector("#ingresos"));
        document.querySelector("#categorias").appendChild(thUnico).innerHTML
            = cat.categorias
        document.querySelector("#Asist").appendChild(document.createElement("td"))
            .innerHTML = cat.asistencia
        document.querySelector("#ingresos").appendChild(document.createElement("td")).innerHTML
            = cat.ingresos
        console.log(cat.ingresosCat);
        document.querySelector("#asistencia").appendChild(document.createElement("td"))
            .innerHTML = cat.porcentajeAsis + "%"
    }

    )

}

tablaGeneral()

function tablaSecundaria(params) {

}
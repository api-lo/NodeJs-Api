var datos, datos2;
consultadatosNodejs();
consultadatosNodejsGeneros();
consultadatosNodejsAnio();
PromediosExamenes();
function consultadatosNodejs() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/Ndiagnosticos",
        success: function (data) {
            datos = data;
            hacerGraficaDiagnostico();
        },
        error: function (data) {
            console.log(data.status);
        }
    });
}
function hacerGraficaDiagnostico()
{
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Con diagnosticos', 'Sin diagnosticos'],
            datasets: [{
                    label: '',
                    data: [datos[0].Condiagnostico, datos[0].Sindiagnostico],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}
function consultadatosNodejsGeneros() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/Ngeneros",
        success: function (data) {
            datos2 = data;
            hacerGraficaGeneros();
        },
        error: function (data) {
            console.log(data.status);
        }
    });
}
function hacerGraficaGeneros()
{
    var ctx = document.getElementById('myChartG').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Maculinos', 'Femeninos'],
            datasets: [{
                    label: '',
                    data: [datos2[0].Nmasculino, datos2[0].Nfemenino],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
var datoAnio;
function consultadatosNodejsAnio() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/Canios",
        success: function (data) {
            datoAnio = data;
            hacerGraficaPrueba(datoAnio);
        },
        error: function (data) {
            console.log(data.status);
        }
    });
}
function hacerGraficaPrueba(Json)
{
    const jsonfile = {
        "jsonarray": Json
    };

    const labels = jsonfile.jsonarray.map(function (e) {
        return e.Anio;
    });
    const dataCantidad = jsonfile.jsonarray.map(function (e) {
        return e.Cantidad;
    });
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                    label: 'Cantidad',
                    data: dataCantidad,
                    backgroundColor: 'rgba(0, 119, 204, 0.3)'
                }
            ]
        }
    };
    var ctx2 = document.getElementById('myChartAnio').getContext('2d');
    const chart = new Chart(ctx2, config);
}

function PromediosExamenes() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/promedios",
        success: function (data) {
            promedioGrafica(data);
        },
        error: function (data) {
            //console.log(data.status);
        }
    });
}
var promedio;
function promedioGrafica(Json) {
    promedio = Json;
    console.log(promedio);
    var ctx = document.getElementById('myChartP').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['pHemoglobina', 'pVCM', 'pHCM', 'pCHCM', 'pRDWCV', 'pLinfocitos', 'pMonocitos', 'pEosinofilos', 'pVPM'],
            datasets: [{

                    label: 'Promedio',
                    data: [promedio[0].pHemoglobina
                                , promedio[0].pVCM, promedio[0].pHCM
                                , promedio[0].pCHCM, promedio[0].pRDWCV, promedio[0].pLinfocitos
                                , promedio[0].pMonocitos, promedio[0].pEosinofilos
                                , promedio[0].pVPM],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {beginAtZero: false}
                    }
                ]
            }
        }
    });

}

promedioDiagnosticos();
var promedioDiagnostico;
function promedioDiagnosticos() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/gDiagnostico",
        success: function (data) {
            promedioDiagnostico = data;
            graficaPromedioDiagnosticos(promedioDiagnostico);
        },
        error: function (data) {
        }
    });
}
var lista_anemia = [];
var lista_infeccion = [];
var lista_alergias = [];
var lista_poliglobulia = [];
function graficaPromedioDiagnosticos(json)
{
    for (var i = 0; i < json.length; i++)
    {
        var variable = json[i].Diagnosticos.toString().split(":");
        lista_anemia.push(variable[1].replace("infeccion", ""));
        lista_infeccion.push(variable[2].replace("alegias", ""));
        lista_alergias.push(variable[3].replace("Poliglobulia", ""));
        lista_poliglobulia.push(variable[4]);

    }
    formaGraficaAlergia();
    formaGraficaInfeccion();
    formaGraficaAnemia();
    formaGraficaPoligogulia();
    ultimate();
}
var Sin = 0, bac = 0, para = 0, viral = 0;
function formaGraficaInfeccion()
{
    Sin = 0, bac = 0, para = 0, viral = 0;
    for (var i = 0; i < lista_infeccion.length; i++)
    {
        if (lista_infeccion[i].trim() == "Sin infeccón")
        {
            Sin = Sin + 1;
        }
        if (lista_infeccion[i].trim() == "Bacteriana")
        {
            bac = bac + 1;
        }
        if (lista_infeccion[i].trim() == "Viral")
        {
            viral = viral + 1;
        }
        if (lista_infeccion[i].trim() == "Parasitaria")
        {
            para = para + 1;
        }
    }
    console.log(lista_infeccion.length);
    console.log(Sin);
    console.log(bac);
    console.log(para);
    console.log(viral);
    console.log(Sin + bac + para + viral);

    var ctx = document.getElementById('myChartY').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Sin infeccón', 'Bacteriana', 'Viral', 'Parasitaria', 'Desconocido'],
            datasets: [{
                    data: [Sin, bac, viral, para, Sin + bac + para + viral],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
var cox = 0, coy = 0;
function formaGraficaAlergia()
{
    cox = 0;
    for (var i = 0; i < lista_alergias.length; i++)
    {
        if (lista_alergias[i].trim() == "False")
        {
            cox = cox + 1;
        }

    }
    coy = lista_alergias.length - cox;

    var ctx = document.getElementById('myChartX').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Con Alergias', 'Sin Alergias'],
            datasets: [{
                    label: '',
                    data: [coy, cox],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
var coxA = 0, coyA = 0;
function formaGraficaAnemia()
{
    coxA = 0;
    for (var i = 0; i < lista_anemia.length; i++)
    {
        if (lista_anemia[i].trim() == "Sin anemia")
        {
            coxA = coxA + 1;
        }

    }
    coyA = lista_anemia.length - coxA;

    var ctx = document.getElementById('myChartZ').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Con Anemia', 'Sin Anemia'],
            datasets: [{
                    label: '',
                    data: [coyA, coxA],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
var coxP = 0, coyP = 0;
function formaGraficaPoligogulia()
{
    coxP = 0;
    for (var i = 0; i < lista_poliglobulia.length; i++)
    {
        if (lista_poliglobulia[i].trim() == "False")
        {
            coxP = coxP + 1;
        }

    }
    coyP = lista_alergias.length - coxP;

    var ctx = document.getElementById('myChartW').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Con Poligogulia', 'Sin Poligogulia'],
            datasets: [{
                    label: '',
                    data: [coyP, coxP],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
function ultimate()
{
    var ctx = document.getElementById('myChartUltimate').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Infecciones', 'Alergias', 'Anemia', 'Poligogulia'],
            datasets: [{
                    label: '',
                    data: [(bac + para + viral), cox, coxA, coxP],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {

            }
        }
    });


}

var ssas;
function Porpaciente() {
    var DNI = document.getElementById("DNIbuscar").value;
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/" + DNI + "",
        success: function (data) {
            console.log(data);
            ssas = data;
            porUsuario2(data);
            porUsuario(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}
function porUsuario2(json)
{
    var ctx = document.getElementById('myChartUsuario2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hematies', 'Plaquetas', 'Leucocitos'],
            datasets: [{
                    label: 'asdsa',
                    data: [json.Hematies, json.Plaquetas + 8, json.Leucocitos + 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            }
        }
    });
}
function porUsuario(json)
{
    delete json.Hematies;
    delete json.Plaquetas;
    delete json.Leucocitos;
    var ctx = document.getElementById('myChartUsuario').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {

            datasets: [{
                    label: '',
                    data: json,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}

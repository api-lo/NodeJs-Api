consultaAjax();
var datos=[];
autocompletad(false);
var aux=[];
function consultaAjax() {
$.ajax({
        method: "GET",
        url: "https://localhost/Php/index.php",
        success: function (data) {
            llenarTabla(data);
            datos = data;
            document.getElementById("nombreCheck").checked = true;
        },
        error: function (data) {
        console.log(data.status);
        }
    });
}
function consultarPornombre()
{
    if (!document.getElementById("nombreCheck").checked)
    {
        $.ajax({
            method: "GET",
            url: "https://localhost/Php/Nombre.php/?name=" + document.getElementById("busqueda").value + "",
            success: function (data) {
                llenarTabla(data);                                               
            },
            error: function (data) {
                console.log(data.status);
            }
        });
    } else
    {
        $.ajax({
            method: "GET",
            url: "https://localhost/Php/DNI.PHP/?DNI=" + document.getElementById("busqueda").value + "",
            success: function (data) {
                llenarTabla(data);                                
            },
            error: function (data) {
                console.log(data.status);
            }

        });
    }
}
function autocompletad(bandera)
{
    var frutas = [];
    var Jdatos = JSON.parse(datos);
    if (bandera)
    {
        document.getElementById("dniCheck").checked = false;      
        for (var i = 0; i < Jdatos.items.length; i++)
        {
        frutas.push(Jdatos.items[i].DNI);
        }
        $("#busqueda").autocomplete({
            source: frutas
        });
    } else
    {
        document.getElementById("nombreCheck").checked = false;      
        for (var i = 0; i < Jdatos.items.length; i++)
        {
            frutas.push(Jdatos.items[i].Nombre);
        }
        $("#busqueda").autocomplete({
            source: frutas
        });
    }

}
function llenarTabla(datos)
{
    var cadena = "";
    var table = document.getElementById("autosTable");
    table.innerHTML = cadena;
    var Jdatos = JSON.parse(datos);
    console.log(Jdatos);
    for (var i = 0; i < Jdatos.items.length; i++)
    {
        cadena += "<tr>" +
                "<td>" + Jdatos.items[i].Nombre + "</td>" +
                "<td>" + Jdatos.items[i].Apellido + "</td>" +
                "<td>" + Jdatos.items[i].fecha + "</td>" +
                "<td>" + Jdatos.items[i].DNI + "</td>" +
                "<td>" + Jdatos.items[i].Genero + "</td>" +
                "<td>" + Jdatos.items[i].Leucocitos + "</td>" +
                "<td>" + Jdatos.items[i].Hemoglobina + "</td>" +
                "<td>" + Jdatos.items[i].Hematocrito + "</td>" +
                "<td>" + Jdatos.items[i].Hematies + "</td>" +
                "<td>" + Jdatos.items[i].VCM + "</td>" +
                "<td>" + Jdatos.items[i].HCM + "</td>" +
                "<td>" + Jdatos.items[i].CHCM + "</td>" +
                "<td>" + Jdatos.items[i].RDWCV + "</td>" +
                "<td>" + Jdatos.items[i].Linfocitos + "</td>" +
                "<td>" + Jdatos.items[i].Monocitos + "</td>" +
                "<td>" + Jdatos.items[i].Eosinofilos + "</td>" +
                "<td>" + Jdatos.items[i].Basofilos + "</td>" +
                "<td>" + Jdatos.items[i].VPM + "</td>" +
                "<td  >" + Jdatos.items[i].Plaquetas + "</td>" +
                "<td colspan=\"10\" >" + Jdatos.items[i].Diagnosticos + "</td>" +
                "</tr> ";
    }

    table.innerHTML = cadena;
}
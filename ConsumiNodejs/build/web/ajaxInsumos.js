function consultaAjaxInsumo() {
    var datajSON={'Nombre':document.getElementById('Nombre'),
            'FechaCompra':document.getElementById('FechaCompra'),
            'codigo': document.getElementById('codigo'),
            'categoria':document.getElementById('categoria'),
            'unidades':document.getElementById('unidades'),
            'cantidad':document.getElementById('cantidad'),
            'precio':document.getElementById('precio') };
$.ajax({
        method: "POST",
        url: "http://localhost:3000/insert",
        data:datajSON,
        success: function (data) {                
            console.log("Enviado");
            
        },
        error: function (data) {
        console.log("Error"+data.status);
        }
    });
}


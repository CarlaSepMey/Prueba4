
$(document).ready(function(){

    $(".btn-eliminar").click(function(event) {
        var currentRow=$(this).closest("tr");      
        var rut=currentRow.find("td:eq(0)").text();
        $('#lbl_proveedor').text(rut);
        $('#hdn_rut').val(rut);
        
    })

    $("#eliminar").click(function(event) {
        $.ajax({
            type: "POST",
            url: 'elminar-proveedor',
            data: {
                'rut': $('#hdn_rut').val()
                ,"csrfmiddlewaretoken": $("input[name=csrfmiddlewaretoken]").val()
              },
            success: function(respuesta) {
                alert("Proveedor eliminado exitosamente");
                location.reload();
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });
    });
    $("#eliminar").click(function(event) {
        $(this).closest('.ui-dialog-content').dialog('close'); 

    })

    $(".btn-editar").click(function(event) {
        var currentRow=$(this).closest("tr");      
        var rut=currentRow.find("td:eq(0)").text();
        var razon_social = currentRow.find("td:eq(1)").text();
        var descripcion = currentRow.find("td:eq(2)").text();
        var servicio = currentRow.find("td:eq(3)").text();
        

        // hidden
        $('#hdn_id').val(rut);
        $('#hdn_razon_social').val(razon_social);
        $('#hdn_descripcion').val(descripcion);
        $('#hdn_servicio').val(servicio);
        $('#lbl_rut').text(rut);
        $('#id_razon_social').val(razon_social);
        $('#descripcion').val(descripcion);
        $('#servicio').val(servicio);     
    })
    $("#guardar_modificacion").click(function(event) {
        $.ajax({
            type: "POST",
            url: 'editar_proveedor',
            data: {
                'rut': $('#hdn_id').val(),
                'razon_social': $('#id_razon_social').val(),
                'descripcion': $('#descripcion').val(),
                'servicio': $('#servicio').val()
                ,"csrfmiddlewaretoken": $("input[name=csrfmiddlewaretoken]").val()
              },
            success: function(respuesta) {
                
                location.reload();
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });
    });
    
});


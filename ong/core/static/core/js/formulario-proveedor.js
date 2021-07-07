
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

});



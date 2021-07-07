$(document).ready(function() {

    var nroTotalImagenes = 9;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");

    var url_razas = 'https://api.thecatapi.com/v1/breeds';
    
    $.get(url_razas, function(response) { 
        id = Math.floor((Math.random() * 264) + 1);
        $('#tipoRaza').append('<option value="9999" >-- seleccione una raza --</option>');
        $('#tipoRaza').append('<option value="'+id+'">Cualquiera</option>');
        $.each(response, function(index, element) {
            //console.log(element.id+':'+element.name);        
            $('#tipoRaza').append('<option value="'+element.id+'">'+element.name+'</option>') 
        });


    });
    $('#tipoRaza').change(function(){ 

        $('#imagenGato').html('');
        var value_text = $( "#tipoRaza option:selected" ).text();
        var value_id = $( "#tipoRaza option:selected" ).val();
        if(value_id != 9999){
            var url_imgen = 'https://api.TheCatAPI.com/v1/images/search?';
        
            $.get(url_imgen, { option: value_text }, function(response) { 
                    $('#imagenGato').append('<img src="'+response[0].url+'" alt="Girl in a jacket" width="250" height="300">');
            });
        }else{
            $('#imagenGato').append('<p>Seleccione una raza para mostrar</p>');
        }
            
    }); 
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}

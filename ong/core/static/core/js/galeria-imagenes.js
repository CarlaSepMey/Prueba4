
function generar_galeria_imagenes(
    selectorTablaHTML, numeroTotalImagenes, numeroColumnasPorFila, url, textoBoton) {

    var spinerPrincipalHTML = "";
    spinerPrincipalHTML += "<thead>";
    spinerPrincipalHTML += "    <tr>";
    spinerPrincipalHTML += "        <th colspan=\""+numeroColumnasPorFila+"\">";
    spinerPrincipalHTML += "            <div class=\"progress\" style=\"height:32px;\">"
    spinerPrincipalHTML += "                <div id=\"barra-progreso\" class=\"progress-bar\" style=\"width:0%; height:32px;\">0%</div>"
    spinerPrincipalHTML += "            </div>"
    spinerPrincipalHTML += "        </th>";
    spinerPrincipalHTML += "    </tr>";
    spinerPrincipalHTML += "</thead> ";   

    $(selectorTablaHTML).append(spinerPrincipalHTML);
    $(selectorTablaHTML).append("<tbody></tbody>");

    var incrementoBarraProgreso = Math.floor(100/(numeroTotalImagenes));
    var avanceBarraProgreso = 0;

    $.get(url, function(response) { 
        
        contadorImagenesCargadas = 0;
        indiceFilaActual = 0;
        filas = new Array();        
        filas[indiceFilaActual] = $("<tr></tr>");
        $(selectorTablaHTML +" tbody").append(filas[indiceFilaActual]);

        $.each(response, function(index, element) {

            if (((index+1)%numeroColumnasPorFila) == 0) {        
                indiceFilaActual++;        
                filas[indiceFilaActual] = $("<tr></tr>"); 
                $(selectorTablaHTML +" tbody").append(filas[indiceFilaActual]);
            }

            var img = new Image();
            img.src = element.url;

        });
        
    });
}

function btnAction(identificadorImagen) {

    console.log("mostrar spiner para reflejar la ejecución de la llamada ajax de fondo");
    $("#ajax-loader-img-"+identificadorImagen).show();

    $.get(getBtnActionURL(), function(response){
        
        //iterar por el único elemento que debería devolver la respuesta
        $.each(response, function(index, element){
            //crear imagen para precargar antes de reemplazar por la existente
            var newImagen = new Image();
            newImagen.src = element.url;

            //cuando la imagen ya se encuentra descargada
            newImagen.onload = function() {

                $("#imagen-"+identificadorImagen).fadeOut(1000, function(){
                    // se reemplaza la seleccionada, una vez que ya se ha desvanecido, por la nueva ya descargada 
                    $("#imagen-"+identificadorImagen).attr("src",element.url);
                                    
                    // se oculta el spiner
                    $("#ajax-loader-img-"+identificadorImagen).hide();

                    // se vuelve a mostrar, pero con la nueva imagen
                    $("#imagen-"+identificadorImagen).fadeIn(2000);
                });
                
            };               
        });
    });
}

function actualizarBarraProgreso(porcentaje) {
    $("#barra-progreso").css("width", porcentaje+"%");
    $("#barra-progreso").html(porcentaje+"%");

    if (porcentaje == 100) {
        $("#barra-progreso").parent().fadeOut(2000);
    } 
}
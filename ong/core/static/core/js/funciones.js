function fn_rut() {
val=true;
rut = $("#txt_rut").val();
$.getJSON('https://api.libreapi.cl/rut/validate?rut='+ rut, function(data){
var respuesta = data;
if(data.data.valid == false){
$("#lbl_rut").text("Rut invalido, favor ingrese nuevamente");
$("#lbl_rut").css({'color':'red','font-size':'0.8em'});
val=false;
}

});
}
  
$('#btn_registrar').click(function(){

fn_rut();
nombre = $("#txt_nombre").val();
correo = $("#txt_correo").val();
tipo = $("#txt_tipo option:selected").text();
password = $("#txt_password").val(); $

$("#lbl_rut").empty();
$("#lbl_nombre").empty();
$("#lbl_paterno").empty();
$("#lbl_materno").empty();
$("#lbl_correo").empty();
$("#lbl_tipo").empty();
$("#lbl_password").empty();

if ($("#txt_rut").val()==""){
$("#lbl_rut").text("* Campo Obligatorio");
$("#lbl_rut").css({'color':'red','font-size':'0.8em'});
val=false;
}

if(nombre == ""){
$("#lbl_nombre").text("Campo no puede estar vacio");
$("#lbl_nombre").css({'color':'red','font-size':'0.8em'});
val=false;
}

if(correo == ""){
$("#lbl_correo").text("Ej: nombre@ejemplo.com");
$("#lbl_correo").css({'color':'red','font-size':'0.8em'});
val=false;
}

if ($("#txt_password").val()==""){
$("#lbl_password").text("* Campo Obligatorio");
$("#lbl_password").css({'color':'red','font-size':'0.8em'});
val=false;
}

if(val== true && val == true ){ setTimeout("redireccionarPagina()", 3000);
alert("Usuario registrado Correctamente."); 
}
});

function redireccionarPagina() {
  window.location = "login-exitoso.html";
}

function limpiarFormulario() {
document.getElementById("miForm").reset()
$("#lbl_rut").empty();
$("#lbl_nombre").empty();
$("#lbl_correo").empty();
$("#lbl_tipo").empty();
$("#lbl_password").empty();
};

$('#btn_limpiar').click(function(){
limpiarFormulario();
});
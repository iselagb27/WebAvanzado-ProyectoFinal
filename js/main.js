/*
if(jQuery)
{
  alert("Si tenemos jQuery");
}
*/

//Formulario de registro
$("#registro").click(function(){
  var numregistro = Math.floor(Math.random()*999);
  alert("Gracias por registrarte, eres el visitante número: "+numregistro);
  close();
});

//Contacto - mapa
$("#map").click(function(){
  alert("FELICIDADES!!! nos has encontrado en esta ciudad...");
})

document.getElementById('boton').onclick=function(){
    window.open('registro.html','Registro de Visitas','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=800,height=480,left=500,top=250')
}




//slogan flotante index.html
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );

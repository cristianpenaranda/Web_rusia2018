$(document).ready(function(){
	$("#inicio").click(function(){
		location.reload(true);
	})

	$("#selh3").click(function(){
		$("#contenedor").load("selecciones/colombia.html");
	})

	$("#seld1").click(function(){
		$("#contenedor").load("selecciones/argentina.html");
	})

	$("#sele1").click(function(){
		$("#contenedor").load("selecciones/brasil.html");
	})

	$("#contacto").click(function(){
		$("#contenedor").load("contacto.html");
	})

	$("#partidos").click(function(){
		$("#contenedor").load("partidos.html");
	})
});

var partido = "";
$.getJSON('json/partidos.json', function(datos){
	$("#contenido").html('');
	  $.each(datos["partidos"], function(idx,partido){
	  		$("#contenido").append("<tr><td>" +
	  								 partido["fecha"] + "</td><td>" + 
	  								 partido["equipo1"] + "</td><td>" + 
	  								 partido.equipo2 + "</td></tr>");
	  });
});

/*$(".hola").click(function(event){alert("hi");
	event.preventDefault();
	if($(this).data('seleccion')!=null){
		alert("hp");
		$("#contenedor").load('selecciones/'+$(this).data('seleccion')+'.html');
	}
});*/
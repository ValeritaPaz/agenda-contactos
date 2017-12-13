$(document).ready(function(){
	//funcion de agregar contacto nuevo
	$("#btn-add").click(function(){
		var name = $("#name").val();
		$('#name').val("");
		var phone = $("#phone").val();
		$('#phone').val("");
		var contBox = $("#cont");
		contBox.append('<div>' + '<h3>' + name + '</h3>' + '<p>' + phone + '</p><i class= "fa fa-trash trash" id="delete"></i></div>')

	});
	//funcion que eliminaria el contacto
	$("#delete").click(function(){
		$("#cont").remove();
	});
});
var usuario = document.getElementById('usuario');
var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');
var fechanac = document.getElementById('fechanac');
var edadCal = document.getElementById('edadCal')
var nombre = document.getElementById('nombre')
var error = document.getElementById('error')

function enviarFormulario(){
	var usrval = 0;

	for(var i=0; i<usuario.value.length; i++){
		var x = usuario.value.charCodeAt(i)
		if(x < 65 || x > 90){
			if(x<97 || x>122){
				if(x<48 || x>57){
					usrval = 1;
				}
			}
		}
	}

	if(usrval==1){
		alert('El campo usuario solo debe contener letras o numeros')
	}

	if(ccpaswd.value != ccpaswdValidate.value){
		alert('Las contraseñas no coinciden')
	}
	return false;	
}

function CalcularEdad(){
	if(fechanac.value === null || fechanac.value === ''){
		alert('Ingrese el nombre');
	}else{
		var hoy = new Date();
	    var cumpleanos = new Date(fechanac.value);
	    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	    var m = hoy.getMonth() - cumpleanos.getMonth();

	    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
	        edad--;
	        edadCal.innerHTML=edad;
	    }
	}
	return false;
}


var usuario = document.getElementById('usuario');
var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');
var fechanac = document.getElementById('fechanac');
var edadCal = document.getElementById('edadCal')

function show(){
	document.getElementById("act").hidden = false;
}

function enviarFormulario(){


	var usrval = 0;

	if (ccusuario.value.length > 20) {
		alert('El campo ccusuario no debe exceder los 20 caracteres');
	}else{
		if(ccusuario.value.length < 15){
			alert('El campo ccusuario debe tener por lo menos 15 caracteres');
		}else{
			for(var i=0; i<ccusuario.value.length; i++){
				var x = ccusuario.value.charCodeAt(i)
				if(x < 65 || x > 90){
					if(x<97 || x>122){
						if(x<48 || x>57){
							ccusrval = 1;
						}
					}
				}
			}
			if(ccusrval==1){
				alert('El campo ccusuario solo debe contener letras o numeros')
			}
		}
	}

	if(ccpaswd.value != ccpaswdValidate.value){
		alert('Las contraseñas no coinciden')
	}

	var hoy = new Date();
    var cumpleanos = fechanac.value;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return false;
    edadCal.innerHTML= 'edad';
}

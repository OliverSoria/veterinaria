
var controladorApp = angular.module('SistemaGestionApp', []);

// Aplica formato al tipo de usuario de las tablas
function formateadorTipoUsuario(value, row, index) {
    var resultado = '-';
        
    if (value != null) {
    	switch(value) {
    	case 'A' :
    		resultado = 'Administrador';
    		break;
    	case 'S' :
    		resultado = 'Supervisor';
    		break
    	case 'V' :
    		resultado = 'Vendedor';
    		break;
    	default :
    		resultado = 'Desconocido';
    		break;
    	}
    }
    
    return resultado;
}

//Valida nombre de usuario, permite letras y numeros
function validaNickName(entrada) {
	var valor = entrada.trim();
	var reg = /^[a-zA-Z0-9]+$/;
	
	return reg.test(valor);
}

// Valida Nombres y Apellidos (permite acentos, "ñ" y "-")
function validaNombreApellido(entrada) {
	var valor = entrada.trim();
	var reg = /^([a-z \u00F1\u00E1\u00E9\u00ED\u00F3\u00FA\u00FC\u002D]{1,30})$/i;
	
	return reg.test(valor);
}

// Valida que al menos se haya seleccionado un registro
function registroSeleccionado() {
	var fila = $('#tabla-usuarios').bootstrapTable('getSelections');

	if (fila.length < 1) {
		return false;
	} else {
		return true;
	}
}

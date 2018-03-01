
var usuarios = [];

$(document).ready(function () {
	$('#tabla-usuarios').bootstrapTable({
	    url: 'usuarios/consulta',
	    columns: [
	    	{
	    		field: 'selector',
	    		radio: true,
	    		align: 'center',
	    		valign: 'middle'
	    		
	    	},
	    	{
	    		field: 'alias_usuario',
	    		title: 'Usuario',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'nombre_usuario',
	    		title: 'Nombre',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'paterno_usuario',
	    		title: 'Apellido Paterno',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'materno_usuario',
		    	title: 'Apellido Materno',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'fecha_alta_usuario',
		    	title: 'Fecha de Alta',
		    	formatter: formateadorFecha,
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'fecha_baja_usuario',
		    	title: 'Fecha de Baja',
		    	formatter: formateadorFecha,
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'tipo_usuario',
		    	title: 'Tipo de Usuario',
		    	formatter: formateadorTipoUsuario,
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	usuarios = data;
	    }
	});
});


// Moved to its own file
controladorApp.controller('controlador', function($scope, $http) {
	$scope.action = 5 + 3;
	
	$scope.action2 = function() {
		
		$http({
			 method: 'GET',
			// url: 'prueba',
			 url: 'usuarios/consulta',
			}).then(function successCallback(response) {
			// $scope.action = response.data;
			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response);
			$scope.action = 'error';	
		});
		
	}
});

// Move to its own file
controladorApp.controller('operaciones_usuarios', function($scope, $http) {
	$scope.usuarios = [{}];
		
	$scope.getUsuarios = function() {
			
			$http({
				 method: 'GET',
				 url: 'usuarios/consulta',
				}).then(function successCallback(response) {
				console.log(response.data);
				$scope.usuarios = response.data;
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	
	// Alta
	$scope.agregarUsuario = function() {
		$('#modal-formulario').modal('show');
	}
	
	// Elimina
	$scope.eliminarUsuario = function() {
		console.log('Eliminar usuario');
		
		var fila = $('#tabla-usuarios').bootstrapTable('getSelections');
		
		if (fila.length < 1) {
			// Seleccione el usuario que desea eliminar
			$('#modal-info').modal('show');
		} else {
			// Ask for confirmation
		}
	}
	
	// Modificacion
	$scope.modificarUsuario = function() {
		console.log('Modificar usuario');
		
		var fila = $('#tabla-usuarios').bootstrapTable('getSelections');
		
		if (fila.length < 1) {
			$('#modal-info').modal('show');
		} else {
			$('#modal-formulario').modal('show');
		}
	}
});


// 
controladorApp.controller('alta_usuario', function($scope, $http) {
	
	// Bean que se enviara al servidor
	var user = {
			id_usuario         : null,
			alias_usuario      : null,
			nombre_usuario     : null,
			paterno_usuario    : null,
			materno_usuario    : null,
			password_usuario   : null,
			fecha_alta_usuario : null,
			fecha_baja_usuario : null,
			tipo_usuario       : null
		}
	
	// Variables para validar campos
	$scope.validacionesFormulario = true;
	var usuario  = true;
	var nombre   = true;
	var paterno  = true;
	var materno  = true;
	var password = true;
	var confirma = true;
	
	// Estilos de la alerta
	$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
	
	// Estilos de los campos
	$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	$scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	$scope.iconsUserNombreClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	$scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	$scope.iconsUserPaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	$scope.colorUserMaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	$scope.iconsUserMaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	$scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning ';
	$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	
	// Titulo del panel de alta
	$scope.tituloAltaUsuario = 'Agregar nuevo usuario';
	
	// Texto del mensaje en Alta Usuario
	$scope.textAltaUsuario = 'Favor de capturar la informaci\u00F3n';
	
	// Campos deshabilitados
	$scope.inputsAltaUsuario = false;
	
	// Mostrar botones
	$scope.cerrarAltaUsuario = false;
	$scope.aceptarCancelarAltaUsuario = true;
	

	$scope.onAltaUsuarioAceptar = function(usuario) {
		var tipoUsario = $('.selectpicker').selectpicker('val');
		
		user = {
			id_usuario         : 1               ,
			alias_usuario      : usuario.alias   ,
			nombre_usuario     : usuario.nombre  ,
			paterno_usuario    : usuario.paterno ,
			materno_usuario    : usuario.materno ,
			password_usuario   : usuario.password,
			fecha_alta_usuario : null            ,
			fecha_baja_usuario : null            ,
			tipo_usuario       : tipoUsario
		}
		
		// Sends bean to server
	    $http({
			 method: 'POST',
			 data : angular.toJson(user),
			 url: 'usuarios/alta',
			 headers: {
			        'Content-type': 'application/json'
			 }
		}).then(function successCallback(response) {
			//console.log(response.data);
			$scope.inputsAltaUsuario = true;
			$('#tabla-usuarios').bootstrapTable('refresh');
			$scope.tituloAltaUsuario = 'Usuario agregado con \u00e9xito';
			$scope.textAltaUsuario = '\u00a1El usuario fue dado de alta!';
			$scope.cerrarAltaUsuario = true;
			$scope.aceptarCancelarAltaUsuario = false;
			$('.selectpicker').prop('disabled', true);
			$('.selectpicker').selectpicker('refresh');
		}, function errorCallback(response) {
			$scope.textAltaUsuario = response.message;
			console.log(response.message);
		});
	}
	
	$scope.onAltaUsuarioCancelar = function(usuario) {
		reseteaAltaUsuario();
	}
	
	$scope.onAltaUsuarioCerrar = function() {
		reseteaAltaUsuario();
	}
	
	$scope.onFocusUsuario = function() {
		validaUsuario();
	}
	
	$scope.onFocusNombre = function() {
		validaNombreApellidos('Nombre');
	}
	
	$scope.onFocusPaterno = function() {
		validaNombreApellidos('Apellido paterno');
	}
	
	$scope.onFocusMaterno = function() {
		validaNombreApellidos('Apellido materno');
	}
	
	$scope.onFocusPassword = function() {
		validaPassword();
	}
	
	$scope.onFocusConfirmar = function() {
		validaConfirmaPassword();
	}
	
	$scope.onFocusTipo = function() {
		$scope.textAltaUsuario = "Seleccione el tipo de usuario";
		$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
	}
	
	$scope.onKeyUpUsuario = function() {
		validaUsuario();
	}
	
	$scope.onKeyUpNombre = function() {
		validaNombreApellidos('Nombre');
	}
	
	$scope.onKeyUpPaterno = function() {
		validaNombreApellidos('Apellido paterno');
	}
	
	$scope.onKeyUpMaterno = function() {
		validaNombreApellidos('Apellido materno');
	}
	
	$scope.onKeyUpPassword = function() {
		validaPassword();
	}
	
	$scope.onKeyUpConfirmaPassword = function() {
		validaConfirmaPassword();
	}
	
	// Vallidacion del nombre de usuario
	function validaUsuario() {
		// Valida que sea diferente de nulo y de cero
		if ($scope.usuario == undefined || 
				$scope.usuario.alias == undefined || 
				$scope.usuario.alias.length < 1) {
			$scope.textAltaUsuario = "Introduzca el usuario que desea utilizar";
			$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
			$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
			$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		// Valida que los carateres sean validos
		} else if(!validaNickName($scope.usuario.alias)) {
			$scope.textAltaUsuario = "No es posible utilizar caracteres especiales";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			usuario = true;
			validaFormulario();
		// Valida que al menos tenga 6 caracteres
		} else if($scope.usuario.alias.length < 6) {
			$scope.textAltaUsuario = "Su usuario debe tener al menos 6 caracteres";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			usuario = true;
			validaFormulario();
		// Valida que no sea mayor a 16 caracteres
		} else if ($scope.usuario.alias.length > 16) {
			$scope.textAltaUsuario = "Su usuario debe tener m\u00e1ximo 16 caracteres";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			usuario = true;
			validaFormulario();
		// Valida si esta disponible	
		}else {
			// Si es que existen mas usuarios
			if (usuarios.length > 0) {
				for (var i = 0; i < usuarios.length; i++) {
					// Si el usuario no esta disponible
					if (usuarios[i].alias_usuario.toLowerCase().trim() === $scope.usuario.alias.toLowerCase().trim()) {
						$scope.textAltaUsuario = "Usuario no disponible";
						$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
						$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
						$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
						usuario = true;
						validaFormulario();
						break;
					// Si el usuario esta disponible
					} else {
						$scope.textAltaUsuario = "Usuario disponible";
						$scope.alertUserClasses = 'alert alert-success alert-info-modal text-center';
						$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
						$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
						usuario = false;
						validaFormulario();
					}
				} 
			// Si no existen mas usuarios
			} else {
				$scope.textAltaUsuario = "Usuario disponible";
				$scope.alertUserClasses = 'alert alert-success alert-info-modal text-center';
				$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
				$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
				usuario = false;
				validaFormulario();
			}
		}
	}
	
	// Valida nombres y apellidos
	function validaNombreApellidos(texto) {

		var bean = $scope.usuario;
		var variableBean;
		
		// Evalua segun argumento de entrada
		if (bean != undefined) {
			switch (texto) {
			case 'Nombre':
				variableBean = $scope.usuario.nombre;
				break;
			case 'Apellido paterno':
				variableBean = $scope.usuario.paterno;
				break;
			case 'Apellido materno':
				variableBean = $scope.usuario.materno;
				break;
			}
		}
		
		// Valida que sea diferente de nulo y de cero
	    if (bean == undefined || 
	    		variableBean == undefined ||
	    		variableBean.length < 1) {
	      $scope.textAltaUsuario = "Introduzca el " + texto.toLowerCase()  + " del usuario";
	      $scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
	      actualizaEstilosInputs(texto, 'default');
	    // Valida que los carateres sean validos
	    } else if(!validaNombreApellido(variableBean)) {
	    	$scope.textAltaUsuario = "No es posible utilizar caracteres especiales";
		    $scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
		    actualizaEstilosInputs(texto, 'error');
	    // Valida que al menos tenga 2 caracteres
	    } else if(variableBean.length < 2) {
	    	$scope.textAltaUsuario = texto + " no v\u00e1lido";
	        $scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
	        actualizaEstilosInputs(texto, 'error');
	    // Si pasa todas las validaciones
	    } else {
	      $scope.textAltaUsuario = texto + " correcto";
	      $scope.alertUserClasses = 'alert alert-success alert-info-modal text-center';
	      actualizaEstilosInputs(texto, 'exito');
	    }
	}	
	
	// Valida el password
	function validaPassword() {
		// Valida que sea diferente de nulo y de cero
		if ($scope.usuario == undefined || 
				$scope.usuario.password == undefined || 
				$scope.usuario.password.length < 1) {
			$scope.textAltaUsuario = "Introduzca la contrase\u00F1a que desea utilizar";
			$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
			$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
			$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		// Valida minimo 6 caracteres
		} else if($scope.usuario.password.length < 6) {
			$scope.textAltaUsuario = "Su contrase\u00F1a debe tener al menos 6 caracteres";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			password = true;
			validaFormulario();
		// Valida que tenga al menos una letra
		} else if ($scope.usuario.password.search(/[a-z]/i) < 0) {
			$scope.textAltaUsuario = "Su contrase\u00F1a debe tener al menos una letra";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			password = true;
			validaFormulario();
		// Valida que tenga al menos un digito
		} else if ($scope.usuario.password.search(/[0-9]/) < 0) {
			$scope.textAltaUsuario = "Su contrase\u00F1a debe tener al menos una d\u00edgito";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			password = true;
			validaFormulario();
		// Valida maximo 16 caracteres
		} else if($scope.usuario.password.length > 16) {
			$scope.textAltaUsuario = "Su contrase\u00F1a debe tener m\u00e1ximo 16 caracteres";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			password = true;
			validaFormulario();
		// Si pasa todas las validaciones	
		} else {
			$scope.textAltaUsuario = "Contrase\u00F1a correcta";
		    $scope.alertUserClasses = 'alert alert-success alert-info-modal text-center';
		    $scope.iconsUserPasswordClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
		    $scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
		    password = false;
		    
		    if ($scope.confirmPwd != undefined) {
				if ($scope.usuario.password != $scope.confirmPwd) {
					$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
					$scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
					confirma = true;
				} else {
					$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
				    $scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
				    confirma = false;
				}
			}
		    validaFormulario();
		}
	}
	
	// Valida la confirmacion del password
	function validaConfirmaPassword() {
		console.log('+' + $scope.usuario);
		// Valida que sea diferente de nulo y de cero
		if ($scope.confirmPwd == undefined || 
				$scope.confirmPwd.length < 1) {
			$scope.textAltaUsuario = "Confirme la contrase\u00F1a que desea utilizar";
			$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
			$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
			$scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		// Valida minimo 6 caracteres
		} else if ($scope.usuario == undefined || $scope.usuario.password !== $scope.confirmPwd) {
			$scope.textAltaUsuario = "Las contrase\u00F1as no coinciden";
			$scope.alertUserClasses = 'alert alert-danger alert-info-modal text-center';
			$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
			$scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
			confirma = true;
			validaFormulario();
		// Si pasa todas las validaciones
		} else {
			$scope.textAltaUsuario = "Las contrase\u00F1as coinciden";
		    $scope.alertUserClasses = 'alert alert-success alert-info-modal text-center';
		    $scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
		    $scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
		    confirma = false;
		    validaFormulario();
		}
	}
	
	// Actaliza los estilos de los campos Nombres y Apellidos
	function actualizaEstilosInputs(tipo, accion) {
		if (accion === 'error') {
			if (tipo === 'Nombre') {
	    		$scope.iconsUserNombreClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
	    		$scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
	    		nombre = true;
	    		validaFormulario();
	    	} else if (tipo === 'Apellido paterno') {
	    		$scope.iconsUserPaternoClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
	    		$scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-error'; 
	    		paterno = true;
	    		validaFormulario();
	    	} else if (tipo === 'Apellido materno') {
	    		$scope.iconsUserMaternoClasses = 'glyphicon glyphicon-remove form-control-feedback glyphicon-input';
	    		$scope.colorUserMaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-error';
	    		materno = true;
	    		validaFormulario();
	    	}
		} else if (accion === 'exito') {
			if (tipo === 'Nombre') {
	    		$scope.iconsUserNombreClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
	    		$scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
	    		nombre = false;
	    		validaFormulario();
			} else if (tipo === 'Apellido paterno') {
	    		$scope.iconsUserPaternoClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
	    		$scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-success'; 
	    		paterno = false;
	    		validaFormulario();
			} else if (tipo === 'Apellido materno') {
	    		$scope.iconsUserMaternoClasses = 'glyphicon glyphicon-ok form-control-feedback glyphicon-input';
	    		$scope.colorUserMaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-success';
	    		materno = false;
	    		validaFormulario();
	    	}
		} else {
			if (tipo === 'Nombre') {
	    		$scope.iconsUserNombreClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	    		$scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	    		nombre   = true;
	    		validaFormulario();
			} else if (tipo === 'Apellido paterno') {
	    		$scope.iconsUserPaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	    		$scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning'; 
	    		paterno = true;
	    		validaFormulario();
			} else if (tipo === 'Apellido materno') {
	    		$scope.iconsUserMaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
	    		$scope.colorUserMaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
	    		materno = true;
	    		validaFormulario();
	    	}
		}
	}
	
	// Valida todos los campos
	function validaFormulario() {
		if (usuario  == false &&
			nombre   == false &&
			paterno  == false &&
			materno  == false &&
			password == false &&
			confirma == false) {
			$scope.validacionesFormulario = false;
		} else {
			$scope.validacionesFormulario = true;
		}
	}
	
	// Resetea el panel Alta de Usuario
	function reseteaAltaUsuario() {
		$('#modal-formulario').modal('hide');
		$scope.usuario = null;
		$scope.confirmPwd = null;
		$('.selectpicker').selectpicker('val', 'Vendedor');
		$('.selectpicker').prop('disabled', false);
		$('.selectpicker').selectpicker('refresh');
		$scope.alertUserClasses = 'alert alert-info alert-info-modal text-center';
		$scope.colorUserUsuarioClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserUsuarioClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserNombreClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserPaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.colorUserMaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserMaternoClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.colorUserPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.colorUserConfirmaPasswordClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
		$scope.iconsUserConfirmaPasswordClasses = 'glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input';
		$scope.textAltaUsuario = 'Favor de capturar la informaci\u00F3n';
		$scope.cerrarAltaUsuario = false;
		$scope.aceptarCancelarAltaUsuario = true;
		$scope.validacionesFormulario = true;
		$scope.inputsAltaUsuario = false;
		$scope.tituloAltaUsuario = 'Agregar nuevo usuario';
	}
});

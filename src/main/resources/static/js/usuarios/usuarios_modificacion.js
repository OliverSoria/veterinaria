function modificacionDeUsuario(fila) {

    $('#modificacion-usuario-alias').val(fila.aliasUsuario);
    $('#modificacion-usuario-nombre').val(fila.nombreUsuario);
    $('#modificacion-usuario-paterno').val(fila.paternoUsuario);
    $('#modificacion-usuario-materno').val(fila.maternoUsuario);
    $('#modificacion-usuario-password').val(fila.passwordUsuario);
    $('#modificacion-usuario-confirmar').val(fila.passwordUsuario);

    switch (fila.tipoUsuario) {
        case 'V' :
            $('#selector-usuario-modificacion').selectpicker('val', 1);
            break;
        case 'S' :
            $('#selector-usuario-modificacion').selectpicker('val', 2);
            break;
        case 'A' :
            $('#selector-usuario-modificacion').selectpicker('val', 3);
            break;
    }

    $('#modal-modificacion-usuario').modal('show');
}

function onFocusNombreMod() {
    validaNombreApellidos('Nombre');
}

function onFocusPaternoMod() {
    validaNombreApellidos('Apellido paterno');
}

function onFocusMaternoMod() {
    validaNombreApellidos('Apellido materno');
}

function onFocusPasswordMod() {
    validaPassword();
}

function onFocusConfirmarMod() {
    validaConfirmaPassword();
}

// Valida nombres y apellidos
function validaNombreApellidos(texto) {

    var variableBean;

    // Evalua segun argumento de entrada
    switch (texto) {
        case 'Nombre':
            variableBean = $('#modificacion-usuario-nombre').val();
            break;
        case 'Apellido paterno':
            variableBean = $('#modificacion-usuario-paterno').val();
            break;
        case 'Apellido materno':
            variableBean = $('#modificacion-usuario-materno').val();
            break;
    }

    // Valida que sea diferente de nulo y de cero
    if (variableBean == undefined ||
        variableBean.length < 1) {
        $('#mensaje-modificacion-usuario').html("Introduzca el " + texto.toLowerCase() + " del usuario");
        $('#mensaje-modificacion-usuario').removeClass();

        $('#mensaje-modificacion-usuario').addClass('alert alert-info alert-info-modal text-center');
        actualizaEstilosInputsMod(texto, 'default');
        // Valida que los carateres sean validos
    } else if (!validaNombreApellido(variableBean)) {
        $('#mensaje-modificacion-usuario').html("No es posible utilizar caracteres especiales");
        $('#mensaje-modificacion-usuario').removeClass();

        $('#mensaje-modificacion-usuario').addClass('alert alert-danger alert-info-modal text-center');
        actualizaEstilosInputsMod(texto, 'error');
        // Valida que al menos tenga 2 caracteres
    } else if (variableBean.length < 2) {
        $('#mensaje-modificacion-usuario').html(texto + " no v\u00e1lido");
        $('#mensaje-modificacion-usuario').removeClass();

        $('#mensaje-modificacion-usuario').addClass('alert alert-danger alert-info-modal text-center');
        actualizaEstilosInputsMod(texto, 'error');
        // Si pasa todas las validaciones
    } else {
        $('#mensaje-modificacion-usuario').html(texto + " correcto");
        $('#mensaje-modificacion-usuario').removeClass();

        $('#mensaje-modificacion-usuario').addClass('alert alert-success alert-info-modal text-center');
        actualizaEstilosInputsMod(texto, 'exito');
    }
}

// Actaliza los estilos de los campos Nombres y Apellidos
function actualizaEstilosInputsMod(tipo, accion) {
    var nombre;
    var paterno;
    var materno;

    if (accion === 'error') {
        if (tipo === 'Nombre') {

            $('#span-usuario-nombre').removeClass()
            $('#span-usuario-nombre').addClass('glyphicon glyphicon-remove form-control-feedback glyphicon-input');


            $('#input-mod-nombre').removeClass();
            $('#input-mod-nombre').addClass('col-xs-12 col-sm-6 col-md-6 has-error');
            nombre = true;
            validaFormularioMod();
        } else if (tipo === 'Apellido paterno') {
            $('#span-usuario-paterno').removeClass()
            $('#span-usuario-paterno').addClass('glyphicon glyphicon-remove form-control-feedback glyphicon-input');


            $('#input-mod-paterno').removeClass();
            $('#input-mod-paterno').addClass('col-xs-12 col-sm-6 col-md-6 has-error');
            paterno = true;
            validaFormularioMod();
        } else if (tipo === 'Apellido materno') {
            $('#span-usuario-materno').removeClass()
            $('#span-usuario-materno').addClass('glyphicon glyphicon-remove form-control-feedback glyphicon-input');

            $('#input-mod-materno').removeClass();
            $('#input-mod-materno').addClass('col-xs-12 col-sm-6 col-md-6 has-error');
            materno = true;
            validaFormularioMod();
        }
    } else if (accion === 'exito') {
        if (tipo === 'Nombre') {
            $('#span-usuario-nombre').removeClass()
            $('#span-usuario-nombre').addClass('glyphicon glyphicon-ok form-control-feedback glyphicon-input');

            $('#input-mod-nombre').removeClass();
            $('#input-mod-nombre').addClass('col-xs-12 col-sm-6 col-md-6 has-success');
            nombre = false;
            validaFormularioMod();
        } else if (tipo === 'Apellido paterno') {
            $('#span-usuario-paterno').removeClass()
            $('#span-usuario-paterno').addClass('glyphicon glyphicon-ok form-control-feedback glyphicon-input');

            $('#input-mod-paterno').removeClass();
            $('#input-mod-paterno').addClass('col-xs-12 col-sm-6 col-md-6 has-success');
            paterno = false;
            validaFormularioMod();
        } else if (tipo === 'Apellido materno') {
            $('#span-usuario-materno').removeClass()
            $('#span-usuario-materno').addClass('glyphicon glyphicon-ok form-control-feedback glyphicon-input');

            $('#input-mod-materno').removeClass();
            $('#input-mod-materno').addClass('col-xs-12 col-sm-6 col-md-6 has-success');
            materno = false;
            validaFormularioMod();
        }
    } else {
        if (tipo === 'Nombre') {
            $('#span-usuario-nombre').removeClass()
            $('#span-usuario-nombre').addClass('glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input');

            $('#input-mod-nombre').removeClass();
            $scope.colorUserNombreClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
            nombre = true;
            validaFormularioMod();
        } else if (tipo === 'Apellido paterno') {
            $('#span-usuario-paterno').removeClass()
            $('#span-usuario-paterno').addClass('glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input');

            $('#input-mod-paterno').removeClass();
            $scope.colorUserPaternoClasses = 'col-xs-12 col-sm-6 col-md-6 has-warning';
            paterno = true;
            validaFormularioMod();
        } else if (tipo === 'Apellido materno') {
            $('#span-usuario-materno').removeClass()
            $('#span-usuario-materno').addClass('glyphicon glyphicon-warning-sign form-control-feedback glyphicon-input');

            $('#input-mod-materno').removeClass();
            $('#span-usuario-materno').addClass('col-xs-12 col-sm-6 col-md-6 has-warning');
            materno = true;
            validaFormularioMod();
        }
    }
}

function validaFormularioMod() {

}

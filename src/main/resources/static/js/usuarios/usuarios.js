
controladorApp.controller('operaciones_usuarios', function($scope, $http) {
    // Alta
    $scope.agregarUsuario = function() {
        $('#modal-formulario').modal('show');
    }

    // Baja
    $scope.eliminarUsuario = function() {
        var fila = $('#tabla-usuarios').bootstrapTable('getSelections');

        if (fila.length < 1) {
            $('#modal-ningun-usuario').modal('show');
        } else {
            $('#cancelar-eliminar-usuario').show();
            $('#aceptar-eliminar-usuario').show();
            $('#cerrar-eliminar-usuario').hide();
            $('#modal-eliminar-usuario h4').html('Confirme eliminación de usuario');
            $('#modal-confirma-eliminar').addClass('alert-danger');
            $('#modal-confirma-eliminar').removeClass('alert-success');
            $('#modal-confirma-eliminar').html(
                '¿Desea eliminar al usuario ' + '<b>' + fila[0].aliasUsuario + '</b>' + '?');
            $('#modal-eliminar-usuario').modal('show');
        }
    }

    // Modificacion
    // if (registroSeleccionado()) {
    //     $('#modal-ningun-usuario').modal('show');
    // } else {
    //     // Se procede con la modificacion
    // }

});

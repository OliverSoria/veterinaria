
controladorApp.controller('operaciones_usuarios', function($scope, $http) {
    // Alta
    $scope.agregarUsuario = function() {
        $('#modal-formulario').modal('show');
    }

    // Baja
    $scope.eliminarUsuario = function() {

        if (registroSeleccionado()) {
            $('#modal-ningun-usuario').modal('show');
        } else {
            $('#modal-eliminar-usuario p').html(
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

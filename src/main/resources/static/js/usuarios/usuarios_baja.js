controladorApp.controller('baja_usuario', function ($scope, $http) {

    $scope.eliminaUsuarioBack = function () {

        var fila = $('#tabla-usuarios').bootstrapTable('getSelections');

        $http({
            method: 'POST',
            url: 'usuarios/baja',
            data: fila[0].aliasUsuario
        }).then(function successCallback() {
            $('#modal-eliminar-usuario h4').html('Operación exitosa');
            $('#cancelar-eliminar-usuario').hide();
            $('#aceptar-eliminar-usuario').hide();
            $('#cerrar-eliminar-usuario').show();
            $('#modal-eliminar-usuario p').html(
                'El usuario ha sido eliminado con éxito');
            $('#modal-eliminar-usuario').modal('show');
            $('#tabla-usuarios').bootstrapTable('refresh');
        }, function errorCallback(response) {
            console.log(response);
        });
    }

});

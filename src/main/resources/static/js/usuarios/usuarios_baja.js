controladorApp.controller('baja_usuario', function ($scope, $http) {

    $scope.eliminaUsuarioBack = function () {

        var fila = $('#tabla-usuarios').bootstrapTable('getSelections');

        $http({
            method: 'POST',
            url: 'usuarios/baja',
            data: fila[0].aliasUsuario
        }).then(function successCallback() {
            $('#tabla-usuarios').bootstrapTable('refresh');
        }, function errorCallback(response) {
            console.log(response);
        });
    }

});

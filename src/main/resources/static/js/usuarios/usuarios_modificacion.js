function modificacionDeUsuario(fila) {
    var fila = $('#tabla-usuarios').bootstrapTable('getSelections');

    $('#modificacion-usuario-alias').val(fila[0].aliasUsuario);
    $('#modificacion-usuario-nombre').val(fila[0].nombreUsuario);
    $('#modificacion-usuario-paterno').val(fila[0].paternoUsuario);
    $('#modificacion-usuario-materno').val(fila[0].maternoUsuario);
    $('#modificacion-usuario-password').val(fila[0].passwordUsuario);
    $('#modificacion-usuario-confirmar').val(fila[0].passwordUsuario);

    switch (fila[0].tipoUsuario) {
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
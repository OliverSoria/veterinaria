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
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
                field: 'aliasUsuario',
                title: 'Usuario',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'nombreUsuario',
                title: 'Nombre',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'paternoUsuario',
                title: 'Apellido Paterno',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'maternoUsuario',
                title: 'Apellido Materno',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'fechaAltaUsuario',
                title: 'Fecha de Alta',
                align: 'center',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'fechaBajaUsuario',
                title: 'Fecha de Baja',
                align: 'center',
                valign: 'middle',
                sortable: true
            },
            {
                field: 'tipoUsuario',
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

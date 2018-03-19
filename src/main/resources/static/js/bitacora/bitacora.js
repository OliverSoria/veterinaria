$(document).ready(function () {
	$('#tabla-bitacora').bootstrapTable({
	    url: 'bitacora/consulta',
	    columns: [
	    	{
	    		field: 'idBitacora',
	    		title: 'Evento',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'idUsuarioBitacora',
	    		title: 'Usuario',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'descripcionBitacora',
	    		title: 'Descripción',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'fechaBitacora',
		    	title: 'Fecha y Hora',
	    		valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	// Eventos despues de que cargo
	    }
	});
});
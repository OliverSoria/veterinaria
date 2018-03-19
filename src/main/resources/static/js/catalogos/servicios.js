$(document).ready(function () {
	$('#tabla-servicios').bootstrapTable({
	    url: 'servicios/consulta',
	    columns: [
	    	{
	    		field: 'codigoServicio',
	    		title: 'Código',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'nombreServicio',
	    		title: 'Nombre',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'descripcionServicio',
		    	title: 'Descripción',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	// Eventos despues de que cargo
	    }
	});
});
$(document).ready(function () {
	$('#tabla-inventario').bootstrapTable({
	    url: 'inventario/consulta',
	    columns: [
	    	{
	    		field: 'codigoInventario',
	    		title: 'Codigo',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'idTipoInventario',
	    		title: 'Tipo',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'cantidadInventario',
	    		title: 'Cantidad',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
		    }, 
		    {
		    	field: 'loteInventario',
		    	title: 'Lote',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},	
		    {
	    		field: 'fechaIngresoInventario',
	    		title: 'Fecha de Ingreso',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'fechaCaducidadInventario',
		    	title: 'Fecha de Caducidad',
	    		valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	// Eventos despues de que cargo
	    }
	});
});
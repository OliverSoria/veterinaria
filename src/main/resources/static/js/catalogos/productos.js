$(document).ready(function () {
	$('#tabla-productos').bootstrapTable({
	    url: 'productos/consulta',
	    columns: [
	    	{
	    		field: 'codigoProducto',
	    		title: 'Código',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'nombreProducto',
	    		title: 'Nombre',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'marcaProducto',
	    		title: 'Marca',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'presentacionProducto',
		    	title: 'Presentación',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'descripcionProducto',
		    	title: 'Descripción',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'numeroMaximoProducto',
		    	title: 'Número Máximo',
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'numeroMinimoProducto',
		    	title: 'Número Mínimo',
		    	align: 'center',
		    	valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	// Eventos despues de que cargo
	    }
	});
});
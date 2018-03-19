$(document).ready(function () {
	$('#tabla-ventas-historico').bootstrapTable({
	    url: 'ventas/consulta',
	    columns: [
	    	{
	    		field: 'idUsuarioVenta',
	    		title: 'Usuario',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'codigoVenta',
	    		title: 'Código Venta',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'cantidadVenta',
	    		title: 'Cantidad',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'fechaVenta',
		    	title: 'Fecha y Hora',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'estatusProductoVenta',
		    	title: 'Forma de Pago',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'clienteVenta',
		    	title: 'Cliente',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'descuentoVenta',
		    	title: 'Descuento',
	    		valign: 'middle',
	    		sortable: true
	    	}
	    	],
	    onLoadSuccess: function (data) {
	    	// Eventos despues de que cargo
	    }
	});
});
$(document).ready(function () {
	$('#tabla-clientes').bootstrapTable({
	    url: 'clientes/consulta',
	    columns: [
	    	{
	    		field: 'nombreCliente',
	    		title: 'Nombre',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'paternoCliente',
	    		title: 'Apellido Paterno',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'maternoCliente',
	    		title: 'Apellido Materno',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'fechaAltaCliente',
		    	title: 'Fecha de Alta',
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'calleCliente',
		    	title: 'Calle',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'numeroCliente',
		    	title: 'Número',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'codigoPostalCliente',
		    	title: 'C.P.',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'coloniaCliente',
		    	title: 'Colonia',
		    	align: 'center',
		    	valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'municipioCliente',
		    	title: 'Municipio',
		    	align: 'left',
		    	valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'entidadFederativa',
		    	title: 'Entidad Federativa',
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
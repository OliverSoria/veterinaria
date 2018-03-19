$(document).ready(function () {
	$('#tabla-medicamentos').bootstrapTable({
	    url: 'medicamentos/consulta',
	    columns: [
	    	{
	    		field: 'codigoMedicamento',
	    		title: 'Código',
	    		align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'nombreMedicamento',
	    		title: 'Nombre',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	}, 
	    	{
	    		field: 'sustanciaMedicamento',
	    		title: 'Sustancia',
	    		align: 'left',
	    		valign: 'middle',
	    		sortable: true
		    }, 
	    	{
		    	field: 'farmaceuticaMedicamento',
		    	title: 'Farmacéutica',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'presentacionMedicamento',
		    	title: 'Presentación',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'descripcionMedicamento',
		    	title: 'Descripción',
		    	align: 'left',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'numeroMaximoMedicamento',
		    	title: 'Número Máximo',
		    	align: 'center',
	    		valign: 'middle',
	    		sortable: true
	    	},
	    	{
		    	field: 'numeroMinimoMedicamento',
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
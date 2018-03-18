package com.sistema.veterinaria.entity;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "CATALOGO_MEDICAMENTOS")
public class MedicamentoEntity implements Serializable {
	
	private static final long serialVersionUID = -4749517750605753747L;

	@Id
	@Column(name = "ID_MEDICAMENTO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idMedicamento;
	
	@Column(name = "CODIGO_MEDICAMENTO")
	private BigInteger codigoMedicamento;  
	
	@Column(name = "NOMBRE_MEDICAMENTO")
	private String nombreMedicamento;  
	
	@Column(name = "SUSTANCIA_MEDICAMENTO")
	private String sustanciaMedicamento;
	
	@Column(name = "FARMACEUTICA_MEDICAMENTO")
	private String farmaceuticaMedicamento;
	
	@Column(name = "PRESENTACION_MEDICAMENTO")
	private String presentacionMedicamento;
	
	@Column(name = "DESCRIPCION_MEDICAMENTO")
	private String descripcionMedicamento;
	
	@Column(name = "NUMERO_MAXIMO_MEDICAMENTO")
	private Integer numeroMaximoMedicamento; 
	
	@Column(name = "NUMERO_MINIMO_MEDICAMENTO")
	private Integer numeroMinimoMedicamento; 
	
}

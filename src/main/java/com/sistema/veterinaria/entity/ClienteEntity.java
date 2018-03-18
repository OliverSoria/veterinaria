package com.sistema.veterinaria.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "CATALOGO_CLIENTES")
public class ClienteEntity implements Serializable {

	private static final long serialVersionUID = -4343423579168035696L;

	@Id
	@Column(name = "ID_CLIENTE")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCliente;  
	
	@Column(name = "NOMBRE_CLIENTE")
	private String nombreCliente;      		

	@Column(name = "PATERNO_CLIENTE")
	private String paternoCliente;     		

	@Column(name = "MATERNO_CLIENTE")
	private String maternoCliente; 
	
	@Column(name = "FECHA_ALTA_CLIENTE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaAltaCliente;      

	@Column(name = "FECHA_BAJA_CLIENTE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaBajaCliente;    
	
	@Column(name = "CALLE_CLIENTE")
	private String calleCliente;  

	@Column(name = "NUMERO_CLIENTE")
	private String numeroCliente;  
	
	@Column(name = "CODIGO_POSTAL_CLIENTE")
	private String codigoPostalCliente;  
	
	@Column(name = "COLONIA_CLIENTE")
	private String coloniaCliente;  
	
	@Column(name = "MUNICIPIO_CLIENTE")
	private String municipioCliente;  
	
	@Column(name = "ENTIDAD_FEDERATIVA")
	private String entidadFederativa;  
	
}

package com.sistema.veterinaria.entity;

import java.io.Serializable;
import java.math.BigInteger;
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
@Table(name = "BITACORA")
public class BitacoraEntity implements Serializable {

	private static final long serialVersionUID = 3070351683920795014L;

	@Id
	@Column(name = "ID_BITACORA ")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idBitacora; 
	
	@Id
	@Column(name = "ID_USUARIO_BITACORA")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idUsuarioBitacora; 
	
	@Column(name = "DESCRIPCION_BITACORA")
	private String descripcionBitacora; 
	
	@Column(name = "FECHA_BITACORA")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaBitacora;  
	
}

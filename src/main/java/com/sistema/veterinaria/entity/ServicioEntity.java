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
@Table(name = "CATALOGO_SERVICIOS")
public class ServicioEntity implements Serializable {
	
	private static final long serialVersionUID = -6784748543689505078L;

	@Id
	@Column(name = "ID_SERVICIO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idServicio;
	
	@Column(name = "CODIGO_SERVICIO")
	private BigInteger codigoServicio;  
	
	@Column(name = "NOMBRE_SERVICIO")
	private String nombreServicio;
	
	@Column(name = "DESCRIPCION_SERVICIO")
	private String descripcionServicio;
}

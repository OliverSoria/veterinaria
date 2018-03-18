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
@Table(name = "PARCIALIDADES")
public class ParcialidadEntity implements Serializable {
	
	private static final long serialVersionUID = 2128995322974380033L;

	@Id
	@Column(name = "ID_PARCIALIDAD")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idParcialidad;
	
	@Column(name = "ID_PARCIALIDAD_VENTA")
	private Integer idParcialidadVenta;
	
	@Column(name = "NUMERO_PARCIALIDAD")
	private Integer numeroParcialidad;
	
	@Column(name = "CANTIDAD_PARCIALIDAD")
	private Double cantidadParcialidad;
	
	@Column(name = "FECHA_PARCIALIDAD")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaParcialidad;    
	
}

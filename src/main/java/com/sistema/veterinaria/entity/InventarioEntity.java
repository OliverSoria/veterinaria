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
@Table(name = "INVENTARIO_ALMACEN")
public class InventarioEntity implements Serializable {
	
	private static final long serialVersionUID = 5587055507887282556L;

	@Id
	@Column(name = "ID_TIPO_INVENTARIO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idTipoInventario;
	
	@Column(name = "CODIGO_INVENTARIO")
	private BigInteger codigoInventario;
	
	@Column(name = "FECHA_INGRESO_INVENTARIO")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaIngresoInventario;      
	
	@Column(name = "CANTIDAD_INVENTARIO")
	private Integer cantidadInventario;	
	
	@Column(name = "FECHA_CADUCIDAD_INVENTARIO")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaCaducidadInventario;
	
	@Column(name = "LOTE_INVENTARIO")
	private Integer loteInventario;	
}

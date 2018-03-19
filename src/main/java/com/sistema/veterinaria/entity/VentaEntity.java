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
@Table(name = "HISTORICO_VENTAS")
public class VentaEntity implements Serializable {
	
	private static final long serialVersionUID = -7439394461735247309L;

	@Id
	@Column(name = "ID_VENTA")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idVenta;
	
	@Column(name = "ID_USUARIO_VENTA")
	private Integer idUsuarioVenta;
	
	@Column(name = "CODIGO_VENTA")
	private BigInteger codigoVenta;
	
	@Column(name = "CANTIDAD_VENTA")
	private Double cantidadVenta;
	
	@Column(name = "FECHA_VENTA")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaVenta;   
	
	@Column(name = "ESTATUS_PRODUCTO_VENTA")
	private String estatusProductoVenta;  
	
	@Column(name = "CLIENTE_VENTA")
	private Integer clienteVenta;
	
	@Column(name = "DESCUENTO_VENTA")
	private Integer descuentoVenta;
}
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
@Table(name = "CATALOGO_PRODUCTOS")
public class ProductoEntity implements Serializable {
	
	private static final long serialVersionUID = -3139236624734416669L;

	@Id
	@Column(name = "ID_PRODUCTO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idProducto;
	
	@Column(name = "CODIGO_PRODUCTO")
	private BigInteger codigoProducto; 
	
	@Column(name = "NOMBRE_PRODUCTO")
	private String nombreProducto;  
	
	@Column(name = "MARCA_PRODUCTO")
	private String marcaProducto;
	
	@Column(name = "PRESENTACION_PRODUCTO")
	private String presentacionProducto;
	
	@Column(name = "DESCRIPCION_PRODUCTO")
	private String descripcionProducto;
	
	@Column(name = "NUMERO_MAXIMO_PRODUCTO")
	private Integer numeroMaximoProducto; 
	
	@Column(name = "NUMERO_MINIMO_PRODUCTO")
	private Integer numeroMinimoProducto; 
	
}

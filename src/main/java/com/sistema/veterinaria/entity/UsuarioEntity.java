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
@Table(name = "catalogo_usuarios")
public class UsuarioEntity implements Serializable {
	
	private static final long serialVersionUID = 5938961363517448690L;

	@Id
	@Column(name = "id_usuario")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger id_usuario;          		

	@Column(name = "alias_usuario")
	private String alias_usuario;       		

	@Column(name = "nombre_usuario")
	private String nombre_usuario;      		

	@Column(name = "paterno_usuario")
	private String paterno_usuario;     		

	@Column(name = "materno_usuario")
	private String materno_usuario;     		

	@Column(name = "password_usuario")
	private String password_usuario;    		

	@Column(name = "fecha_alta_usuario")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha_alta_usuario;      

	@Column(name = "fecha_baja_usuario")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha_baja_usuario;      

	@Column(name = "tipo_usuario")
	private String tipo_usuario;

}

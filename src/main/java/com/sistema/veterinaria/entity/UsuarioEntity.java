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
@Table(name = "CATALOGO_USUARIOS")
public class UsuarioEntity implements Serializable {
	
	private static final long serialVersionUID = 5938961363517448690L;

	@Id
	@Column(name = "ID_USUARIO")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger idUsuario;          		

	@Column(name = "ALIAS_USUARIO")
	private String aliasUsuario;       		

	@Column(name = "NOMBRE_USUARIO")
	private String nombreUsuario;      		

	@Column(name = "PATERNO_USUARIO")
	private String paternoUsuario;     		

	@Column(name = "MATERNO_USUARIO")
	private String maternoUsuario;     		

	@Column(name = "PASSWORD_USUARIO")
	private String passwordUsuario;    		

	@Column(name = "FECHA_ALTA_USUARIO")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaAltaUsuario;      

	@Column(name = "FECHA_BAJA_USUARIO")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaBajaUsuario;      

	@Column(name = "TIPO_USUARIO")
	private String tipoUsuario;

}

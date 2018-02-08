package com.sistema.veterinaria.dto;

import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "catalogo_usuarios")
public class UsuarioDto implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id_usuario")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_usuario;          		

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
	private LocalDateTime fecha_alta_usuario;      

	@Column(name = "fecha_baja_usuario")
	private LocalDateTime fecha_baja_usuario;      

	@Column(name = "tipo_usuario")
	private String tipo_usuario;

	public Integer getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Integer id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getAlias_usuario() {
		return alias_usuario;
	}

	public void setAlias_usuario(String alias_usuario) {
		this.alias_usuario = alias_usuario;
	}

	public String getNombre_usuario() {
		return nombre_usuario;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}

	public String getPaterno_usuario() {
		return paterno_usuario;
	}

	public void setPaterno_usuario(String paterno_usuario) {
		this.paterno_usuario = paterno_usuario;
	}

	public String getMaterno_usuario() {
		return materno_usuario;
	}

	public void setMaterno_usuario(String materno_usuario) {
		this.materno_usuario = materno_usuario;
	}

	public String getPassword_usuario() {
		return password_usuario;
	}

	public void setPassword_usuario(String password_usuario) {
		this.password_usuario = password_usuario;
	}
	
	public LocalDateTime getFecha_alta_usuario() {
		return fecha_alta_usuario;
	}

	public void setFecha_alta_usuario(LocalDateTime fecha_alta_usuario) {
		this.fecha_alta_usuario = fecha_alta_usuario;
	}

	public LocalDateTime getFecha_baja_usuario() {
		return fecha_baja_usuario;
	}

	public void setFecha_baja_usuario(LocalDateTime fecha_baja_usuario) {
		this.fecha_baja_usuario = fecha_baja_usuario;
	}

	public String getTipo_usuario() {
		return tipo_usuario;
	}

	public void setTipo_usuario(String tipo_usuario) {
		this.tipo_usuario = tipo_usuario;
	}  
}

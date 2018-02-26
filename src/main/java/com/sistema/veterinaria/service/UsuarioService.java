package com.sistema.veterinaria.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.UsuarioEntity;
import com.sistema.veterinaria.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	UsuarioRepository usuario;
	
	public List<UsuarioEntity> getUsers() throws Exception {
		
		List<UsuarioEntity> retorno = null;
		
		try {
			retorno = usuario.findAll();
		} catch (Exception e) {
			throw e;
		}
		
		return retorno;
	}
	
	public void saveUser(UsuarioEntity user) throws Exception {
		
		// Validaciones
		if (user.getAlias_usuario() == null || 
				user.getAlias_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getNombre_usuario() == null || 
				user.getNombre_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getPaterno_usuario() == null || 
				user.getPaterno_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getMaterno_usuario() == null || 
				user.getMaterno_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getMaterno_usuario() == null || 
				user.getMaterno_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getPassword_usuario() == null || 
				user.getPassword_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getTipo_usuario() == null || 
				user.getTipo_usuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getTipo_usuario() == null || 
				user.getTipo_usuario().trim().isEmpty()) {
			throw new Exception();
		}
		
//		user.setFecha_alta_usuario(LocalDateTime.now());
		
		switch (user.getTipo_usuario()) {
		
		case "Administrador" :
			user.setTipo_usuario("A");
			break;
			
		case "Supervisor" :
			user.setTipo_usuario("S");
			break;
		
		case "Vendedor" :
			user.setTipo_usuario("V");
			break;
		
		default :
			throw new Exception();
		}
		
		usuario.save(user);
		
	}
	
	public void updateUser(UsuarioEntity user) throws Exception {
	//	user.setFecha_baja_usuario(LocalDateTime.now());
		
		usuario.save(user);
	}

}

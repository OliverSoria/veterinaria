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
		if (user.getAliasUsuario() == null || 
				user.getAliasUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getNombreUsuario() == null || 
				user.getNombreUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getPaternoUsuario() == null || 
				user.getPaternoUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getMaternoUsuario() == null || 
				user.getMaternoUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getMaternoUsuario() == null || 
				user.getMaternoUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getPasswordUsuario() == null || 
				user.getPasswordUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getTipoUsuario() == null || 
				user.getTipoUsuario().trim().isEmpty()) {
			throw new Exception();
		} else if (user.getTipoUsuario() == null || 
				user.getTipoUsuario().trim().isEmpty()) {
			throw new Exception();
		}
		// Pendiente ver tema de fecha
//		user.setFecha_alta_usuario(LocalDateTime.now());
		
		switch (user.getTipoUsuario()) {
		
		case "Administrador" :
			user.setTipoUsuario("A");
			break;
			
		case "Supervisor" :
			user.setTipoUsuario("S");
			break;
		
		case "Vendedor" :
			user.setTipoUsuario("V");
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

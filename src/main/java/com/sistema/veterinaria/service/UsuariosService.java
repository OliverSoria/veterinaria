package com.sistema.veterinaria.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.UsuarioEntity;
import com.sistema.veterinaria.repository.IUsuarioRepository;
import com.sistema.veterinaria.util.ExceptionCustomized;

@Service
public class UsuariosService {
	
	@Autowired
	private IUsuarioRepository usuarioRepository;
	
	public List<UsuarioEntity> getUsers() throws Exception {
		
		List<UsuarioEntity> retorno = null;
		
		try {
			retorno = usuarioRepository.findAll();
		} catch (Exception e) {
			throw e;
		}
		
		return retorno;
	}
	
	public void saveUser(UsuarioEntity user) throws Exception {
		
		// Validaciones
	    if (user.getIdUsuario() != null ) {    
	    	throw new ExceptionCustomized("Se detectó ID del Usuario");
	    } else if (user.getAliasUsuario() == null || 
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

		user.setFechaAltaUsuario(new Date());
		
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
		
		usuarioRepository.save(user);
		
	}
	
	public void updateUser(UsuarioEntity user) throws Exception {
		usuarioRepository.save(user);
	}
	
	public void deleteUser(String aliasUsuario) throws Exception {
		if (aliasUsuario == null || !aliasUsuario.trim().isEmpty()) {
			throw new ExceptionCustomized("Usuario Inválido");
		}
		
		usuarioRepository.delete(
				usuarioRepository.findAllByAliasUsuario(aliasUsuario));
	}
}

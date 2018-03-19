package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.UsuarioEntity;
import com.sistema.veterinaria.service.UsuariosService;
import com.sistema.veterinaria.util.ExceptionCustomized;
import com.sistema.veterinaria.util.ResponseEntityCustomized;

@RestController
@RequestMapping("/administrador/usuarios")
public class UsuariosRestController {
	
	@Autowired
	UsuariosService usuarioService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<UsuarioEntity> consultaUsuarios() throws Exception {
		return usuarioService.getUsers();
	}
	
	@RequestMapping(value="/alta", 
			consumes = "application/json", 
			produces = "application/json", 
			method = RequestMethod.POST)
	public ResponseEntity<String> altaUsuarios(@RequestBody UsuarioEntity usuarioEntity) throws Exception {
		try {
			usuarioService.saveUser(usuarioEntity);
			return new ResponseEntityCustomized<String>
				("Usuario dado de alta con éxito",HttpStatus.CREATED);
		} catch (ExceptionCustomized ex) {
			return new ResponseEntityCustomized<String>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		} catch (Exception ex) {
			return new ResponseEntityCustomized<String>("Error Interno",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value="/baja", 
			consumes = "application/json", 
			produces = "application/json", 
			method = RequestMethod.POST)
	public ResponseEntity<String> bajaUsuarios(@RequestBody String aliasUsuario) throws Exception {
		try {
			usuarioService.deleteUser(aliasUsuario);
			return new ResponseEntityCustomized<String>
				("Usuario eliminado con éxito",HttpStatus.CREATED);
		} catch (ExceptionCustomized ex) {
			return new ResponseEntityCustomized<String>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		} catch (Exception ex) {
			return new ResponseEntityCustomized<String>("Error Interno",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
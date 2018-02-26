package com.sistema.veterinaria.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.UsuarioEntity;
import com.sistema.veterinaria.service.UsuarioService;



@RestController
@RequestMapping("/administrador")
public class UsuariosRestController {
	
	@Autowired
	UsuarioService usuario;
	
	@RequestMapping(value="/usuarios/consulta", method = RequestMethod.GET)
	public @ResponseBody List<UsuarioEntity> consultaUsuarios() throws Exception {
		return usuario.getUsers();
	}
	
	@RequestMapping(value="/usuarios/alta", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity altaUsuarios(@RequestBody UsuarioEntity usuarioEntity) throws Exception {
//		try {
//			usuario.saveUser(usuarioEntity);
//			return ResponseEntity.status(HttpStatus.CREATED).
//					body(JSONObject.quote("El usuario ha sido dado de alta con exito"));
//		} catch (Exception ex) {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
//					body(JSONObject.quote("Ocurrio un error"));
//		}
		return null;
		
	}
}

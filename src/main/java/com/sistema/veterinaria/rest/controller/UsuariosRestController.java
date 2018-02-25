package com.sistema.veterinaria.rest.controller;

import java.util.ArrayList;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.dto.UsuarioDto;

@RestController
@RequestMapping("/administrador")
public class UsuariosRestController {
	
//	@Autowired
//	UsuariosBo usuariosBo;
//	
//	@RequestMapping(value="/usuarios/consulta", method = RequestMethod.GET)
//	public @ResponseBody ArrayList<UsuarioDto> consultaUsuarios() throws Exception {
//		return usuariosBo.getUsers();
//	}
//	
//	@RequestMapping(value="/usuarios/alta", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
//	public ResponseEntity altaUsuarios(@RequestBody UsuarioDto usuario) throws Exception {
//		try {
//			usuariosBo.saveUser(usuario);
//			return ResponseEntity.status(HttpStatus.CREATED).
//					body(JSONObject.quote("El usuario ha sido dado de alta con exito"));
//		} catch (Exception ex) {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
//					body(JSONObject.quote("Ocurrio un error"));
//		}
//		
//		
//	}
}

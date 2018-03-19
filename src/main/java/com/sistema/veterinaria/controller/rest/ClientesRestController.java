package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.ClienteEntity;
import com.sistema.veterinaria.service.ClientesService;

@RestController
@RequestMapping("/administrador/clientes")
public class ClientesRestController {
	@Autowired
	ClientesService clientesService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<ClienteEntity> consultaUsuarios() throws Exception {
		return clientesService.getClientes();
	}
}

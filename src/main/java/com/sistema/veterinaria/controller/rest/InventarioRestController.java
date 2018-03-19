package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.InventarioEntity;
import com.sistema.veterinaria.service.InventarioService;

@RestController
@RequestMapping("/supervisor/inventario")
public class InventarioRestController {
	@Autowired
	InventarioService inventarioService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<InventarioEntity> consultaUsuarios() throws Exception {
		return inventarioService.getInventario();
	}
}

package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.BitacoraEntity;
import com.sistema.veterinaria.service.BitacoraService;

@RestController
@RequestMapping("/supervisor/bitacora")
public class BitacoraRestController {
	@Autowired
	private BitacoraService bitacoraService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<BitacoraEntity> consultaUsuarios() throws Exception {
		return bitacoraService.getBitacora();
	}
}

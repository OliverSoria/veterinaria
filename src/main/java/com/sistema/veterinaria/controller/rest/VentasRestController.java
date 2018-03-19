package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.VentaEntity;
import com.sistema.veterinaria.service.VentasService;

@RestController
@RequestMapping("/usuario/ventas")
public class VentasRestController {
	@Autowired
	VentasService ventasService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<VentaEntity> consultaVentas() throws Exception {
		return ventasService.getVentas();
	}
}

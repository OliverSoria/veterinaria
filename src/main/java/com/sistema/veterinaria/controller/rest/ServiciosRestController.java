package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.ServicioEntity;
import com.sistema.veterinaria.service.ServiciosService;

@RestController
@RequestMapping("/supervisor/servicios")
public class ServiciosRestController {
	@Autowired
	ServiciosService serviciosService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<ServicioEntity> consultaUsuarios() throws Exception {
		return serviciosService.getServicios();
	}
}

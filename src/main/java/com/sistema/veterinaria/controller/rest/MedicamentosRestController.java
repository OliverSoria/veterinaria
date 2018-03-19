package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.MedicamentoEntity;
import com.sistema.veterinaria.service.MedicamentosService;

@RestController
@RequestMapping("/supervisor/medicamentos")
public class MedicamentosRestController {
	@Autowired
	MedicamentosService medicamentosService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<MedicamentoEntity> consultaUsuarios() throws Exception {
		return medicamentosService.getMedicamentos();
	}
}

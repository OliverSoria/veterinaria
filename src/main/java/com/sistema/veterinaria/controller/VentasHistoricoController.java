package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/usuario")
public class VentasHistoricoController {
	
	@RequestMapping(value = "/ventas-consulta", method = RequestMethod.GET)
	public String consultarVentas(Model model) {
		return "jsp/ventas/ventasHistorico";
	}
}
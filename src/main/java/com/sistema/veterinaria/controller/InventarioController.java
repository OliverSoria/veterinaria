package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/supervisor")
public class InventarioController {
	
	@RequestMapping(value = "/inventario", method = RequestMethod.GET)
	public String inventario(Model model) {
		return "jsp/inventario/inventario";
	}
}
package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/supervisor")
public class ProductosController {
	
	@RequestMapping(value = "/productos", method = RequestMethod.GET)
	public String productos(Model model) {
		return "jsp/catalogos/productos";
	}
}

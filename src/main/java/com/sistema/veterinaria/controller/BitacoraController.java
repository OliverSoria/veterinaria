package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/supervisor")
public class BitacoraController {
	
	@RequestMapping(value = "/bitacora", method = RequestMethod.GET)
	public String consultarVentas(Model model) {
		return "/bitacora/bitacora";
	}
}

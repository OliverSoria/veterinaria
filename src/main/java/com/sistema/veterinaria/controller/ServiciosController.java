package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/supervisor")
public class ServiciosController {
	
	@RequestMapping(value = "/servicios", method = RequestMethod.GET)
	public String servicios(Model model) {
		return "jsp/catalogos/servicios";
	}
}

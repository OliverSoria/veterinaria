package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/supervisor")
public class MedicamentosController {
	
	@RequestMapping(value = "/medicamentos", method = RequestMethod.GET)
	public String medicamentos(Model model) {
		return "/catalogos/medicamentos";
	}
}

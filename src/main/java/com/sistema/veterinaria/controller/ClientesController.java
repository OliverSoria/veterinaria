package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/administrador")
public class ClientesController {

	@RequestMapping(value = "/clientes", method = RequestMethod.GET)
	public String clientes(Model model) {
		return "/clientes/clientes";
	}
}

package com.sistema.veterinaria.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/administrador")
public class UsuariosController {

	@RequestMapping(value = "/usuarios", method = RequestMethod.GET)
	public String home(Model model) {
		return "/usuarios/usuarios";
	}
}
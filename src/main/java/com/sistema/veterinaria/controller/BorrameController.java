package com.sistema.veterinaria.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BorrameController {

	@RequestMapping(value="/")
	public String borrame(Model model) {
		return "Hola Daniel";
	}
}

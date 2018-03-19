package com.sistema.veterinaria.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.veterinaria.entity.ProductoEntity;
import com.sistema.veterinaria.service.ProductosService;

@RestController
@RequestMapping("/supervisor/productos")
public class ProductosRestController {
	@Autowired
	ProductosService productosService;
	
	@RequestMapping(value="/consulta", method = RequestMethod.GET)
	public @ResponseBody List<ProductoEntity> consultaUsuarios() throws Exception {
		return productosService.getProductos();
	}
}

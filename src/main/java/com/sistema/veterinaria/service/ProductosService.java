package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.ProductoEntity;
import com.sistema.veterinaria.repository.IProductoRepository;

@Service
public class ProductosService {
	@Autowired
	private IProductoRepository productoRepository;
	
	public List<ProductoEntity> getProductos() {
		return productoRepository.findAll();
	}
}

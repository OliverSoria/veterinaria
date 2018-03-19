package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.InventarioEntity;
import com.sistema.veterinaria.repository.IInventarioRepository;

@Service
public class InventarioService {
	@Autowired
	private IInventarioRepository inventarioRepository; 
	
	public List<InventarioEntity> getInventario() {
		return inventarioRepository.findAll();
	}
}

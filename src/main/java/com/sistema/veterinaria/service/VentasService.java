package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.VentaEntity;
import com.sistema.veterinaria.repository.IVentaRepository;

@Service
public class VentasService {
	@Autowired
	private IVentaRepository ventaRepository;
	
	public List<VentaEntity> getVentas() {
		return ventaRepository.findAll();
	}
}

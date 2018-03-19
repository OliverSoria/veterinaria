package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.ServicioEntity;
import com.sistema.veterinaria.repository.IServicioRepository;

@Service
public class ServiciosService {
	@Autowired
	private IServicioRepository servicioRepository;
	
	public List<ServicioEntity> getServicios() {
		return servicioRepository.findAll();
	}
}

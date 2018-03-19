package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.ParcialidadEntity;
import com.sistema.veterinaria.repository.IParcialidadRepository;

@Service
public class ParcialidadesService {
	@Autowired
	private IParcialidadRepository parcialidadRepository;
	
	public List<ParcialidadEntity> getParcialidades() {
		return parcialidadRepository.findAll();
	}
}

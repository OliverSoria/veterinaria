package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.MedicamentoEntity;
import com.sistema.veterinaria.repository.IMedicamentoRepository;

@Service
public class MedicamentosService {
	@Autowired
	private IMedicamentoRepository medicamentoRepository;
	
	public List<MedicamentoEntity> getMedicamentos() {
		return medicamentoRepository.findAll();
	}
}

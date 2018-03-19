package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.BitacoraEntity;
import com.sistema.veterinaria.repository.IBitacoraRepository;

@Service
public class BitacoraService {
	@Autowired
	private IBitacoraRepository bitacoraRepository;
	
	public List<BitacoraEntity> getBitacora() {
		return bitacoraRepository.findAll();
	}
}

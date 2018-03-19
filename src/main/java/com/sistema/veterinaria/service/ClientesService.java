package com.sistema.veterinaria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.veterinaria.entity.ClienteEntity;
import com.sistema.veterinaria.repository.IClienteRepository;

@Service
public class ClientesService {
	@Autowired
	private IClienteRepository clienteRepository;
	
	public List<ClienteEntity> getClientes() {
		return clienteRepository.findAll();
	}
}

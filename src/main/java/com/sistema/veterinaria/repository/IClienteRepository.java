package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.ClienteEntity;

@Repository
public interface IClienteRepository extends JpaRepository<ClienteEntity, Integer> {

}

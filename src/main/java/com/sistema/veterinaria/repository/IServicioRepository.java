package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.ServicioEntity;

@Repository
public interface IServicioRepository extends JpaRepository<ServicioEntity, String> {

}

package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.VentaEntity;

@Repository
public interface IVentaRepository extends JpaRepository<VentaEntity, Integer> {

}

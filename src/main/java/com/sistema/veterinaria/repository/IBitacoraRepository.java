package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.BitacoraEntity;

@Repository
public interface IBitacoraRepository extends JpaRepository<BitacoraEntity, Integer> {

}

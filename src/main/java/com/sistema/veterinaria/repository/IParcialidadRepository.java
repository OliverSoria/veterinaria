package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.ParcialidadEntity;

@Repository
public interface IParcialidadRepository extends JpaRepository<ParcialidadEntity, Integer> {

}

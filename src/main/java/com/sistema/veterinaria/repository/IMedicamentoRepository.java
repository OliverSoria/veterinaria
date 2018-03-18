package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.MedicamentoEntity;

@Repository
public interface IMedicamentoRepository extends JpaRepository<MedicamentoEntity, String> {

}

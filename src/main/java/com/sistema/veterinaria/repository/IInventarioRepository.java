package com.sistema.veterinaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.veterinaria.entity.InventarioEntity;

@Repository
public interface IInventarioRepository extends JpaRepository<InventarioEntity, String> {

}

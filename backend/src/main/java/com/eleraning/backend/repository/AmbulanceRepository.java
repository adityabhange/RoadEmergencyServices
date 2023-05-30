package com.eleraning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eleraning.backend.model.Ambulance;

public interface AmbulanceRepository extends JpaRepository<Ambulance, Long>{

}
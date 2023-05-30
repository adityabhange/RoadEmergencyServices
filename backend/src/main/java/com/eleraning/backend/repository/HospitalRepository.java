package com.eleraning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eleraning.backend.model.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Long>{

}
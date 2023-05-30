package com.eleraning.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eleraning.backend.model.Hospital;
import com.eleraning.backend.repository.HospitalRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class HospitalController {
	

	@Autowired
	private HospitalRepository hospitalRepository;

	

	@GetMapping("/hospitalList")
	public List<Hospital> getAllHospital() {
		return hospitalRepository.findAll();
	}
	@PostMapping("/addhospital")
	public Hospital createhospital(@RequestBody Hospital hospital) {
		
		hospital.setName(hospital.getName());
		hospital.setEmail(hospital.getEmail());
		hospital.setAdress(hospital.getAdress());
		hospital.setLatitude(hospital.getLatitude());
		hospital.setLongitude(hospital.getLongitude());
		hospital.setSpeciality(hospital.getSpeciality());
		
		return hospitalRepository.save(hospital);
	}

	
	}

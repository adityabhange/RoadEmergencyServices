package com.eleraning.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eleraning.backend.exception.ResourceNotFoundException;
import com.eleraning.backend.model.Ambulance;
import com.eleraning.backend.repository.AmbulanceRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AmbulanceController {
	
	@Autowired
	private AmbulanceRepository ambulanceRepository;
	
	@GetMapping("/ambulanceList")
	public List<Ambulance> getAllAmbulance(){
		return ambulanceRepository.findAll();
	}
	
	@PostMapping("/addAmbulance")
	public Ambulance saveAmbulance(@RequestBody Ambulance ambulance) {
		ambulance.setAmbulancedetail(ambulance.getAmbulancedetail());
		ambulance.setFeatures(ambulance.getFeatures());
		ambulance.setDrivername(ambulance.getDrivername());
		ambulance.setPhone(ambulance.getPhone());
		ambulance.setEmail(ambulance.getEmail());
		ambulance.setVehicleno(ambulance.getVehicleno());
		ambulance.setLatitude(ambulance.getLatitude());
		ambulance.setLongitude(ambulance.getLongitude());
		
		
		return ambulanceRepository.save(ambulance);
	}
	
	@PutMapping("/ambulances/{id}")
	public ResponseEntity<Ambulance> updateAmbulance(@PathVariable Long id, @RequestBody Ambulance ambulanceDetails){
		Ambulance ambulance = ambulanceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Course not exist with id: "+id));
		ambulance.setAmbulancedetail(ambulance.getAmbulancedetail());
		ambulance.setFeatures(ambulance.getFeatures());
		ambulance.setDrivername(ambulance.getDrivername());
		ambulance.setPhone(ambulance.getPhone());
		ambulance.setEmail(ambulance.getEmail());
		ambulance.setVehicleno(ambulance.getVehicleno());
		ambulance.setLatitude(ambulance.getLatitude());
		ambulance.setLongitude(ambulance.getLongitude());
		Ambulance updatedAmbulance = ambulanceRepository.save(ambulance);
		return ResponseEntity.ok(updatedAmbulance); 
	}
	
	@DeleteMapping("/ambulances/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long id){
		Ambulance ambulance = ambulanceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ambulance not exist with id: "+id));
		ambulanceRepository.delete(ambulance);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response); 
	}
}

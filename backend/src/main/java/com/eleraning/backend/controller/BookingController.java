package com.eleraning.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eleraning.backend.model.Booking;
import com.eleraning.backend.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BookingController {
	@Autowired
	private BookingRepository bookingRepository;
	
	@GetMapping("/allbooking")
	public List<Booking> getAllBooking(){
		return bookingRepository.findAll();
	}
	
	@PostMapping("/addbooking")
	public Booking saveBoking(@RequestBody Booking booking) {
		
		booking.setAmbulancedetail(booking.getAmbulancedetail());
		booking.setFullname(booking.getFullname());
		booking.setPhone(booking.getPhone());
		booking.setEmail(booking.getEmail());
		booking.setAmbulancedetail(booking.getAmbulancedetail());
		booking.setFeatures(booking.getFeatures());
		booking.setVehicleno(booking.getVehicleno());
		booking.setDrivername(booking.getDrivername());
		booking.setDriver_phone(booking.getDriver_phone());
		booking.setStatus("NOT AVAILABLE");
		booking.setLatitude(booking.getLatitude());
		booking.setLongitude(booking.getLongitude());
		
		
		
		
		
		
		return bookingRepository.save(booking);
	}
	

}

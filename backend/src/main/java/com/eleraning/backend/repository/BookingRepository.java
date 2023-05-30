package com.eleraning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eleraning.backend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, String> {

}

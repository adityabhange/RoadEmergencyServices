package com.eleraning.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Data;

@Data
@Entity
@Table(name="booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="fullname")
	private String fullname;
	@Column(name = "phone")
	private String phone;
	@Column(name = "email")
	private String email;
	@Column(name = "ambulancedetail")
	private String ambulancedetail;
	
	@Column(name = "features")
	private String features;
	@Column(name = "vehicleno")
	private String vehicleno;
	@Column(name = "drivername")
	private String drivername;
	@Column(name = "driver_phone")
	private String driver_phone;
	
	
	
	@Column(name = "status")
	private String status;
	@Transient
	private String latitude;
	
	@Transient
	private String longitude;
}

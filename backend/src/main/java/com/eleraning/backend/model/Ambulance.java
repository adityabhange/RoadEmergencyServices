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
@Table(name="ambulance")
public class Ambulance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "ambulancedetail")
	private String ambulancedetail;
	
	@Column(name = "features")
	private String features;
	@Column(name = "drivername")
	private String drivername;
	@Column(name = "phone")
	private String phone;
	@Column(name = "email")
	private String email;
	@Column(name = "vehicleno")
	private String vehicleno;
	@Column(name = "status")
	private String status;
	@Column(name = "latitude")
	private String latitude;
	
	@Column(name = "longitude")
	private String longitude;
	
	
	
	
}

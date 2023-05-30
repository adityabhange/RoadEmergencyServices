package com.eleraning.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="hospital")

public class Hospital {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name")
	private String name;
	
	@Column(name = "phone")
	private String adress;
	
	
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "speciality")
	private String speciality;
	
	@Column(name = "latitude")
	private String latitude;
	@Column(name = "longitude")
	private String longitude;
	
	}

package com.eleraning.backend.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Data
@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "phone")
	private String phone;
	
	
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	@Column(name = "address")
	private String address;
	@Column(name = "latitude")
	private String latitude;
	@Column(name = "longitude")
	private String longitude;
}
	
	
	
	
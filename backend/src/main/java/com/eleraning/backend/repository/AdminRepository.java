package com.eleraning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eleraning.backend.model.Admin;
import com.eleraning.backend.model.User;

public interface AdminRepository extends JpaRepository<Admin, Long>{

	public Admin getUserByEmailAndPassword(String mail,String password);
}
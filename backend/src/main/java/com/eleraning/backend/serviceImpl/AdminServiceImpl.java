package com.eleraning.backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eleraning.backend.model.Admin;
import com.eleraning.backend.repository.AdminRepository;
import com.eleraning.backend.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public Admin authenticate(Admin admin) {
		// TODO Auto-generated method stub
		return adminRepository.getUserByEmailAndPassword(admin.getEmail(),admin.getPassword());
	}

}

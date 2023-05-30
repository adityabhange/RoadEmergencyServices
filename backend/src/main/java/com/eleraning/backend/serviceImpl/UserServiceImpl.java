package com.eleraning.backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eleraning.backend.model.User;
import com.eleraning.backend.repository.UserRepository;
import com.eleraning.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;
	@Override
	public User authenticate(User user) {
		// TODO Auto-generated method stub
		return userRepo.getUserByEmailAndPassword(user.getEmail(),user.getPassword());
	}

}

package com.eleraning.backend.service;

import com.eleraning.backend.model.User;

public interface UserService {

	User authenticate(User user);
}

package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import com.mhenrik.kulcssoft.hw.backend.repository.UserRepository;

import java.util.List;

public class UserService {

    private UserRepository userRepository;


    public User getUserById(long userId) {
        return userRepository.getOne(userId);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}

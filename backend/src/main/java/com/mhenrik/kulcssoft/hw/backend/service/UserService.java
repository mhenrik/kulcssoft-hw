package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import com.mhenrik.kulcssoft.hw.backend.repository.UserRepository;

public class UserService {

    private UserRepository userRepository;


    public User getUserById(long userId) {
        return userRepository.getOne(userId);
    }
}

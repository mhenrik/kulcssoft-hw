package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import com.mhenrik.kulcssoft.hw.backend.repository.LoginRepository;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Admin login(String username, String password) {
        Admin admin = loginRepository.findAdminByUsername(username);
        if (admin != null && BCrypt.checkpw(password, admin.getPassword())){
            return admin;
        }
        return null;
    }

    private String encrypt(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt()); }

    public void saveAdmin(Admin admin) {
        String password = admin.getPassword();
        password = this.encrypt(password);
        admin.setPassword(password);
        loginRepository.save(admin);
    }
}

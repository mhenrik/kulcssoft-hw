package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import com.mhenrik.kulcssoft.hw.backend.repository.LoginRepository;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class LoginService {

    public static final UUID key = UUID.randomUUID();

    private String token;

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

    public void createToken(){
        this.token = this.encrypt(key.toString());
        System.out.println(this.token);
    }

    public boolean checkToken(String token){
       return token.equals(this.token);
    }

    public String getToken() {
        return token;
    }
}

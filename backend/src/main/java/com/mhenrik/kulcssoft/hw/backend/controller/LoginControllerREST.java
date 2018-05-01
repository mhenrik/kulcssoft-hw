package com.mhenrik.kulcssoft.hw.backend.controller;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import com.mhenrik.kulcssoft.hw.backend.service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.SessionScope;

import javax.servlet.http.HttpSession;
import java.util.Collections;

@RestController
public class LoginControllerREST {

    private LoginService loginService;

    public LoginControllerREST(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity login(
            @RequestParam String username,
            @RequestParam String password) {
        Admin admin = loginService.login(username, password);
        if (admin != null) {
            loginService.createToken();
            return ResponseEntity.ok(Collections.singletonMap("token", loginService.getToken()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "wrong username or password"));
    }
}

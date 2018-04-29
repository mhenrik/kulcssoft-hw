package com.mhenrik.kulcssoft.hw.backend.controller;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import com.mhenrik.kulcssoft.hw.backend.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControllerREST {

    private UserService userService;

    public UserControllerREST(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUsers(){
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping(value = "/user/{userId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserById(
            @PathVariable(value = "userId") Integer userId) {
        User user = userService.getUserById((long) userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/user/names/{username}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserByUsername(
            @PathVariable(value = "username") String username) {
        User user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/user/emails/{email}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserByEmail(
            @PathVariable(value = "email") String email) {
        User user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }
}

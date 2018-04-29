package com.mhenrik.kulcssoft.hw.backend.controller;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import com.mhenrik.kulcssoft.hw.backend.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
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

    @PostMapping(value = "/user", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity addUser(
            @RequestParam String username,
            @RequestParam String email) {
        User user = new User(username, email);
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "/user/{userId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Void> deleteUserById (
            @PathVariable Integer userId) {
        userService.deleteUserById((long) userId);
        return ResponseEntity.noContent().build();

    }
}

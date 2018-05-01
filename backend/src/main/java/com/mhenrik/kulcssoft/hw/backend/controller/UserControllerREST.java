package com.mhenrik.kulcssoft.hw.backend.controller;

import com.mhenrik.kulcssoft.hw.backend.model.User;
import com.mhenrik.kulcssoft.hw.backend.service.LoginService;
import com.mhenrik.kulcssoft.hw.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Collections;

@CrossOrigin
@RestController
public class UserControllerREST {

    private UserService userService;
    private LoginService loginService;


    public UserControllerREST(UserService userService, LoginService loginService) {
        this.userService = userService;
        this.loginService = loginService;
    }

    @GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUsers(
            @RequestHeader(value = "token") String token){
        if (!loginService.checkToken(token)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        return ResponseEntity.ok(userService.findAll());

    }

    @GetMapping(value = "/user/{userId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserById(
            @PathVariable(value = "userId") Integer userId,
            @RequestHeader(value = "token") String token) {
        if (!loginService.checkToken(token)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        User user = userService.getUserById((long) userId);
        return ResponseEntity.ok(user);

    }

    @GetMapping(value = "/user/names/{username}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserByUsername(
            @PathVariable(value = "username") String username,
            @RequestHeader(value = "token") String token) {
        if (!loginService.checkToken(token)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        User user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);

    }

    @GetMapping(value = "/user/emails/{email}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity getUserByEmail(
            @PathVariable(value = "email") String email,
            @RequestHeader(value = "token") String token) {
        if (!loginService.checkToken(token)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        User user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }

    @PostMapping(value = "/user", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity addUser(
            @RequestParam String username,
            @RequestParam String email,
            @RequestHeader(value = "token") String token) {
        if (!loginService.checkToken(token)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        User user = new User(username, email);
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "/user/{userId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity deleteUserById (
            @PathVariable Integer userId,
            @RequestHeader(value = "token") String token) {
        if (!loginService.checkToken(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "not authorized"));
        }
        userService.deleteUserById((long) userId);
        return ResponseEntity.noContent().build();

    }
}

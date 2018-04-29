package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import com.mhenrik.kulcssoft.hw.backend.model.User;
import org.springframework.stereotype.Component;

@Component
public class InitializerBean {

    public InitializerBean(UserService userService, LoginService loginService) {
        loginService.saveAdmin(new Admin("admin", "admin"));
        for (int i = 1; i < 15; i++) {
            userService.saveUser(new User("user" + i, "user" + i + "@email.com"));
        }
    }
}

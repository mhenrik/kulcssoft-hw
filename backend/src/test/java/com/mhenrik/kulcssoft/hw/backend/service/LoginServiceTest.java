package com.mhenrik.kulcssoft.hw.backend.service;

import com.mhenrik.kulcssoft.hw.backend.model.Admin;
import com.mhenrik.kulcssoft.hw.backend.repository.LoginRepository;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(SpringRunner.class)
public class LoginServiceTest {

    private Admin admin;

    private LoginService loginService;

    @Mock
    private LoginRepository loginRepository;

    @BeforeEach
    public void setup() {
        loginRepository = mock(LoginRepository.class);
        admin = new Admin("admin", "admin");

    }

    @Test
    public void IfWrongUsernameGivenThenReturnNull(){
        loginService = new LoginService(loginRepository);
        when(loginRepository.findAdminByUsername(any(String.class))).thenReturn(null);
        assertEquals(loginService.login(any(String.class), "admin"), null);
    }

    @Test
    public void IfWrongPasswordGivenThenReturnNull(){
        loginService = new LoginService(loginRepository);
        when(loginRepository.findAdminByUsername(any(String.class))).thenReturn(null);
        assertEquals(loginService.login("admin", any(String.class)), null);
    }


}
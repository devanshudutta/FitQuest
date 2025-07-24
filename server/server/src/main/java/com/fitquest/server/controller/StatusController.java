package com.fitquest.server;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {

    @GetMapping("/")
    public String hello() {
        return "<h1>🔥 Spring Boot is Running!</h1><p>Welcome to the backend, king.</p>";
    }
}
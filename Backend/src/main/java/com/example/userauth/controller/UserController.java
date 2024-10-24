package com.example.userauth.controller;

import com.example.userauth.model.User;
import com.example.userauth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // Simple validation
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            return ResponseEntity.badRequest().body("Username cannot be empty.");
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email cannot be empty.");
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password cannot be empty.");
        }

        // Save the user
        userService.saveUser(user); // Make sure to hash the password before saving!

        return ResponseEntity.ok("User registered successfully! Username: " + user.getUsername() + ", Email: " + user.getEmail());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser) {
        // Validate the input
        if (loginUser.getUsername() == null || loginUser.getUsername().isEmpty()) {
            return ResponseEntity.badRequest().body("Username cannot be empty.");
        }
        if (loginUser.getPassword() == null || loginUser.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password cannot be empty.");
        }

        // Check user credentials
        User user = userService.findByUsername(loginUser.getUsername());
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid username.");
        }

        // Verify password
        if (!userService.checkPassword(loginUser.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid password.");
        }

        return ResponseEntity.ok("Login successful! Welcome, " + user.getUsername() + ".");
    }
}

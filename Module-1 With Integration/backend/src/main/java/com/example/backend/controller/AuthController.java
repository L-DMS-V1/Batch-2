package com.example.backend.controller;

import com.example.backend.dto.*;
import com.example.backend.entity.User;
import com.example.backend.config.JwtUtil;
import com.example.backend.respository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React frontend
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(registerRequest.getPassword()));
        user.setRole(registerRequest.getRole());
        user.setEmail(registerRequest.getEmail());
        user.setFullName(registerRequest.getFullName());
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwt = jwtUtil.generateToken(userDetails); // Generate the JWT token

        // Fetch the user from the database to include role
        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Return JWT and role in the response
        return ResponseEntity.ok(new JwtResponse(jwt, user.getRole()));
    }

    @GetMapping("/Admin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> exampleEndpoint(Authentication authentication) {
        System.out.println("Authorities: " + authentication.getAuthorities());
        return ResponseEntity.ok("This is a protected endpoint");

    }
    @GetMapping("/Manager")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<String> managerEndpoint(Authentication authentication) {
        System.out.println("Authorities: " + authentication.getAuthorities());
        return ResponseEntity.ok("This is a MANAGER-protected endpoint");
    }

    @GetMapping("/Employee")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public ResponseEntity<String> employeeEndpoint(Authentication authentication) {
        System.out.println("Authorities: " + authentication.getAuthorities());
        return ResponseEntity.ok("This is an EMPLOYEE-protected endpoint");
    }
}


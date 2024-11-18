package com.example.backend.dto;

import com.example.backend.entity.Role;

public class JwtResponse {
    private String jwt;
    private String role;

    public JwtResponse(String jwt, Role role) {
        this.jwt = jwt;
        this.role = String.valueOf(role);
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
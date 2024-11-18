package com.module4.progress.dto;

public class EmployeePerformanceDTO {

    private Long id;
    private String name;
    private double completionRate;

    public EmployeePerformanceDTO(Long id, String name, double completionRate) {
        this.id = id;
        this.name = name;
        this.completionRate = completionRate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCompletionRate() {
        return completionRate;
    }

    public void setCompletionRate(double completionRate) {
        this.completionRate = completionRate;
    }
}


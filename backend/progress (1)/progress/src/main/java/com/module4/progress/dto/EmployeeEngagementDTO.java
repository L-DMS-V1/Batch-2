package com.module4.progress.dto;

public class EmployeeEngagementDTO {

    private Long employeeId;
    private int totalTasks;
    private int completedTasks;
    private double completionRate;

    public EmployeeEngagementDTO(Long employeeId, int totalTasks, int completedTasks, double completionRate) {
        this.employeeId = employeeId;
        this.totalTasks = totalTasks;
        this.completedTasks = completedTasks;
        this.completionRate = completionRate;
    }

    // Getters and Setters
    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public int getTotalTasks() {
        return totalTasks;
    }

    public void setTotalTasks(int totalTasks) {
        this.totalTasks = totalTasks;
    }

    public int getCompletedTasks() {
        return completedTasks;
    }

    public void setCompletedTasks(int completedTasks) {
        this.completedTasks = completedTasks;
    }

    public double getCompletionRate() {
        return completionRate;
    }

    public void setCompletionRate(double completionRate) {
        this.completionRate = completionRate;
    }
}


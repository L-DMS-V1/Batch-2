package com.module4.progress.service;

import com.module4.progress.dto.EmployeeEngagementDTO;
import com.module4.progress.entity.SomeEntityClass;
import com.module4.progress.dto.EmployeePerformanceDTO;
import com.module4.progress.model.Employee;
import com.module4.progress.model.Progress;
import com.module4.progress.repository.EmployeeRepository;
import com.module4.progress.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ProgressRepository progressRepository;

    // 1. Employee Performance Report
    public List<EmployeePerformanceDTO> getEmployeePerformanceReport() {
        // Fetch all employees
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map(employee -> {
            double completionRate = getEmployeeCompletionRate(employee.getId());
            return new EmployeePerformanceDTO(employee.getId(), employee.getName(), completionRate);
        }).collect(Collectors.toList());
    }

    // 2. Get detailed Engagement Report by employee
    public EmployeeEngagementDTO getEmployeeEngagementReport(Long employeeId) {
        List<Progress> progressList = progressRepository.findByEmployeeId(employeeId);
        int totalTasks = progressList.stream().mapToInt(Progress::getTotalTasks).sum();
        int completedTasks = progressList.stream().mapToInt(Progress::getCompletedTasks).sum();
        double completionRate = totalTasks > 0 ? (double) completedTasks / totalTasks * 100 : 0.0;

        return new EmployeeEngagementDTO(employeeId, totalTasks, completedTasks, completionRate);
    }

    // 3. Top Performers Report (Employees with the highest completion rate)
    public List<EmployeePerformanceDTO> getTopPerformersReport(double threshold) {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream()
                .map(employee -> {
                    double completionRate = getEmployeeCompletionRate(employee.getId());
                    return new EmployeePerformanceDTO(employee.getId(), employee.getName(), completionRate);
                })
                .filter(report -> report.getCompletionRate() >= threshold)
                .sorted((e1, e2) -> Double.compare(e2.getCompletionRate(), e1.getCompletionRate())) // Sort by completion rate
                .collect(Collectors.toList());
    }

    // Helper method to calculate the average completion rate for an employee
    private double getEmployeeCompletionRate(Long employeeId) {
        List<Progress> progressList = progressRepository.findByEmployeeId(employeeId);
        if (progressList.isEmpty()) {
            return 0.0;
        }
        return progressList.stream()
                .mapToDouble(Progress::getCompletionRate)
                .average()
                .orElse(0.0);
    }

    public void generateReport() {
        // Creating an instance of SomeEntityClass
        SomeEntityClass entity = new SomeEntityClass(1, "Entity Name", "This is a description", true);

        // Using getter methods to access data
        System.out.println("Entity ID: " + entity.getId());
        System.out.println("Entity Name: " + entity.getName());
        System.out.println("Entity Description: " + entity.getDescription());
        System.out.println("Entity Active: " + entity.isActive());
    }
}







package com.module4.progress.controller;

import com.module4.progress.dto.EmployeePerformanceDTO;
import com.module4.progress.dto.EmployeeEngagementDTO;
import com.module4.progress.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    // 1. Employee Performance Report (All Employees)
    @GetMapping("/employees/performance")
    public List<EmployeePerformanceDTO> getEmployeePerformanceReport() {
        return reportService.getEmployeePerformanceReport();
    }

    // 2. Detailed Engagement Report (For specific employee)
    @GetMapping("/employee/{employeeId}/engagement")
    public EmployeeEngagementDTO getEmployeeEngagementReport(@PathVariable Long employeeId) {
        return reportService.getEmployeeEngagementReport(employeeId);
    }

    // 3. Top Performers Report (Filter based on completion rate threshold)
    @GetMapping("/employees/top-performers")
    public List<EmployeePerformanceDTO> getTopPerformersReport(@RequestParam double threshold) {
        return reportService.getTopPerformersReport(threshold);
    }
}

package com.module4.progress.controller;

import com.module4.progress.model.Employee;
import com.module4.progress.model.Progress;
import com.module4.progress.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PostMapping("/employee")
    public Employee createEmployee(@RequestBody Employee employee) {
        return progressService.addEmployee(employee);
    }

    @PostMapping("/employee/{employeeId}/progress")
    public Progress addProgress(@PathVariable Long employeeId, @RequestBody Progress progress) {
        return progressService.addProgressToEmployee(employeeId, progress);
    }

    @GetMapping("/employee/{employeeId}/progress")
    public List<Progress> getEmployeeProgress(@PathVariable Long employeeId) {
        return progressService.getProgressByEmployee(employeeId);
    }

    @GetMapping("/progress/{progressId}/completion")
    public double getCompletionRate(@PathVariable Long progressId) {
        return progressService.getCompletionRate(progressId);
    }
}


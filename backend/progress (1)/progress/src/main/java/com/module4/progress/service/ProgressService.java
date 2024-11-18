package com.module4.progress.service;

import com.module4.progress.model.Employee;
import com.module4.progress.model.Progress;
import com.module4.progress.repository.EmployeeRepository;
import com.module4.progress.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProgressService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ProgressRepository progressRepository;

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Progress addProgressToEmployee(Long employeeId, Progress progress) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        if (employee.isPresent()) {
            progress.setEmployee(employee.get());
            return progressRepository.save(progress);
        }
        throw new IllegalArgumentException("Employee not found");
    }

    public List<Progress> getProgressByEmployee(Long employeeId) {
        return progressRepository.findByEmployeeId(employeeId);
    }

    public double getCompletionRate(Long progressId) {
        Optional<Progress> progress = progressRepository.findById(progressId);
        return progress.map(Progress::getCompletionRate).orElse(0.0);
    }
}


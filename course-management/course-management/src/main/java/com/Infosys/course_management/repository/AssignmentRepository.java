package com.Infosys.course_management.repository;

import com.Infosys.course_management.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepository  extends JpaRepository<Assignment, Long> {
    List<Assignment> findByEmployeeId(Long employeeId);
}

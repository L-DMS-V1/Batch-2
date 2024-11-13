package com.Infosys.course_management.controller;

import com.Infosys.course_management.model.Assignment;
import com.Infosys.course_management.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @PostMapping("/assign")
    public ResponseEntity<Assignment> assignCourses(@RequestBody Assignment assignment) {
      Assignment  assignmentResponse = assignmentService.assignCoursesToEmployee(assignment);

      return ResponseEntity.status(HttpStatus.OK).body(assignmentResponse);

    }

    @GetMapping("/employee/{employeeId}")
    public List<Assignment> getAssignmentsByEmployee(@PathVariable Long employeeId) {
        return assignmentService.getAssignmentsByEmployee(employeeId);
    }
}

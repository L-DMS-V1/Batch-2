package com.example.feedbacksystem.controller;

import com.example.feedbacksystem.model.Course;
import com.example.feedbacksystem.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // POST: Create a new course
    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course savedCourse = courseRepository.save(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // GET: Get all courses
    @GetMapping
    public ResponseEntity<Iterable<Course>> getAllCourses() {
        Iterable<Course> courses = courseRepository.findAll();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
}


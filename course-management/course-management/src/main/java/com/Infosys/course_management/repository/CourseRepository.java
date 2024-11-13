package com.Infosys.course_management.repository;

import com.Infosys.course_management.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}

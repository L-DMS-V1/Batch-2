package com.Infosys.course_management.repository;

import com.Infosys.course_management.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentRepository extends JpaRepository<Content, Long> {
}

package com.example.feedbacksystem.repository;

import com.example.feedbacksystem.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByCourseId(Long courseId);
}


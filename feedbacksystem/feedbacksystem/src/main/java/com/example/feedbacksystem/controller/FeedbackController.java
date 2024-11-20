package com.example.feedbacksystem.controller;

import com.example.feedbacksystem.model.Feedback;
import com.example.feedbacksystem.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // POST: Collect feedback
    @PostMapping
    public ResponseEntity<Feedback> submitFeedback(@RequestBody Feedback feedback) {
        Feedback savedFeedback = feedbackService.collectFeedback(feedback);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // GET: Get the feedback report for a course
    @GetMapping("/report/{courseId}")
    public ResponseEntity<String> getFeedbackReport(@PathVariable Long courseId) {
        String report = feedbackService.generateFeedbackReport(courseId);
        return new ResponseEntity<>(report, HttpStatus.OK);
    }

    // GET: Get average rating for a course
    @GetMapping("/average-rating/{courseId}")
    public ResponseEntity<Double> getAverageRating(@PathVariable Long courseId) {
        double averageRating = feedbackService.calculateAverageRating(courseId);
        return new ResponseEntity<>(averageRating, HttpStatus.OK);
    }
}


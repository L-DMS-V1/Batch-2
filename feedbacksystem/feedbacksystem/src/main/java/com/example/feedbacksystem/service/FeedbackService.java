package com.example.feedbacksystem.service;

import com.example.feedbacksystem.model.Feedback;
import com.example.feedbacksystem.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // Collect feedback
    public Feedback collectFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // Analyze feedback for a specific course
    public double calculateAverageRating(Long courseId) {
        List<Feedback> feedbackList = feedbackRepository.findByCourseId(courseId);
        if (feedbackList.isEmpty()) {
            return 0.0;
        }

        double totalRating = feedbackList.stream().mapToInt(Feedback::getRating).sum();
        return totalRating / feedbackList.size();
    }

    // Generate a simple textual report for a course
    public String generateFeedbackReport(Long courseId) {
        List<Feedback> feedbackList = feedbackRepository.findByCourseId(courseId);
        double avgRating = calculateAverageRating(courseId);

        StringBuilder report = new StringBuilder();
        report.append("Feedback Report for Course ID: ").append(courseId).append("\n");
        report.append("Average Rating: ").append(avgRating).append("\n\n");

        for (Feedback feedback : feedbackList) {
            report.append("Employee ID: ").append(feedback.getEmployeeId())
                    .append(", Rating: ").append(feedback.getRating())
                    .append(", Comment: ").append(feedback.getComment()).append("\n");
        }

        return report.toString();
    }
}

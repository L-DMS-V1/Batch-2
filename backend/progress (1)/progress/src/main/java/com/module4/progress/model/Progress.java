package com.module4.progress.model;

import jakarta.persistence.*;
import lombok.Data;
//import javax.persistence.*;

@Data
@Entity
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String taskName;
    private String description;
    private int totalTasks;
    private int completedTasks;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public double getCompletionRate() {
        if (totalTasks == 0) return 0;
        return ((double) completedTasks / totalTasks) * 100;
    }
}


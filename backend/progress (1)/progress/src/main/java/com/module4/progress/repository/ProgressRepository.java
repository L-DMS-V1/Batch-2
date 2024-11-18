package com.module4.progress.repository;

import com.module4.progress.model.Progress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
    List<Progress> findByEmployeeId(Long employeeId);
}


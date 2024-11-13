package com.Infosys.course_management.repository;

import com.Infosys.course_management.model.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {
    Module findByModuleTitle(String moduleTitle);
    List<Module> findByModuleTitleIgnoreCaseContaining(String title);

    List<Module> findByModuleDescriptionIgnoreCaseContaining(String description);

    List<Module> findByModuleTitleIgnoreCaseContainingAndModuleDescriptionIgnoreCaseContaining(String title, String description);
}



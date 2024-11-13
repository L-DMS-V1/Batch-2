//package com.Infosys.course_management.service;
//
//import com.Infosys.course_management.model.Module;
//import com.Infosys.course_management.repository.ModuleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
////import java.util.Optional;
//
//
//@Service
//public class ModuleService {
//
//    @Autowired
//    private ModuleRepository moduleRepository;
//
//    public List<Module> getAllModules() {
//        return moduleRepository.findAll();  // This uses the built-in findAll() method from JpaRepository
//    }
//
//}

package com.Infosys.course_management.service;

import com.Infosys.course_management.model.Module;
import com.Infosys.course_management.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    public List<Module> getAllModules() {
        return moduleRepository.findAll();  // This uses the built-in findAll() method from JpaRepository
    }

    public Module getModuleById(Long id) {
        Optional<Module> optionalModule = moduleRepository.findById(id);
        return optionalModule.orElseThrow(() -> new RuntimeException("Module not found with id: " + id));
    }

}
package com.Infosys.course_management.exception;

public class ModuleNotFoundException extends RuntimeException {

    public ModuleNotFoundException(String message) {
        super(message);
    }
}

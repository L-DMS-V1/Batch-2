package com.Infosys.course_management.controller;

import com.Infosys.course_management.model.Module;
import com.Infosys.course_management.model.Content;
import com.Infosys.course_management.service.ContentService;
import com.Infosys.course_management.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @Autowired
    private ModuleService moduleService;



    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    public Content uploadContent(@RequestParam("file") MultipartFile file,
                                 @RequestParam("moduleId") Long moduleId) throws IOException {


        Module module = moduleService.getModuleById(moduleId);
        if (module == null) {
            throw new IllegalArgumentException("Module with ID " + moduleId + " not found");
        }

        String uploadDirectory = "uploads/";  // Set your desired directory for file storage
        Path uploadPath = Paths.get(uploadDirectory + file.getOriginalFilename());


        if (!Files.exists(uploadPath.getParent())) {
            Files.createDirectories(uploadPath.getParent());
        }

        Files.write(uploadPath, file.getBytes());


        String fileUrl = "/uploads/" + file.getOriginalFilename();

        Content content = new Content();
        content.setFileName(file.getOriginalFilename());
        content.setFileType(file.getContentType());
        content.setFileUrl(fileUrl);

        content.setModule(new Module());
        return contentService.uploadContent(content);
    }

    @GetMapping("/{contentId}")
    public Content getContent(@PathVariable Long contentId) {
        return contentService.getContentById(contentId);
    }
}

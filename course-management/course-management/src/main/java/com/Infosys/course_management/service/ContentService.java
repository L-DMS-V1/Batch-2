package com.Infosys.course_management.service;

import com.Infosys.course_management.model.Content;
import com.Infosys.course_management.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContentService {

    @Autowired
    private ContentRepository contentRepository;

    public Content uploadContent(Content content) {
        return contentRepository.save(content);
    }

   public Content getContentById(Long contentId) {
        Optional<Content> contentOptional = contentRepository.findById(contentId);
        return contentOptional.orElse(null);
    }


}

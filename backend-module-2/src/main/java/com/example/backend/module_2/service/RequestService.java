package com.example.backend.module_2.service;




import com.example.backend.module_2.entity.Request;
import com.example.backend.module_2.repository.RequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request createRequest(Request request) {
        return requestRepository.save(request);
    }

    public Request updateRequest(Long id, Request updatedRequest) {
        return requestRepository.findById(id)
                .map(existingRequest -> {
                    existingRequest.setProgram(updatedRequest.getProgram());
                    existingRequest.setPosition(updatedRequest.getPosition());
                    existingRequest.setStatus(updatedRequest.getStatus());
                    existingRequest.setDate(updatedRequest.getDate());
                    return requestRepository.save(existingRequest);
                })
                .orElseThrow(() -> new RuntimeException("Request not found with id " + id));
    }

    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }
}

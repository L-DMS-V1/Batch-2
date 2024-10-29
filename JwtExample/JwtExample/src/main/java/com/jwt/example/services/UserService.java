package com.jwt.example.services;

import com.jwt.example.models.User;
import org.springframework.stereotype.Service;

import java.rmi.server.UID;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private List<User> store=new ArrayList<>();

    public UserService() {
        store.add(new User(UUID.randomUUID().toString(), "Santosh Satpute", "santosh123@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(), "Harsh Satpute", "harsh@dev.in"));
        store.add(new User(UUID.randomUUID().toString(), "Ankit Satpute", "ankit@dev.in"));
        store.add(new User(UUID.randomUUID().toString(), "Gautam Shukla", "gautam@dev.in"));

    }

    public List<User> getUsers(){
        return  this.store;
    }
}

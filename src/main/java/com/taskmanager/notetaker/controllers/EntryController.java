package com.taskmanager.notetaker.controllers;

import com.taskmanager.notetaker.entities.Entry;
import com.taskmanager.notetaker.exceptions.EntryNotFoundException;
import com.taskmanager.notetaker.repositories.EntryRepo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EntryController {

    private final EntryRepo repository;


    EntryController(EntryRepo repository) {
        this.repository = repository;

    }
    
}

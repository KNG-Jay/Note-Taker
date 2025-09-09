package com.taskmanager.notetaker.controllers;

import com.taskmanager.notetaker.entities.Entry;
import com.taskmanager.notetaker.exceptions.EntryNotFoundException;
import com.taskmanager.notetaker.repositories.EntryRepo;
import com.taskmanager.notetaker.services.EntryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EntryController {

    @Autowired
    private EntryService entryService;
    private final EntryRepo repository;


    EntryController(EntryRepo repository) {
        this.repository = repository;

    }
    
}

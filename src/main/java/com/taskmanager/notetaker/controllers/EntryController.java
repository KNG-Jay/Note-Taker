package com.taskmanager.notetaker.controllers;

import com.taskmanager.notetaker.repositories.EntryRepo;

import org.springframework.web.bind.annotation.RestController;


@RestController
public class EntryController {

    private final EntryRepo repository;
    
}

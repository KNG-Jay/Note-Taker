package com.taskmanager.notetaker.controllers;

import com.taskmanager.notetaker.entities.Entry;
import com.taskmanager.notetaker.services.EntryService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class EntryController {

    @Autowired
    private EntryService entryService;


    EntryController(EntryService entryService) {
        this.entryService = entryService;
        
    }


    @GetMapping("/con")
    public String checkConnection() {

        return "Connection Is Active!";

    }

    @PostMapping("/create-note")
    public Entry createNote(@RequestBody Entry entry) {

        return entryService.createEntry(entry);

    }

    @GetMapping("/entries")
    public List<Entry> getAllNotes() {

        return entryService.getAllEntries();
        
    }

    @GetMapping("/entries/{id}")
    public Entry getOneNote(@PathVariable Long id) {

        return entryService.getEntry(id);

    }

    @PutMapping("/entries/{id}")
    public Entry updateNote(@PathVariable Long id,
                            @RequestBody Entry newEntry) {

        return entryService.updateEntry(id, newEntry);

    }
    
    @DeleteMapping("/entries/{id}")
    public Entry deleteNote(@PathVariable Long id) {

        return entryService.deleteEntry(id);

    }

    
}

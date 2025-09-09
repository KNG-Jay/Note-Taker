package com.taskmanager.notetaker.services;

import com.taskmanager.notetaker.entities.Entry;
import com.taskmanager.notetaker.repositories.EntryRepo;
import com.taskmanager.notetaker.exceptions.EntryNotFoundException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EntryService {
    
    @Autowired
    private EntryRepo repository;


    public Entry createEntry(Entry entry) {
        repository.save(entry);

        return entry;

    }

    public List<Entry> getAllEntries() {
        return repository.findAll();

    }

    public Entry getEntry(Long id) throws EntryNotFoundException {
        Entry entry = repository.findById(id)
            .orElseThrow(() -> new EntryNotFoundException(id));
        
        return entry;

    }

    public Entry updateEntry(Long id, Entry newEntry) {

        Entry updatedEntry = repository.findById(id).map(entry -> {
            entry.setSubject(newEntry.getSubject());
            entry.setTitle(newEntry.getTitle());
            entry.setNote(newEntry.getNote());

            return repository.save(entry);

        }).orElseThrow(() -> new EntryNotFoundException(id));

        return updatedEntry;

    }

    public Entry deleteEntryById(Long id) {
        return repository.findById(id).orElse(null);

    }

}

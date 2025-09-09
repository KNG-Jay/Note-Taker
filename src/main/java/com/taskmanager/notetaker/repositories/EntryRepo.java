package com.taskmanager.notetaker.repositories;

import com.taskmanager.notetaker.entities.Entry;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepo extends JpaRepository<Entry, Long> {
    
    Optional<Entry> findByTitle(String title);

}

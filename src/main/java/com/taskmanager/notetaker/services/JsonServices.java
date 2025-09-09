package com.taskmanager.notetaker.services;

import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.taskmanager.notetaker.entities.Entry;


public class JsonServices {

    public String serializeEntry(Entry entry) {
        ObjectMapper mapper = new ObjectMapper();

        try {
            return mapper.writeValueAsString(entry);

        } catch (Exception e) {
            e.printStackTrace();
            return null;

        }
        
    }

    
}

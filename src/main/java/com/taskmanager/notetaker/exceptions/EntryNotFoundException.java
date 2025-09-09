package com.taskmanager.notetaker.exceptions;

public class EntryNotFoundException extends RuntimeException {

    public EntryNotFoundException(Long id) {

        super("Could Not Find Entry With ID: " + id);

    }

}

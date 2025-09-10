package com.taskmanager.notetaker.entities;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import lombok.Getter;
import lombok.Setter;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "notes")
@Getter @Setter
@AllArgsConstructor
public class Entry {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;
    private String subject;
    private String title;
    private String note;

    
    Entry() {

        this.subject = "EMPTY";
        this.title = "EMPTY";
        this.note = "EMPTY";

    }

    Entry(String title, String note) {

        this.subject = "";
        this.title = title;
        this.note = note;

    }


    @Override
    public int hashCode() {
        return Objects.hash(this.subject, this.title, this.note);

    }

    @Override
    public String toString() {
        return String.format("Account{id=%s, subject=%s, title=%s, note=%s}",
        this.id, this.subject, this.title, this.note
        );
    }

}

package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.*;

@Entity
public class Journal {

    @Id
    @GeneratedValue
    private Long id;
    private String date;
    @Lob
    private String entry;
    @ManyToOne
    private User user;

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getEntry() {
        return entry;
    }

    public User getUser(){
        return user;
    }

    // Constructors =================================================
    public Journal() {
    }

    public Journal(String date, String entry, User user) {
        this.date = date;
        this.entry = entry;
        this.user = user;
    }


    // Methods ======================================================
//    @Override
//    public String toString() {
//        return "Journal{" +
//                "id=" + id +
//                ", date='" + date + '\'' +
//                ", entry='" + entry + '\'' +
//                '}';
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof Journal)) return false;
//        Journal journal = (Journal) o;
//        return getId().equals(journal.getId()) && getDate().equals(journal.getDate()) && getEntry().equals(journal.getEntry());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(getId(), getDate(), getEntry());
//    }
}

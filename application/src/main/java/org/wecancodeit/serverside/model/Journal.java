package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.*;

@Entity
public class Journal {

    @Id
    @GeneratedValue
    private Long id;
    private String journalDate;
    @Lob
    private String journalEntry;
    @ManyToOne
    private User user;

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getJournalDate() {
        return journalDate;
    }

    public String getJournalEntry() {
        return journalEntry;
    }

    public User getUser(){
        return user;
    }

    // Constructors =================================================
    public Journal() {
    }

    public Journal(String journalDate, String journalEntry, User user) {
        this.journalDate = journalDate;
        this.journalEntry = journalEntry;
        this.user = user;
    }

    public String changeJournalEntry(String entryUpdate){
        this.journalEntry = entryUpdate;
        return this.journalEntry;
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

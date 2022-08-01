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
    @ManyToMany
    private Collection<User> users;

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

    public Collection<User> getUsers(){
        return users;
    }

    // Constructors =================================================
    public Journal() {
    }

    public Journal(String date, String entry, User... users) {
        this.date = date;
        this.entry = entry;
        this.users = new HashSet<>(Arrays.asList(users));
    }

    public void addUsers(User usersToAdd){
        users.add(usersToAdd);
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

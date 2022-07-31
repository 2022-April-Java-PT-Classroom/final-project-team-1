package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    @ManyToMany
    private Collection<Journal> journals;

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Journal> getJournals() {
        return journals;
    }

    // Constructors =================================================
    protected User() {
    }

    public User(String username, String password, Journal... journals) {
        this.username = username;
        this.password = password;
        this.journals = new HashSet<>(Arrays.asList(journals));
    }

    // Methods ======================================================
    public void addJournals(Journal journalsToAdd) {
        journals.add(journalsToAdd);
    }

//    @Override
//    public String toString() {
//        return "User{" +
//                "id=" + id +
//                ", username='" + username + '\'' +
//                ", password='" + password + '\'' +
//                ", journals=" + journals +
//                '}';
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof User)) return false;
//        User user = (User) o;
//        return getId().equals(user.getId()) && getUsername().equals(user.getUsername()) && getPassword().equals(user.getPassword()) && getJournals().equals(user.getJournals());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(getId(), getUsername(), getPassword(), getJournals());
//    }
}

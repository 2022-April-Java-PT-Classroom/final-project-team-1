package org.wecancodeit.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @OneToMany (mappedBy = "user")
    @JsonIgnore
    private Collection<Journal> journals;
    @OneToMany (mappedBy = "discussUser")
    @JsonIgnore
    private Collection<Discuss> discuss;

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

    public Collection<Discuss> getDiscuss() {
        return discuss;
    }

    // Constructors =================================================
    protected User() {
    }

    public User(String username, String password, Journal... journals) {
        this.username = username;
        this.password = password;
        this.journals = new HashSet<>(Arrays.asList(journals));
    }

    public User(String username, String password, Collection<Journal> journals, Collection<Discuss> discuss) {
        this.username = username;
        this.password = password;
        this.journals = journals;
        this.discuss = discuss;
    }

    // Methods ======================================================
    public void addJournals(Journal journalsToAdd) {
        journals.add(journalsToAdd);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

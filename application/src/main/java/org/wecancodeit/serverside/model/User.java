package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

@Entity
public class User {

    @Id
    @GeneratedValue

    private Long id;
    private String username;
    private String password;
    @OneToMany
    private Collection<Journal> journals;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Journal> getJournals(){
        return journals;
    }

    protected User() {
    }

    public User(String username, String password, Journal ...journals) {
        this.username = username;
        this.password = password;
        this.journals = new HashSet<>(Arrays.asList(journals));
    }

    public void addJournals(Journal journalsToAdd) {
        journals.add(journalsToAdd);
    }
}

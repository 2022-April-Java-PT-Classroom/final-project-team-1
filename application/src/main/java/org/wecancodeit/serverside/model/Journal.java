package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Entity
public class Journal {

    @Id
    @GeneratedValue


    private Long id;
    private String date;
    @Lob
    private String entry;


    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getEntry() {
        return entry;
    }

    public Journal(){}

    public Journal(String date, String entry) {
        this.date = date;
        this.entry = entry;
    }
}

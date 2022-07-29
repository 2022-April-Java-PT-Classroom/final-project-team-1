package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Journal {
    // Variables - Id, Date, Text

    @Id
    @GeneratedValue
    private Long id;
    private String date;
    private String text;

    public Journal(){

    }

    public Journal (String date, String text){
        this.date=date;
        this.text=text;
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getText() {
        return text;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString(){
        return "Journal{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}

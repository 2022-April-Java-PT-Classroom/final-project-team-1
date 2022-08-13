package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class DateNight {

    @Id
    @GeneratedValue
    private Long dateNightId;
    private String dateDate;
    @Lob
    private String dateIdea;
    private String dateType;
    private String dateLevel;
    @Lob
    private String dateNotes;

    @ManyToOne
    private User user;

    // Stretch Variables
    // private Collection<Photos> datePhotos;
    // private Collection<Icons> dateIcons;

    // Getters ======================================================
    public Long getDateNightId() {
        return dateNightId;
    }

    public String getDateDate() {
        return dateDate;
    }

    public String getDateIdea() {
        return dateIdea;
    }

    public String getDateType() {
        return dateType;
    }

    public String getDateLevel() {
        return dateLevel;
    }

    public String getDateNotes() {
        return dateNotes;
    }

    public User getUser(){
        return user;
    }

    // Constructors =================================================
    public DateNight() {
    }

    public DateNight(String dateIdea, String dateType, String dateLevel) {
        this.dateIdea = dateIdea;
        this.dateType = dateType;
        this.dateLevel = dateLevel;
    }

    public DateNight(String dateDate, String dateIdea, String dateType, String dateLevel, String dateNotes){
        this.dateDate = dateDate;
        this.dateIdea = dateIdea;
        this.dateType = dateType;
        this.dateLevel = dateLevel;
        this.dateNotes = dateNotes;
    }

    public DateNight(String dateDate, String dateIdea, String dateType, String dateLevel, String dateNotes, User user){
        this.dateDate = dateDate;
        this.dateIdea = dateIdea;
        this.dateType = dateType;
        this.dateLevel = dateLevel;
        this.dateNotes = dateNotes;
        this.user = user;
    }

    // Methods ======================================================
    @Override
    public String toString() {
        return "DateNight{" +
                "id=" + dateNightId +
                ", dateDate='" + dateDate + '\'' +
                ", dateIdea='" + dateIdea + '\'' +
                ", dateType='" + dateType + '\'' +
                ", dateLevel='" + dateLevel + '\'' +
                ", dateNotes='" + dateNotes + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DateNight)) return false;
        DateNight dateNight = (DateNight) o;
        return dateNightId.equals(dateNight.dateNightId) && dateDate.equals(dateNight.dateDate) && dateIdea.equals(dateNight.dateIdea) && dateType.equals(dateNight.dateType) && dateLevel.equals(dateNight.dateLevel) && dateNotes.equals(dateNight.dateNotes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dateNightId, dateDate, dateIdea, dateType, dateLevel, dateNotes);
    }
}

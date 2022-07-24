package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
public class DateNight {

    @Id
    @GeneratedValue
    private Long id;
    private String dateDate;
    @Lob
    private String dateIdea;
    private String dateType;
    private String dateLevel;
    @Lob
    private String dateNotes;
    @OneToMany (mappedBy = "photoDateNight")
    private Collection<Photos> datePhotos;

    // Stretch Variables
    // private Collection<Icons>


    public DateNight() {
    }

    public DateNight(String dateDate, String dateIdea, String dateType, String dateLevel, String dateNotes, Photos...datePhotos) {
        this.dateDate = dateDate;
        this.dateIdea = dateIdea;
        this.dateType = dateType;
        this.dateLevel = dateLevel;
        this.dateNotes = dateNotes;
        this.datePhotos = List.of(datePhotos);
    }

    // Methods

    @Override
    public String toString() {
        return "DateNight{" +
                "id=" + id +
                ", dateDate='" + dateDate + '\'' +
                ", dateIdea='" + dateIdea + '\'' +
                ", dateType='" + dateType + '\'' +
                ", dateLevel='" + dateLevel + '\'' +
                ", dateNotes='" + dateNotes + '\'' +
                ", datePhotos=" + datePhotos +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DateNight)) return false;
        DateNight dateNight = (DateNight) o;
        return id.equals(dateNight.id) && dateDate.equals(dateNight.dateDate) && dateIdea.equals(dateNight.dateIdea) && dateType.equals(dateNight.dateType) && dateLevel.equals(dateNight.dateLevel) && dateNotes.equals(dateNight.dateNotes) && datePhotos.equals(dateNight.datePhotos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dateDate, dateIdea, dateType, dateLevel, dateNotes, datePhotos);
    }
}

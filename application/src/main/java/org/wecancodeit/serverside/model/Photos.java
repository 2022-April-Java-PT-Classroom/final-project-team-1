package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Photos {

    @Id
    @GeneratedValue
    private Long id;
    private String photoUrl;
    @ManyToOne
    private DateNight photoDateNight;

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public DateNight getPhotoDateNight() {
        return photoDateNight;
    }

    // Constructors =================================================
    public Photos() {
    }

    public Photos(String photoUrl, DateNight photoDateNight) {
        this.photoUrl = photoUrl;
        this.photoDateNight = photoDateNight;
    }

    // Methods ======================================================
    @Override
    public String toString() {
        return "Photos{" +
                "id=" + id +
                ", photoUrl='" + photoUrl + '\'' +
                ", photoDateNight=" + photoDateNight +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Photos)) return false;
        Photos photos = (Photos) o;
        return getId().equals(photos.getId()) && getPhotoUrl().equals(photos.getPhotoUrl()) && getPhotoDateNight().equals(photos.getPhotoDateNight());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getPhotoUrl(), getPhotoDateNight());
    }
}

package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Photos {

    @Id
    @GeneratedValue
    private Long id;
    private String photoUrl;
    @ManyToOne
    private DateNight photoDateNight;
}

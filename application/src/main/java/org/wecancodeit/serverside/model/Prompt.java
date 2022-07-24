package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Prompt {

    @Id
    @GeneratedValue
    private Long id;
    private String promptDate;
    @Lob
    private String promptQuestion;
    @Lob
    private String promptAnswer;



}

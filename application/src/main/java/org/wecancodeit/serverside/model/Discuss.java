package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Discuss {

    @Id
    @GeneratedValue
    private Long id;
    private String discussDate;
    @Lob
    private String discussQuestion;
    @Lob
    private String discussAnswerOne;
    private String discussAnswerTwo;
}

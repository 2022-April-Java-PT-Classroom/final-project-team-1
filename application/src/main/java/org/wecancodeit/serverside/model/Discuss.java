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

    public Discuss(){

    }

    public Discuss(String discussDate, String discussQuestion, String discussAnswerOne, String discussAnswerTwo) {
        this.discussDate = discussDate;
        this.discussQuestion = discussQuestion;
        this.discussAnswerOne = discussAnswerOne;
        this.discussAnswerTwo = discussAnswerTwo;
    }

    public Long getId() {
        return id;
    }

    public String getDiscussDate() {
        return discussDate;
    }

    public String getDiscussQuestion() {
        return discussQuestion;
    }

    public String getDiscussAnswerOne() {
        return discussAnswerOne;
    }

    public String getDiscussAnswerTwo() {
        return discussAnswerTwo;
    }

    @Override
    public String toString() {
        return "Discuss{" +
                "id=" + id +
                ", discussDate='" + discussDate + '\'' +
                ", discussQuestion='" + discussQuestion + '\'' +
                ", discussAnswerOne='" + discussAnswerOne + '\'' +
                ", discussAnswerTwo='" + discussAnswerTwo + '\'' +
                '}';
    }


}

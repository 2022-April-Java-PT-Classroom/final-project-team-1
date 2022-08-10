package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Discuss {

    @Id
    @GeneratedValue
    private Long discussId;
    private String discussDate;
    @Lob
    private String discussQuestion;
    @Lob
    private String discussAnswerOne;
    @Lob
    private String discussAnswerTwo;
    @ManyToOne
    private User discussUser;

    // Getters ======================================================
    public Long getDiscussId() {
        return discussId;
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

    public User getDiscussUser() {
        return discussUser;
    }

    // Constructors =================================================
    public Discuss() {
    }

    public Discuss(String discussQuestion) {
        this.discussQuestion = discussQuestion;
    }

    public Discuss(String discussDate, String discussQuestion, String discussAnswerOne, String discussAnswerTwo) {
        this.discussDate = discussDate;
        this.discussQuestion = discussQuestion;
        this.discussAnswerOne = discussAnswerOne;
        this.discussAnswerTwo = discussAnswerTwo;
    }

    public Discuss(String discussDate, String discussQuestion, String discussAnswerOne, String discussAnswerTwo, User discussUser) {
        this.discussDate = discussDate;
        this.discussQuestion = discussQuestion;
        this.discussAnswerOne = discussAnswerOne;
        this.discussAnswerTwo = discussAnswerTwo;
        this.discussUser = discussUser;
    }

    // Methods ======================================================
    @Override
    public String toString() {
        return "Discuss{" +
                "id=" + discussId +
                ", discussDate='" + discussDate + '\'' +
                ", discussQuestion='" + discussQuestion + '\'' +
                ", discussAnswerOne='" + discussAnswerOne + '\'' +
                ", discussAnswerTwo='" + discussAnswerTwo + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Discuss)) return false;
        Discuss discuss = (Discuss) o;
        return getDiscussId().equals(discuss.getDiscussId()) && getDiscussDate().equals(discuss.getDiscussDate()) && getDiscussQuestion().equals(discuss.getDiscussQuestion()) && getDiscussAnswerOne().equals(discuss.getDiscussAnswerOne()) && getDiscussAnswerTwo().equals(discuss.getDiscussAnswerTwo());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDiscussId(), getDiscussDate(), getDiscussQuestion(), getDiscussAnswerOne(), getDiscussAnswerTwo());
    }
}

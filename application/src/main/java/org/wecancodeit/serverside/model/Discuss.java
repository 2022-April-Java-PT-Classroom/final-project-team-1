package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Objects;

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

    // Getters
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

    // Constructors
    public Discuss() {
    }

    public Discuss(String discussDate, String discussQuestion, String discussAnswerOne, String discussAnswerTwo) {
        this.discussDate = discussDate;
        this.discussQuestion = discussQuestion;
        this.discussAnswerOne = discussAnswerOne;
        this.discussAnswerTwo = discussAnswerTwo;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Discuss)) return false;
        Discuss discuss = (Discuss) o;
        return getId().equals(discuss.getId()) && getDiscussDate().equals(discuss.getDiscussDate()) && getDiscussQuestion().equals(discuss.getDiscussQuestion()) && getDiscussAnswerOne().equals(discuss.getDiscussAnswerOne()) && getDiscussAnswerTwo().equals(discuss.getDiscussAnswerTwo());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDiscussDate(), getDiscussQuestion(), getDiscussAnswerOne(), getDiscussAnswerTwo());
    }
}

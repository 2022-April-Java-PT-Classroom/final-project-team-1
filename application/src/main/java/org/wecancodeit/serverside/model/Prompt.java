package org.wecancodeit.serverside.model;

import javax.persistence.*;
import java.util.Objects;

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
    @ManyToOne
    private User user;

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getPromptDate() {
        return promptDate;
    }

    public String getPromptQuestion() {
        return promptQuestion;
    }

    public String getPromptAnswer() {
        return promptAnswer;
    }

    public User getUser() {
        return user;
    }

    // Constructors =================================================
    public Prompt() {
    }

    public Prompt(String promptQuestion) {
        this.promptQuestion = promptQuestion;
    }

    public Prompt(String promptDate, String promptQuestion, String promptAnswer) {
        this.promptDate = promptDate;
        this.promptQuestion = promptQuestion;
        this.promptAnswer = promptAnswer;
    }

    public Prompt(String promptDate, String promptQuestion, String promptAnswer, User user) {
        this.promptDate = promptDate;
        this.promptQuestion = promptQuestion;
        this.promptAnswer = promptAnswer;
        this.user = user;
    }

    // Methods ======================================================
    @Override
    public String toString() {
        return "Prompt{" +
                "id=" + id +
                ", promptDate='" + promptDate + '\'' +
                ", promptQuestion='" + promptQuestion + '\'' +
                ", promptAnswer='" + promptAnswer + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Prompt)) return false;
        Prompt prompt = (Prompt) o;
        return getId().equals(prompt.getId()) && getPromptDate().equals(prompt.getPromptDate()) && getPromptQuestion().equals(prompt.getPromptQuestion()) && getPromptAnswer().equals(prompt.getPromptAnswer());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getPromptDate(), getPromptQuestion(), getPromptAnswer());
    }
}

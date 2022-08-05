package org.wecancodeit.serverside.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Quotes {
    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String quote;
    private String imgUrl;
    private String author;

    public Quotes(){

    }

    public Quotes(String quote, String imgUrl, String author) {
        this.quote = quote;
        this.imgUrl = imgUrl;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public String getQuote() {
        return quote;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String toString() {
        return "Quotes{" +
                "id=" + id +
                ", quote='" + quote + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", author='" + author + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Quotes quotes = (Quotes) o;

        if (getId() != null ? !getId().equals(quotes.getId()) : quotes.getId() != null) return false;
        if (getQuote() != null ? !getQuote().equals(quotes.getQuote()) : quotes.getQuote() != null) return false;
        if (getImgUrl() != null ? !getImgUrl().equals(quotes.getImgUrl()) : quotes.getImgUrl() != null) return false;
        return getAuthor() != null ? getAuthor().equals(quotes.getAuthor()) : quotes.getAuthor() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getQuote() != null ? getQuote().hashCode() : 0);
        result = 31 * result + (getImgUrl() != null ? getImgUrl().hashCode() : 0);
        result = 31 * result + (getAuthor() != null ? getAuthor().hashCode() : 0);
        return result;
    }
}

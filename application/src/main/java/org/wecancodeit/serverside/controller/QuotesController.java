package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Quotes;
import org.wecancodeit.serverside.repository.QuotesRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class QuotesController {

    @Resource
    private QuotesRepository quotesRepo;

    @GetMapping("/api/quotes")
    public Collection<Quotes> getAllQuotes(){
        return (Collection<Quotes>) quotesRepo.findAll();
    }
    @GetMapping("/api/quotes/{quoteId}")
    public Optional<Quotes> getQuote(@PathVariable Long quoteId){
        return quotesRepo.findById(quoteId);
    }


}

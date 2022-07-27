package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.JournalRepository;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class JournalController {

    @Resource
    private JournalRepository journalRepository;

    @Resource
    private UserRepository userRepository;

    @GetMapping("/api/{userName}/journals")
    public Collection<Journal> getJournal(@PathVariable String userName){
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get().getJournals();
    }

    @PostMapping("/api/{userName}/journals/add-journal-entry")
    public Collection<Journal> addJournalEntry(@PathVariable String userName, @RequestBody String body) {
        JSONObject newJournal = new JSONObject(body);
        String journalDate = newJournal.getString("date");
        String journalEntry = newJournal.getString("entry");
        Journal journalEntryToAdd = new Journal(journalDate, journalEntry);
        journalRepository.save(journalEntryToAdd);
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get().getJournals();
    }

    @DeleteMapping("/api/user/{userName}/delete-journal-entry")
    public Collection<Journal> deleteJournalEntry(@PathVariable String userName) throws JSONException {
        Optional<Journal> journalEntryToRemoveOpt = journalRepository.findByEntry(userName);
        journalEntryToRemoveOpt.ifPresent(journalEntry -> journalRepository.delete(journalEntry));
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get().getJournals();

    }
}

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
        User user = userRepository.findByUsername(userName).get();
        Journal journalEntryToAdd = new Journal(journalDate, journalEntry);
        journalRepository.save(journalEntryToAdd);
        return user.getJournals();
    }

    @DeleteMapping("/api/{userName}/journals/{id}/delete-journal-entry")
    public Collection<Journal> deleteJournalEntry(@PathVariable String userName, @PathVariable Long id) throws JSONException {
        Optional<Journal> journalEntryToRemoveOpt = journalRepository.findByEntry(userName);
        journalRepository.findById(id);
        journalEntryToRemoveOpt.ifPresent(journalEntry -> journalRepository.delete(journalEntry));
        Optional<User> user = userRepository.findByUsername(userName);
        return user.get().getJournals();

    }

    @PatchMapping("/api/{userName}/journals/{id}/edit-journal-entry")
    public Collection<Journal> editJournalEntry(@PathVariable String userName, @PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject editJournal = new JSONObject(body);
        Long journalId = editJournal.getLong("id");
        String journalDate = editJournal.getString("date");
        String journalEntry = editJournal.getString("entry");
        User user = userRepository.findByUsername(userName).get();
        journalRepository.findById(id).get();
        Journal journalEntryToEdit = new Journal(journalDate,journalEntry);
        journalRepository.save(journalEntryToEdit);
        return user.getJournals();
    }
}

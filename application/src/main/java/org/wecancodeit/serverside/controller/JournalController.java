package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Discuss;
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

    @GetMapping("/api/journals")
    public Collection<Journal> getAllJournals() {
        return (Collection<Journal>) journalRepository.findAll();
    }

    @GetMapping("/api/journal/{id}")
    public Optional<Journal> getJournalById(@PathVariable Long id) {
        return journalRepository.findById(id);
    }

    @GetMapping("/api/{userName}/journals")
    public Collection<Journal> getJournal(@PathVariable String userName){
        Optional<User> user = userRepository.findByUsernameIgnoreCase(userName);
        return user.get().getJournals();
    }

    @GetMapping("/api/{userName}/journals/{id}")
    public Collection<Journal> getSingleEntry(@PathVariable String userName, @PathVariable Long id){
        Optional<User> user = userRepository.findByUsernameIgnoreCase(userName);
        Optional<Journal> journal = journalRepository.findById(id);
        return user.get().getJournals();
    }

    @PostMapping("/api/{userName}/journals/add-journal-entry")
    public Collection<Journal> addJournalEntry(@PathVariable String userName, @RequestBody String body) {
        JSONObject newJournal = new JSONObject(body);
        String journalDate = newJournal.getString("journalDate");
        String journalEntry = newJournal.getString("journalEntry");
        User user = userRepository.findByUsernameIgnoreCase(userName).get();
        Journal journalEntryToAdd = new Journal(journalDate, journalEntry,user);
        journalRepository.save(journalEntryToAdd);
        return user.getJournals();
    }

    @DeleteMapping("/api/{userName}/journals/{id}/delete-journal-entry")
    public Collection<Journal> deleteJournalEntry(@PathVariable String userName, @PathVariable Long id) throws JSONException {
        Optional<Journal> journalEntryToRemoveOpt = journalRepository.findById(id);
        journalEntryToRemoveOpt.ifPresent(Journal -> journalRepository.deleteById(id));
        Optional<User> user = userRepository.findByUsernameIgnoreCase(userName);
        return user.get().getJournals();

    }

    @PutMapping("/api/{userName}/journals/{id}/edit-journal-entry")
    public Collection<Journal> editJournalEntry(@PathVariable String userName, @PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject editJournal = new JSONObject(body);
        String journalEntry = editJournal.getString("journalEntry");
        User user = userRepository.findByUsernameIgnoreCase(userName).get();
        Optional<Journal> journalEntryToEdit  = journalRepository.findById(id);
        journalEntryToEdit.get().changeJournalEntry(journalEntry);
        journalRepository.save(journalEntryToEdit.get());
        return user.getJournals();
    }
}

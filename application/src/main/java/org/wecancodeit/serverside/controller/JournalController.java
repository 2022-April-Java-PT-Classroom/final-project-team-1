package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.repository.JournalRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/Journal")
public class JournalController {

    @Resource
    private JournalRepository journalRepo;

    @PostMapping
    public Collection<Journal> addJournal(@RequestBody String body) throws JSONException {
        JSONObject newJournal=new JSONObject(body);
        String journalDate = newJournal.getString("date");
        String journalText = newJournal.getString("text");

    }

}

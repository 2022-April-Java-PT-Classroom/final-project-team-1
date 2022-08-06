package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.repository.DiscussRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DiscussController {

    @Resource
    private DiscussRepository discussRepo;

    @GetMapping("/api/discuss")
    public Collection<Discuss> getAllDiscuss(){
        return (Collection<Discuss>) discussRepo.findAll();
    }

    @RequestMapping("/api/discuss/{discussId}")
    public Optional<Discuss> getDiscussById(@PathVariable Long discussId) {
        return discussRepo.findById(discussId);
    }

    @PostMapping("/api/add-discuss")
    public Collection<Discuss> addADiscussEntry(@RequestBody String body) throws JSONException {
        JSONObject newDiscuss = new JSONObject(body);
        String discussDate = newDiscuss.getString("discussDate");
        String discussQuestion = newDiscuss.getString("discussQuestion");
        String discussAnswerOne = newDiscuss.getString("discussAnswerOne");
        String discussAnswerTwo = newDiscuss.getString("discussAnswerTwo");


        Optional<Discuss> discussToAdd = discussRepo.findByDiscussQuestion(discussQuestion);
        if (discussToAdd.isPresent()) {
            Discuss discussEntry = new Discuss(discussDate, discussQuestion, discussAnswerOne, discussAnswerTwo);
            discussRepo.save(discussEntry);
        }
        return (Collection<Discuss>) discussRepo.findAll();
    }
}

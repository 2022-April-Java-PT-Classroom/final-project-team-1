package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.repository.DiscussRepository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DiscussController {

    @Resource
    private DiscussRepository discussRepo;

    @GetMapping("/api/discuss")
    public List<Discuss> getAllDiscuss(){
        return (List<Discuss>) discussRepo.findAll();
    }

    @PostMapping("/api/add-discuss")
    public List<Discuss> addADiscussEntry(@RequestBody String body) throws JSONException {
        JSONObject newDiscuss = new JSONObject(body);
        String discussDate = newDiscuss.getString("discussDate");
        String discussQuestion = newDiscuss.getString("discussQuestion");
        String discussAnswerOne = newDiscuss.getString("discussAnswerOne");
        String discussAnswerTwo = newDiscuss.getString("discussAnswerTwo");
        Optional<Discuss> discussToAdd = discussRepo.findBydiscussQuestion(discussQuestion);

        if (discussToAdd.isPresent()) {
            Discuss discussEntry = new Discuss(discussDate, discussQuestion, discussAnswerOne, discussAnswerTwo);
            discussRepo.save(discussEntry);
        }
        return (List<Discuss>) discussRepo.findAll();
    }
}

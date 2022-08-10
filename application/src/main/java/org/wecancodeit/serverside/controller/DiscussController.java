package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.DiscussRepository;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DiscussController {

    @Resource
    private DiscussRepository discussRepo;

    @Resource
    private UserRepository userRepo;

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

    // USER METHODS ===========================================================
    @GetMapping("/api/{userName}/discuss")
    public Collection<Discuss> getUserDiscuss(@PathVariable String userName) {
        Optional<User> user = userRepo.findByUsernameIgnoreCase(userName);
        return user.get().getDiscuss();
    }

    @PatchMapping("/api/{userName}/add-discuss")
    public Collection<Discuss> addDiscussWithUser(@PathVariable String userName, @RequestBody String body) {
        JSONObject newDiscuss = new JSONObject(body);
        String discussDate = newDiscuss.getString("discussDate");
        String discussQuestion = newDiscuss.getString("discussQuestion");
        String discussAnswerOne = newDiscuss.getString("discussAnswerOne");
        String discussAnswerTwo = newDiscuss.getString("discussAnswerTwo");

        User user = userRepo.findByUsernameIgnoreCase(userName).get();

        Discuss discussToAdd = new Discuss(discussDate, discussQuestion, discussAnswerOne, discussAnswerTwo, user);
        discussRepo.save(discussToAdd);
        return user.getDiscuss();
    }

//    private String discussDate;
//    @Lob
//    private String discussQuestion;
//    @Lob
//    private String discussAnswerOne;
//    @Lob
//    private String discussAnswerTwo;
//    @ManyToOne
//    private User discussUser;
}
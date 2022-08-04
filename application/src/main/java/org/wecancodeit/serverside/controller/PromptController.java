package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.model.Prompt;
import org.wecancodeit.serverside.repository.PromptRepository;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping
public class PromptController {

    @Resource
    private PromptRepository promptRepo;

    @GetMapping("/api/prompt")
    public List<Prompt> getAllPrompt(){
        return (List<Prompt>) promptRepo.findAll();
    }

    @PostMapping("/api/add-prompt")
    public List<Prompt> addAPromptEntry(@RequestBody String body) throws JSONException{
        JSONObject newPrompt = new JSONObject(body);
        String promptDate = newPrompt.getString("promptDate");
        String promptQuestion = newPrompt.getString("promptQuestion");
        String promptAnswer = newPrompt.getString("promptAnswer");
            return (List<Prompt>) promptRepo.findAll();
    }
}

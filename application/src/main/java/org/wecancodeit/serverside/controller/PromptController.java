package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.model.Prompt;
import org.wecancodeit.serverside.model.User;
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

    @Resource
    private UserRepository userRepo;

    @GetMapping("/api/prompt")
    public Collection<Prompt> getAllPrompt(){
        return (Collection<Prompt>) promptRepo.findAll();
    }

    @RequestMapping("api/prompt/single-prompt/{id}")
    public Optional<Prompt> displaySinglePrompts(@PathVariable Long id) {
        return promptRepo.findById(id);
    }

    @GetMapping("/api/{userName}/prompt")
    public Collection<Prompt> getUserDiscuss(@PathVariable String userName) {
        Optional<User> user = userRepo.findByUsernameIgnoreCase(userName);
        return user.get().getPrompts();
    }






    @PostMapping("/api/prompt/add-prompt")
    public Collection<Prompt> addAPromptEntry(@RequestBody String body) throws JSONException{
        JSONObject newPrompt = new JSONObject(body);
        String promptDate = newPrompt.getString("promptDate");
        String promptQuestion = newPrompt.getString("promptQuestion");
        String promptAnswer = newPrompt.getString("promptAnswer");
        return (Collection<Prompt>) promptRepo.findAll();
    }

    @RequestMapping("api/prompt/promptQuestion")
    public Optional<Prompt> displayPromptQuestion(@PathVariable String promptQuestion, Model model) {
        model.addAttribute("promptQuestion", promptRepo.findByPromptQuestion(promptQuestion));
        return (Optional<Prompt>) promptRepo.findByPromptQuestion(promptQuestion);
    }

    @RequestMapping("api/prompt/promptAnswer")
    public Optional<Prompt> displayPromptAnswer(@PathVariable String promptAnswer, Model model){
        model.addAttribute("promptAnswer", promptRepo.findByPromptAnswer(promptAnswer));
        return (Optional<Prompt>) promptRepo.findByPromptAnswer(promptAnswer);
    }

    @DeleteMapping("api/prompt/{id}")
    public Collection<Prompt> deletePrompt(@PathVariable Long id, String body) throws JSONException {

        Optional<Prompt> promptToBeDeleted = promptRepo.findById(id);
        if(promptToBeDeleted.isPresent()){
            promptRepo.delete(promptToBeDeleted.get());

        }
        return (Collection<Prompt>) promptRepo.findAll();
    }

}

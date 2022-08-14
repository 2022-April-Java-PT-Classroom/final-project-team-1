package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.ui.Model;
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

    @RequestMapping("/single-prompt/{id}")
    public String displaySinglePrompts(@PathVariable Long id, Model model) {
        model.addAttribute("singleBird", promptRepo.findById(id).get());
        return ("single-prompt-template.html");
    }

    @RequestMapping("/promptQuestion")
    public String displayPromptQuestion(@PathVariable String promptQuestion, Model model) {
        model.addAttribute("promptQuestion", promptRepo.findByPromptQuestion(promptQuestion));
        return ("promptQuestion-template.html");
    }

    @RequestMapping("/promptAnswer")
    public String displayPromptAnswer(@PathVariable String promptAnswer, Model model){
        model.addAttribute("promptAnswer", promptRepo.findByPromptAnswer(promptAnswer));
        return ("promptAnswer-template.html");
    }

    @DeleteMapping("{id}")
    public Collection<Prompt> deletePrompt(@PathVariable Long id, String body) throws JSONException {

        Optional<Prompt> promptToBeDeleted = promptRepo.findById(id);
        if(promptToBeDeleted.isPresent()){
            promptRepo.delete(promptToBeDeleted.get());

        }
        return (Collection<Prompt>) promptRepo.findAll();
    }

}

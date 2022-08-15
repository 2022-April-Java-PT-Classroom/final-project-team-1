package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.Prompt;
import org.wecancodeit.serverside.repository.PromptRepository;

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
    public Collection<Prompt> getAllPrompt(){
        return (List<Prompt>) promptRepo.findAll();
    }

    @PostMapping("/api/add-prompt")
    public Collection<Prompt> addAPromptEntry(@RequestBody String body) throws JSONException{
        JSONObject newPrompt = new JSONObject(body);
        String promptDate = newPrompt.getString("promptDate");
        String promptQuestion = newPrompt.getString("promptQuestion");
        String promptAnswer = newPrompt.getString("promptAnswer");
        return (Collection<Prompt>) promptRepo.findAll();
    }

    @RequestMapping("/single-prompt/{id}")
    public Optional<Prompt> displaySinglePrompts(@PathVariable Long id, Model model) {
        model.addAttribute("singlePrompt", promptRepo.findById(id).get());
        return (Optional<Prompt>) promptRepo.findByID(id);
    }

    @RequestMapping("/promptQuestion")
    public Optional<Prompt> displayPromptQuestion(@PathVariable String promptQuestion, Model model) {
        model.addAttribute("promptQuestion", promptRepo.findByPromptQuestion(promptQuestion));
        return (Optional<Prompt>) promptRepo.findByPromptQuestion(promptQuestion);
    }

    @RequestMapping("/promptAnswer")
    public Optional<Prompt> displayPromptAnswer(@PathVariable String promptAnswer, Model model){
        model.addAttribute("promptAnswer", promptRepo.findByPromptAnswer(promptAnswer));
        return (Optional<Prompt>) promptRepo.findByPromptAnswer(promptAnswer);
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

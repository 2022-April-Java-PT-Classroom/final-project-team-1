package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.*;
import org.wecancodeit.serverside.repository.*;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepository;

    @Resource
    private JournalRepository journalRepository;

    @Resource
    private DiscussRepository discussRepository;

    @Resource
    private DateRepository dateRepository;

    @Resource
    private PromptRepository promptRepository;

    @GetMapping("/api/user/{userName}")
    public Optional<User> getUser(@PathVariable String userName) {
        return userRepository.findByUsernameIgnoreCase(userName);
    }

    @PostMapping("/api/user/add-user")
    public Collection<User> addUsers(@RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String userName = newUser.getString("username");
        String userPassword = newUser.getString("password");
        Optional<User> usernameToAddOpt = userRepository.findByUsernameIgnoreCase(userName);
        if(usernameToAddOpt.isEmpty()){
            User userToAdd = new User(userName, userPassword);
            userRepository.save(userToAdd);
        }
        return (Collection<User>) userRepository.findAll();
    }

    @PutMapping("/api/users/{userName}/select-user")
    public Collection<User> selectUser(@PathVariable String userName, @RequestBody String body) throws JSONException {
        JSONObject findUserName = new JSONObject(body);
        String username = findUserName.getString("username");
        String password = findUserName.getString("password");
        Optional<User> userNameToSelectOpt = userRepository.findByUsernameIgnoreCase(userName);
        Optional<User> userPasswordToSelectOpt = userRepository.findByPassword(password);
        while(userNameToSelectOpt.isPresent()){
            userNameToSelectOpt.get();
            userRepository.save(userNameToSelectOpt.get());
        }
        while(userPasswordToSelectOpt.isPresent()){
            userPasswordToSelectOpt.get();
            userRepository.save(userPasswordToSelectOpt.get());
        }
        return (Collection<User>) userRepository.findAll();
    }

    @DeleteMapping("/api/user/{userName}/delete-user")
    public Collection<User> deleteUsers(@PathVariable String userName) throws JSONException {
        Optional<User> usernamesToRemoveOpt = userRepository.findByUsernameIgnoreCase(userName);
        usernamesToRemoveOpt.ifPresent(username -> userRepository.delete(username));
        return (Collection<User>) userRepository.findAll();
    }

    @GetMapping("api/collection/journals")
    public Collection<Journal> getAllJournals() throws JSONException {
        return (Collection<Journal>) journalRepository.findAll();
    }

    @GetMapping("api/collection/discuss")
    public Collection<Discuss> getAllDiscuss() throws JSONException {
        return (Collection<Discuss>) discussRepository.findAll();
    }

    @GetMapping("api/collection/dates")
    public Collection<DateNight> getAllDates() throws JSONException {
        return (Collection<DateNight>) dateRepository.findAll();
    }

    @GetMapping("api/collection/prompts")
    public Collection<Prompt> getAllPrompts() throws JSONException {
        return (Collection<Prompt>) promptRepository.findAll();
    }
}

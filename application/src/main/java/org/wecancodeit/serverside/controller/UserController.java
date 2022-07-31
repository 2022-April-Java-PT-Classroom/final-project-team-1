package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Resource
    private UserRepository userRepository;

    @GetMapping("/api/user/{userName}")
    public Optional<User> getUser(@PathVariable String userName) {
        return userRepository.findByUsername(userName);
    }

    @PostMapping("/api/user/add-user")
    public Collection<User> addUsers(@RequestBody String body) throws JSONException {
        JSONObject newUser = new JSONObject(body);
        String userName = newUser.getString("username");
        String userPassword = newUser.getString("password");
        Optional<User> usernameToAddOpt = userRepository.findByUsername(userName);
        if(usernameToAddOpt.isEmpty()){
            User userToAdd = new User(userName, userPassword);
            userRepository.save(userToAdd);
        }
        return (Collection<User>) userRepository.findAll();
    }

    @DeleteMapping("/api/user/{userName}/delete-user")
    public Collection<User> deleteUsers(@PathVariable String userName) throws JSONException {
        Optional<User> usernamesToRemoveOpt = userRepository.findByUsername(userName);
        usernamesToRemoveOpt.ifPresent(user -> userRepository.delete(user));
        return (Collection<User>) userRepository.findAll();
    }
}

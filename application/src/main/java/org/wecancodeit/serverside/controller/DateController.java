package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.DateNight;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.DateRepository;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DateController {

    @Resource
    private DateRepository dateRepo;

    @Resource
    private UserRepository userRepo;

    @GetMapping("/dateNight")
    public Collection<DateNight> getAllDateNight() {
        return (Collection<DateNight>) dateRepo.findAll();
    }

    @RequestMapping("/dateNight/{dateNightId}")
    public Optional<DateNight> getDateNightById(@PathVariable Long dateNightId) {
        return dateRepo.findById(dateNightId);
    }

    @PostMapping ("/dateNight/new-dateNight")
    public Collection<DateNight> addDateNight(@RequestBody String body) throws JSONException {
        JSONObject newDateNight = new JSONObject(body);
        String dateDate = newDateNight.getString("dateDate");
        String dateIdea = newDateNight.getString("dateIdea");
        String dateType = newDateNight.getString("dateType");
        String dateLevel = newDateNight.getString("dateLevel");
        String dateNotes = newDateNight.getString("dateNotes");

        Optional<DateNight> dateNightToAdd = dateRepo.findByDateIdea(dateIdea);

        if (dateNightToAdd.isEmpty()) {
            DateNight dateNightIdea = new DateNight(dateDate, dateIdea, dateType, dateLevel, dateNotes);
            dateRepo.save(dateNightIdea);
        }
        return (Collection<DateNight>) dateRepo.findAll();
    }

    @GetMapping("/{userName}/dateNight/{dateNightId}")
    public Collection<DateNight> getUser(@PathVariable String userName, @PathVariable Long dateNightId) {
        Optional<User> user = userRepo.findByUsernameIgnoreCase(userName);
        dateRepo.findById(dateNightId);
        return user.get().getDateNight();
    }

    @PostMapping("/{userName}/dateNight/new-dateNight")
    public Collection<DateNight> addDateNightFromUser(@PathVariable String userName, @RequestBody String body) {
        JSONObject newDateNight = new JSONObject(body);
        String dateDate = newDateNight.getString("dateDate");
        String dateIdea = newDateNight.getString("dateIdea");
        String dateType = newDateNight.getString("dateType");
        String dateLevel = newDateNight.getString("dateLevel");
        String dateNotes = newDateNight.getString("dateNotes");
        User user = userRepo.findByUsernameIgnoreCase(userName).get();

        DateNight dateNightToAdd = new DateNight(dateDate, dateIdea, dateType, dateLevel, dateNotes, user);
        dateRepo.save(dateNightToAdd);
        return user.getDateNight();
    }
}

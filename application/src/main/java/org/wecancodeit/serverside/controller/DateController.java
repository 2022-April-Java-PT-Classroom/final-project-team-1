package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.DateNight;
import org.wecancodeit.serverside.repository.DateRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class DateController {

    @Resource
    private DateRepository dateRepo;

    @GetMapping("/dateNight")
    public Collection<DateNight> getAllDateNight() {
        return (Collection<DateNight>) dateRepo.findAll();
    }

    @RequestMapping("/dateNight/{dateNightId}")
    public Optional<DateNight> getDateNightById(@PathVariable Long dateNightId) {
        return dateRepo.findById(dateNightId);
    }

    @PostMapping ("/dateNight/add-dateNight")
    public Collection<DateNight> addDateNight(@RequestBody String body) throws JSONException {
        JSONObject newDateNight = new JSONObject(body);
        String dateDate = newDateNight.getString("dateDate");
        String dateIdea = newDateNight.getString("dateIdea");
        String dateType = newDateNight.getString("dateType");
        String dateLevel = newDateNight.getString("dateLevel");
        String dateNotes = newDateNight.getString("dateNotes");

        Optional<DateNight> dateNightToAdd = dateRepo.findByDateNight(dateIdea);
        if (dateNightToAdd.isPresent()) {
            DateNight dateNightIdea = new DateNight(dateDate, dateIdea, dateType, dateLevel, dateNotes);
            dateRepo.save(dateNightIdea);
        }
        return (Collection<DateNight>) dateRepo.findAll();
    }


}

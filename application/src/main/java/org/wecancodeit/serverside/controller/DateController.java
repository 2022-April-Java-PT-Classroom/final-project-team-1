package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.model.DateNight;
import org.wecancodeit.serverside.model.Photos;
import org.wecancodeit.serverside.repository.DateRepository;
import org.wecancodeit.serverside.repository.PhotosRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Date;

@RestController
@CrossOrigin
public class DateController {

    @Resource
    private DateRepository dateRepo;

    @Resource
    private PhotosRepository photosRepo;

    @GetMapping("/dateNight")
    public Collection<DateNight> getAllDateNights() {
        return (Collection<DateNight>) dateRepo.findAll();
    }

    @PatchMapping("/dateNight/{id}/add-dateNight")
    public Collection<DateNight> addDateNight(@RequestBody String body) throws JSONException {
        JSONObject newDateNight = new JSONObject(body);
        String dateDate = newDateNight.getString("dateDate");
        String dateIdea = newDateNight.getString("dateIdea");
        String dateType = newDateNight.getString("dateType");
        String dateLevel = newDateNight.getString("dateLevel");
        String dateNotes = newDateNight.getString("dateNotes");

        DateNight dateNightToAdd = new DateNight(dateDate, dateIdea, dateType, dateLevel, dateNotes);

        return (Collection<DateNight>) dateRepo;
    }


}

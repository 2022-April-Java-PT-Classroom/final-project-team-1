package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.repository.DiscussRepository;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin("*")
public class DiscussController {
    @Resource
    private DiscussRepository discussRepo;
    @GetMapping("/discuss")
    public List<Discuss> getAllDiscuss(){
        return (List<Discuss>) discussRepo.findAll();
    }



}

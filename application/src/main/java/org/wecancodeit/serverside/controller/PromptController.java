package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Prompt;
import org.wecancodeit.serverside.repository.PromptRepository;
import org.wecancodeit.serverside.repository.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class PromptController {

    @Resource
    private PromptRepository promptRepo;

    @Resource
    private UserRepository userRepo;

    
}

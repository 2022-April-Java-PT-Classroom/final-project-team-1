package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.*;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private JournalRepository journalRepository;

    @Resource
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {


        Journal joeJournal = new Journal("July 27", "this is a test");
        journalRepository.save(joeJournal);

        User joe = new User("joebuck","12345", joeJournal);
        userRepository.save(joe);


    }
}

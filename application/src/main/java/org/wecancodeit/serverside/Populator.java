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
        Journal joeJournal2 = new Journal("July 28", "this is a test2");
        Journal joeJournal3 = new Journal("July 28", "this is a test3");
        journalRepository.save(joeJournal);
        journalRepository.save(joeJournal2);
        journalRepository.save(joeJournal3);

        User joe = new User("joebuck","12345", joeJournal,joeJournal2);

        userRepository.save(joe);

        joe.addJournals(joeJournal3);
        userRepository.save(joe);




    }
}

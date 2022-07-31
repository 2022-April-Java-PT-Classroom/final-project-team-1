package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.model.User;
import org.wecancodeit.serverside.repository.*;
import org.wecancodeit.serverside.model.DateNight;
import org.wecancodeit.serverside.model.Discuss;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private JournalRepository journalRepository;

    @Resource
    private UserRepository userRepository;
    
    @Resource
    private DateRepository dateRepo;

    @Resource
    private DiscussRepository discussRepo;

    @Resource
    private PromptRepository promptRepo;

    @Override
    public void run(String... args) throws Exception {

        // JOURNAL =========================================================================================================
        Journal joeJournal = new Journal("July 27", "this is a test");
        Journal joeJournal2 = new Journal("July 28", "this is a test2");
        Journal joeJournal3 = new Journal("July 28", "this is a test3");

        journalRepository.save(joeJournal);
        journalRepository.save(joeJournal2);
        journalRepository.save(joeJournal3);

        // USER ============================================================================================================
        User joe = new User("joebuck","12345", joeJournal,joeJournal2);
        userRepository.save(joe);

        joe.addJournals(joeJournal3);
        userRepository.save(joe);

        // DATE ============================================================================================================
        DateNight dateNight1 = new DateNight("07-28-2022", "Go hiking together", "Active", "Easy", "This is a test");
        dateRepo.save(dateNight1);

        // DISCUSS =========================================================================================================
        Discuss discuss1 = new Discuss("07-24-2022", "How can we improve our relationship?", "Increase communication", "Compliment more");
        discussRepo.save(discuss1);

        Discuss discuss01 = new Discuss("If you could change one thing about the way you were raised, what would it be and why?");
        Discuss discuss02 = new Discuss("What food or drink most evokes a feeling of home for you? Why?");
        Discuss discuss03 = new Discuss("What did you enjoy doing as a kid that is no longer part of your life?");
        Discuss discuss04 = new Discuss("What’s a very ordinary action that you find really attractive?");
        Discuss discuss05 = new Discuss("What is your favorite memory of us?");

        Discuss discuss06 = new Discuss("What is something you want to ask me but are afraid to ask me?");
        Discuss discuss07 = new Discuss("Describe the physical touch that best communicates - I love you.");
        Discuss discuss08 = new Discuss("If you could apologize to one person from your past, who would it be and why?");
        Discuss discuss09 = new Discuss("If you could ask a psychic one question about your future, what would you want to know?");
        Discuss discuss10 = new Discuss("When do you feel the strongest physically or mentally?");

        Discuss discuss11 = new Discuss("What are you most grateful for? ");
        Discuss discuss12 = new Discuss("What do you wish more people recognized you for?");
        Discuss discuss13 = new Discuss("What’s something you wish you were better at?");
        Discuss discuss14 = new Discuss("When is the last time you put a lot of effort into something outside of work or school?");
        Discuss discuss15 = new Discuss("Tell me about the person you admire most that is not a celebrity.");

        Discuss discuss16 = new Discuss("When was the last time you cried? Why?");
        Discuss discuss17 = new Discuss("If you could have a time machine for a week, what three eras would you visit and who would you be? Why?");
        Discuss discuss18 = new Discuss("If your life were a novel or a movie, would you be entertained? Would you admire your own character and the decisions they've made?");
        Discuss discuss19 = new Discuss("If you could get drinks with anyone dead or alive, who would it be?");
        Discuss discuss20 = new Discuss("What’s a valuable lesson that you’ve learned from your past relationships?");

        Discuss discuss21 = new Discuss("When we’re out with friends or family, do I make you feel like you’re still a priority?");
        Discuss discuss22 = new Discuss("What makes you feel appreciated?");
        Discuss discuss23 = new Discuss("What do you love most about your parents?");
        Discuss discuss24 = new Discuss("Is there anything you’ve longed to do in your life that you haven’t?");
        Discuss discuss25 = new Discuss("The police call to tell you I’m in custody, what crime would you think I committed?");

        discussRepo.save(discuss01);
        discussRepo.save(discuss02);
        discussRepo.save(discuss03);
        discussRepo.save(discuss04);
        discussRepo.save(discuss05);

        discussRepo.save(discuss06);
        discussRepo.save(discuss07);
        discussRepo.save(discuss08);
        discussRepo.save(discuss09);
        discussRepo.save(discuss10);

        discussRepo.save(discuss11);
        discussRepo.save(discuss12);
        discussRepo.save(discuss13);
        discussRepo.save(discuss14);
        discussRepo.save(discuss15);

        discussRepo.save(discuss16);
        discussRepo.save(discuss17);
        discussRepo.save(discuss18);
        discussRepo.save(discuss19);
        discussRepo.save(discuss20);

        discussRepo.save(discuss21);
        discussRepo.save(discuss22);
        discussRepo.save(discuss23);
        discussRepo.save(discuss24);
        discussRepo.save(discuss25);
    }
}

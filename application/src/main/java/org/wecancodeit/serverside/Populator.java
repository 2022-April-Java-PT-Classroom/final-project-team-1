package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.*;
import org.wecancodeit.serverside.repository.*;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

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
    @Resource
    private QuotesRepository quotesRepo;

    @Override
    public void run(String... args) throws Exception {

        Journal joeJournal = new Journal("July 27", "this is a test");
        journalRepository.save(joeJournal);
        Journal joeJournal2 = new Journal("July 28", "this is a test2");
        journalRepository.save(joeJournal2);
        Journal joeJournal3 = new Journal("July 28", "this is a test3");
        journalRepository.save(joeJournal3);

        Journal noelleJournal01 = new Journal("July 27", "Hi");
        journalRepository.save(noelleJournal01);
        Journal noelleJournal02 = new Journal("July 28", "How are you");
        journalRepository.save(noelleJournal02);
        Journal noelleJournal03 = new Journal("July 28", "Good and you?");
        journalRepository.save(noelleJournal03);


        // DATE ============================================================================================================
        DateNight dateNight1 = new DateNight("07-28-2022", "Go hiking together", "Active", "Easy", "We went to bush kill falls and even though we had to pay for the entrance, it was worth it. We had a great time and my partner really enjoyed the walk.");
        DateNight dateNight2 = new DateNight("08-01-2022", "Play Board Games", "Home", "Easy", "I love to play board games since I was little so playing board games with my partner brought me back to the good ol' days. I love this, will definitely do it again!");
        DateNight dateNight3 = new DateNight("Cook dinner together", "Home", "Medium");
        DateNight dateNight4 = new DateNight("Bake a dessert together", "Home", "Easy");

        DateNight dateNight5 = new DateNight("Watch a movie", "Home", "Easy");
        DateNight dateNight6 = new DateNight("Karaoke", "Home", "Easy");
        DateNight dateNight7 = new DateNight("Play Video Games", "Home", "Easy");
        DateNight dateNight8 = new DateNight("Stargaze", "Home", "Easy");

        DateNight dateNight9 = new DateNight("Binge watch a TV series", "Home", "Easy");
        DateNight dateNight10 = new DateNight("Go camping in your backyard", "Home", "Medium");
        DateNight dateNight11 = new DateNight("Do a puzzle", "Home", "Medium");
        DateNight dateNight12 = new DateNight("Go to a fancy restaurant", "Food", "Medium");

        DateNight dateNight13 = new DateNight("Find food trucks around your area", "Food", "Medium");
        DateNight dateNight14 = new DateNight("Fast Food Feast", "Food", "Easy");
        DateNight dateNight15 = new DateNight("Try a new restaurant that both of you have never tried before", "Food", "Easy");
        DateNight dateNight16 = new DateNight("Workout together", "Active", "Medium");

        DateNight dateNight17 = new DateNight("Play a sport", "Active", "Medium");
        DateNight dateNight18 = new DateNight("Visit an amusement park", "Active", "Medium");
        DateNight dateNight19 = new DateNight("Go rock climbing", "Active", "Hard");
        DateNight dateNight20 = new DateNight("Go bowling", "Active", "Medium");

        DateNight dateNight21 = new DateNight("Do a picnic and bring each other favorite foods", "Active", "Easy");
        DateNight dateNight22 = new DateNight("Go to the pool", "Active", "Easy");
        DateNight dateNight23 = new DateNight("Go sky-diving", "Active", "Hard");
        DateNight dateNight24 = new DateNight("Visit an aquarium", "Active", "Medium");

        DateNight dateNight25 = new DateNight("Visit a museum", "Active", "Medium");
        DateNight dateNight26 = new DateNight("Go surfing", "Active", "Hard");
        DateNight dateNight27 = new DateNight("Explore a new state or place", "Active", "Medium");

        dateRepo.save(dateNight1);
        dateRepo.save(dateNight2);
        dateRepo.save(dateNight3);
        dateRepo.save(dateNight4);

        dateRepo.save(dateNight5);
        dateRepo.save(dateNight6);
        dateRepo.save(dateNight7);
        dateRepo.save(dateNight8);

        dateRepo.save(dateNight9);
        dateRepo.save(dateNight10);
        dateRepo.save(dateNight11);
        dateRepo.save(dateNight12);

        dateRepo.save(dateNight13);
        dateRepo.save(dateNight14);
        dateRepo.save(dateNight15);
        dateRepo.save(dateNight16);

        dateRepo.save(dateNight17);
        dateRepo.save(dateNight18);
        dateRepo.save(dateNight19);
        dateRepo.save(dateNight20);

        dateRepo.save(dateNight21);
        dateRepo.save(dateNight22);
        dateRepo.save(dateNight23);
        dateRepo.save(dateNight24);

        dateRepo.save(dateNight25);
        dateRepo.save(dateNight26);
        dateRepo.save(dateNight27);

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

        // User constructors need to be saved last down here AND incorporate the entries saved in the repos above into the constructor,
        // at least for now. That will enable proper JSON displaying so long as the controllers pull in the collection of users properly.
        // Will be verifying this week with instructors to see if there's a more efficient way for this to happen.


        User joe = new User("joebuck","12345", joeJournal, joeJournal2, joeJournal3);
        userRepository.save(joe);

        User noelle = new User("noelleizkewl", "password", noelleJournal01, noelleJournal02, noelleJournal03);
        userRepository.save(noelle);

        Quotes quote1 = new Quotes("Act as if what you do makes a diffrence. It does.",
                "http://localhost:8080/images/quote1.png", "William James");
        quotesRepo.save(quote1);
        Quotes quote2 = new Quotes("It always seems impossible until it is done",
                "http://localhost:8080/images/quote2.png","Nelson Mandela");
        quotesRepo.save(quote2);

    }
}

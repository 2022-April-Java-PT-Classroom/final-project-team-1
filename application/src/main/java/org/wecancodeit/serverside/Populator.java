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

        User joe = new User("JOEBUCK","12345");
        userRepository.save(joe);

        User noelle = new User("noelleizkewl", "password");
        userRepository.save(noelle);

        Journal joeJournal = new Journal("July 27", "this is a test",joe);
        journalRepository.save(joeJournal);
        Journal joeJournal2 = new Journal("July 28", "this is a test2",joe);
        journalRepository.save(joeJournal2);
        Journal joeJournal3 = new Journal("July 28", "this is a test3",joe);
        journalRepository.save(joeJournal3);

        Journal noelleJournal01 = new Journal("July 27", "Hi",noelle);
        Journal noelleJournal02 = new Journal("July 28", "How are you",noelle);
        Journal noelleJournal03 = new Journal("July 28", "Good and you?",noelle);
        journalRepository.save(noelleJournal01);
        journalRepository.save(noelleJournal02);
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

        Quotes quote1 = new Quotes("Act as if what you do makes a difference. It does.",
                "http://localhost:8080/images/quote1.png", "William James");
        quotesRepo.save(quote1);
        Quotes quote2 = new Quotes("It always seems impossible until it is done",
                "http://localhost:8080/images/quote2.png","Nelson Mandela");
        quotesRepo.save(quote2);
        Quotes quote3 = new Quotes("Keep your face always towards sunshine" +
                " - and shadows will fall behind you","http://localhost:8080/images/quote3.jpg",
                "WAlT WHITMAN");
        quotesRepo.save(quote3);
        Quotes quote4 = new Quotes("Don't be afraid. Be focused. Be Determined. Be Hopeful. Be empowered.",
                "http://localhost:8080/images/quote4.webp","Michelle Obama");
        quotesRepo.save(quote4);
        Quotes quote5 = new Quotes("There is always light. If we are brave enough to see it. If only we are brave enough" +
                " to be it.","http://localhost:8080/images/quote5.png","Amanda Gorman");
        quotesRepo.save(quote5);
        Quotes quote6 = new Quotes("If you are not fulfilled and happy, It is not success",
                "http://localhost:8080/images/quote6.png","Quotling");
        quotesRepo.save(quote6);
        Quotes quote7 = new Quotes("The quickest way to double your money is to fold it and put it back in your pocket",
                "http://localhost:8080/images/quote7.jpg","Will Rogers");
        quotesRepo.save(quote7);
        Quotes quote8 = new Quotes("Don't spend time beating on a wall, hoping to transform it into a door",
                "http://localhost:8080/images/quote8.jpg","Coco Chanel");
        quotesRepo.save(quote8);
        Quotes quote9 = new Quotes("Failure is not the opposite of success. It is part of success.",
                "http://localhost:8080/images/quote9.jpg","Brian Tracy");
        quotesRepo.save(quote9);
        Quotes quote10 = new Quotes("Nothing is impossible. The world itself says I am possible",
                "http://localhost:8080/images/quote10.jpg", "Audrey Hepburn");
        quotesRepo.save(quote10);

//      prompts================================================================================
        Prompt prompt1 = new Prompt("What do you admire most about your partner?");
        Prompt prompt2 = new Prompt("What things make you feel loved?");
        Prompt prompt3 = new Prompt("Why are you grateful for your partner?");
        Prompt prompt4 = new Prompt("How does your partner inspire you?");
        Prompt prompt5= new Prompt("What goals do you have for your relationship?");
        Prompt prompt6 = new Prompt("What are you afraid of?");
        Prompt prompt7 = new Prompt("What resentment are you holding onto?");
        Prompt prompt8 = new Prompt("What one thing can you do today to show love to your partner?");
        Prompt prompt9 = new Prompt("How does this relationship help you to be a better person?");
        Prompt prompt10 = new Prompt("What is something your partner does that makes you feel special?");
        Prompt prompt11 = new Prompt("What one thing about your relationship do you appreciate most?");
        Prompt prompt12 = new Prompt("What one thing would you like to change about your relationship?");
        Prompt prompt13 = new Prompt("What is your favorite memory with your partner?");

        promptRepo.save(prompt1);
        promptRepo.save(prompt2);
        promptRepo.save(prompt3);
        promptRepo.save(prompt4);
        promptRepo.save(prompt5);
        promptRepo.save(prompt6);
        promptRepo.save(prompt7);
        promptRepo.save(prompt8);
        promptRepo.save(prompt9);
        promptRepo.save(prompt10);
        promptRepo.save(prompt11);
        promptRepo.save(prompt12);
        promptRepo.save(prompt13);

        // ADMIN ===========================================================================================================
        User admin = new User("admin", "admin");
        userRepository.save(admin);

        Journal adminJournal01 = new Journal("2022-08-01", "01 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Journal adminJournal02 = new Journal("2022-08-02", "02 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Journal adminJournal03 = new Journal("2022-08-03", "03 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Journal adminJournal04 = new Journal("2022-08-04", "04 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Journal adminJournal05 = new Journal("2022-08-07", "05 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);

        Discuss adminDiscuss01 = new Discuss("2022-08-03", "If you could change one thing about the way you were raised, what would it be and why?", "If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss02 = new Discuss("2022-08-04", "When do you feel the strongest physically or mentally?", "I feel strongest when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "I feel strongest when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss03 = new Discuss("2022-08-05", "When we’re out with friends or family, do I make you feel like you’re still a priority?", "I feel like a priority when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "I feel like a priority when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss04 = new Discuss("2022-08-05", "What food or drink most evokes a feeling of home for you? Why?", "What reminds me of home is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "What reminds me of home is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss05 = new Discuss("2022-08-08", "What’s a very ordinary action that you find really attractive?", "An action I find attractive is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "An action I find attractive is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss06 = new Discuss("2022-08-11", "What is your favorite memory of us? ", "My favorite memory of us is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "My favorite memory of us is  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Discuss adminDiscuss07 = new Discuss("2022-08-12", "What did you enjoy doing as a kid that is no longer part of your life?", "As a kid, I enjoyed - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "As a kid, I enjoyed - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);

        DateNight adminDate01 = new DateNight("2022-08-06", "Explore a new state or place", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", admin);
        DateNight adminDate02 = new DateNight("2022-08-20", "Do a picnic and bring each other favorite foods", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", admin);
        DateNight adminDate03 = new DateNight("2022-08-21", "Do a puzzle", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", admin);
        DateNight adminDate04 = new DateNight("2022-08-28", "Find food trucks around your area", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", admin);

        Prompt adminPrompt01 = new Prompt("2022-08-02", "What goals do you have for your relationship?", "My goals are - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Prompt adminPrompt02 = new Prompt("2022-08-15", "When was the last time I surprised my partner with something thoughtful?", "The last time was - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);
        Prompt adminPrompt03 = new Prompt("2022-08-18", "What does my partner love that I could prioritize more?", "I could prioritize - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", admin);

        journalRepository.save(adminJournal01);
        journalRepository.save(adminJournal02);
        journalRepository.save(adminJournal03);
        journalRepository.save(adminJournal04);
        journalRepository.save(adminJournal05);

        discussRepo.save(adminDiscuss01);
        discussRepo.save(adminDiscuss02);
        discussRepo.save(adminDiscuss03);
        discussRepo.save(adminDiscuss04);
        discussRepo.save(adminDiscuss05);
        discussRepo.save(adminDiscuss06);
        discussRepo.save(adminDiscuss07);

        dateRepo.save(adminDate01);
        dateRepo.save(adminDate02);
        dateRepo.save(adminDate03);
        dateRepo.save(adminDate04);

        promptRepo.save(adminPrompt01);
        promptRepo.save(adminPrompt02);
        promptRepo.save(adminPrompt03);

        // DEMO USER =======================================================================================================

        User jane = new User("jane", "jane");
        userRepository.save(jane);

        Journal janeJournal01 = new Journal("2022-08-01", "01 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Journal janeJournal02 = new Journal("2022-08-02", "02 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Journal janeJournal03 = new Journal("2022-08-03", "03 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Journal janeJournal04 = new Journal("2022-08-04", "04 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Journal janeJournal05 = new Journal("2022-08-07", "05 Here are my thoughts today - If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);

        Discuss janeDiscuss01 = new Discuss("2022-08-03", "If you could change one thing about the way you were raised, what would it be and why?", "If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "If I could change one thing it would be - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Discuss janeDiscuss02 = new Discuss("2022-08-04", "When do you feel the strongest physically or mentally?", "I feel strongest when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "I feel strongest when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Discuss janeDiscuss03 = new Discuss("2022-08-05", "When we’re out with friends or family, do I make you feel like you’re still a priority?", "I feel like a priority when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "I feel like a priority when - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Discuss janeDiscuss04 = new Discuss("2022-08-05", "What food or drink most evokes a feeling of home for you? Why?", "What reminds me of home is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "What reminds me of home is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Discuss janeDiscuss05 = new Discuss("2022-08-08", "What’s a very ordinary action that you find really attractive?", "An action I find attractive is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "An action I find attractive is - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);

        DateNight janeDate01 = new DateNight("2022-08-06", "Explore a new state or place", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", jane);
        DateNight janeDate02 = new DateNight("2022-08-20", "Do a picnic and bring each other favorite foods", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", jane);
        DateNight janeDate03 = new DateNight("2022-08-21", "Do a puzzle", "Active", "Medium", "Our Experience - I wish we stayed a little longer, there were many things to do and so little time. We only stayed in California for a week and that's definitely not enough. My partner and I tried so many different foods is insane, but there was so much more to try! If I could change something it will probably be a longer stay, 2 weeks is not enough... but that means we have to visit again! I am already excited for our next trip.", jane);

        Prompt janePrompt01 = new Prompt("2022-08-02", "What goals do you have for your relationship?", "My goals are - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Prompt janePrompt02 = new Prompt("2022-08-15", "What was your first impression of your partner?", "My first impression was - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Prompt janePrompt03 = new Prompt("2022-08-18", "What does my partner love that I could prioritize more?", "I could prioritize - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);
        Prompt janePrompt04 = new Prompt("2022-08-19", "When was the last time you had a good dream about your partner? What was the dream about?", "The last dream I had was - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", jane);


        journalRepository.save(janeJournal01);
        journalRepository.save(janeJournal02);
        journalRepository.save(janeJournal03);
        journalRepository.save(janeJournal04);
        journalRepository.save(janeJournal05);

        discussRepo.save(janeDiscuss01);
        discussRepo.save(janeDiscuss02);
        discussRepo.save(janeDiscuss03);
        discussRepo.save(janeDiscuss04);
        discussRepo.save(janeDiscuss05);

        dateRepo.save(janeDate01);
        dateRepo.save(janeDate02);
        dateRepo.save(janeDate03);

        promptRepo.save(janePrompt01);
        promptRepo.save(janePrompt02);
        promptRepo.save(janePrompt03);
        promptRepo.save(janePrompt04);
    }
}

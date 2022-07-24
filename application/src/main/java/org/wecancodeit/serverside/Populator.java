package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Discuss;
import org.wecancodeit.serverside.repository.DiscussRepository;

import javax.annotation.Resource;


@Component
public class Populator implements CommandLineRunner {

    @Resource
    private DiscussRepository discussRepo;





    @Override
    public void run(String... args) throws Exception {

        Discuss discuss1 = new Discuss("07-24-2022", "How can we improve our relationship?",
                "Increase communication", "Compliment more");

        discussRepo.save(discuss1);







    }
}

package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Prompt;

import java.util.List;

@Repository
public interface PromptRepository extends CrudRepository<Prompt, Long> {

    List<Prompt> findByID(long id);
    List<Prompt> findByPromptDate(String promptDate);
    List<Prompt> findByPromptQuestion(String promptQuestion);
    List<Prompt> findByPromptAnswer(String promptAnswer);

}

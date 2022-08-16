package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Prompt;

import java.util.List;
import java.util.Optional;

public interface PromptRepository extends CrudRepository<Prompt, Long> {
    Optional<Prompt> findByPromptDate(String promptDate);
    Optional<Prompt> findByPromptQuestion(String promptQuestion);
    Optional<Prompt> findByPromptAnswer(String promptAnswer);

}

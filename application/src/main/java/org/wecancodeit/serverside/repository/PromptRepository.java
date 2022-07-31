package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Prompt;

@Repository
public interface PromptRepository extends CrudRepository<Prompt, Long> {
}

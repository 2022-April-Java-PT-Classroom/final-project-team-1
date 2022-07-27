package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Prompt;

public interface PromptRepository extends CrudRepository<Prompt, Long> {
}

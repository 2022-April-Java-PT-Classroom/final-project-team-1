package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Discuss;
import java.util.Optional;

public interface DiscussRepository extends CrudRepository<Discuss, Long> {
    Optional<Discuss> findByDiscussQuestion(String discussQuestion);
}

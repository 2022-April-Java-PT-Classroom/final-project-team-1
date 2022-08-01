package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Discuss;

import java.util.Optional;

@Repository
public interface DiscussRepository extends CrudRepository<Discuss, Long> {
    Optional<Discuss> findByQuestion(String discussQuestion);

}

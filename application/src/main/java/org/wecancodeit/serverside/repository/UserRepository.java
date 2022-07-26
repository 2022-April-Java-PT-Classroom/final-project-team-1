package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsernameIgnoreCase(String username);
    Optional<User> findByPassword(String password);
    Optional<Journal> findByJournals(String journal);
}

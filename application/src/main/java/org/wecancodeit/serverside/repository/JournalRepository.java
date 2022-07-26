package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Journal;
import org.wecancodeit.serverside.model.User;

import java.util.Optional;

public interface JournalRepository extends CrudRepository<Journal, Long> {
    Optional<Journal> findByJournalEntry(String journalEntry);
    Optional<Journal> findByJournalDate(String journalDate);
    Optional<User> findByUser(String username);
    Optional<Journal> findById(Long id);
}

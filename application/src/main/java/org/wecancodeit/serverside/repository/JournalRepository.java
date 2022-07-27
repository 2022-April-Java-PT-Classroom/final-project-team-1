package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Journal;

import java.util.Optional;

public interface JournalRepository extends CrudRepository<Journal, Long> {
    Optional<Journal> findByEntry(String entry);
    Optional<Journal> findByDate(String date);
}

package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Journal;

public interface JournalRepository extends CrudRepository<Journal, Long> {
}

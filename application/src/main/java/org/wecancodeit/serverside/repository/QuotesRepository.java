package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Quotes;

public interface QuotesRepository extends CrudRepository<Quotes, Long> {
}

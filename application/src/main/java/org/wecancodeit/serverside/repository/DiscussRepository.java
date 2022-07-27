package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Discuss;

public interface DiscussRepository extends CrudRepository<Discuss, Long> {
}

package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.DateNight;


public interface DateRepository extends CrudRepository<DateNight, Long> {
}

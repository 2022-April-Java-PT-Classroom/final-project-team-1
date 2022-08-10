package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.DateNight;

import java.util.Optional;

@Repository
public interface DateRepository extends CrudRepository<DateNight, Long> {

    Optional<DateNight> findByDateIdea(String dateIdea);

}

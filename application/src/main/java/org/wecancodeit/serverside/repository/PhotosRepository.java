package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Photos;

public interface PhotosRepository extends CrudRepository<Photos, Long> {
}

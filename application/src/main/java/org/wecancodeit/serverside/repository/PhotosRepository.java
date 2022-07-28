package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Photos;

@Repository
public interface PhotosRepository extends CrudRepository<Photos, Long> {
}

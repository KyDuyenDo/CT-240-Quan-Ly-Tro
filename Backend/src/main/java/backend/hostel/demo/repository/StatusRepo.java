package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Status;

public interface StatusRepo extends CrudRepository<Status, String> {

	
}

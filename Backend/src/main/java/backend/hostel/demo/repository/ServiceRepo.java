package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Service;

public interface ServiceRepo extends CrudRepository<Service, String> {
	@Query
	
}

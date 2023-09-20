package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.User;

public interface UserRepo extends CrudRepository<User, String> {

	
}

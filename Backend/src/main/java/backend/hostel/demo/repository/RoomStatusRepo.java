package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Roomstatus;

public interface RoomStatusRepo extends CrudRepository<Roomstatus, String> {

	
}

package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Room;

public interface RoomRepo extends CrudRepository<Room, String> {

}

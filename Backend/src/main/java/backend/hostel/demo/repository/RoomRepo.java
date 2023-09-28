package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Room;

public interface RoomRepo extends CrudRepository<Room, String> {	
	@Query(value = "select * from room where room_id = ?1", nativeQuery = true)
	Room findRoomById(String id);
	
	@Query(value = "SELECT * FROM ROOM WHERE AREA = ?1", nativeQuery = true)
	Iterable<Room> findAllByArea(float area);
	
	@Query(value = "SELECT * FROM ROOM WHERE RENTAL_PRICE = ?1", nativeQuery = true)
	Iterable<Room> findAllByPrice(float price);
	
	@Query(value = "SELECT * FROM ROOM WHERE USED = ?1", nativeQuery = true)
	Iterable<Room> findAllByUsedNumber(int used);

}

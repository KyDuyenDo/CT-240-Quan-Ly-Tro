package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Room;
import backend.hostel.demo.entity.Roomstatus;

public interface RoomStatusRepo extends CrudRepository<Roomstatus, String> {
	
	@Query(value ="SELECT r.ROOM_ID, r.AREA, r.RENTAL_PRICE, r.MAX, r.USED FROM ROOM r\r\n"
			+ "INNER JOIN ROOM_STATUS rs ON r.room_id = rs.room_id\r\n"
			+ "WHERE rs.status_id = ?1", nativeQuery = true)
	Iterable<Room> findRoomsByStatus(String status);
}

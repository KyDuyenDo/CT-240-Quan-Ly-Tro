package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Service;
import backend.hostel.demo.entity.ServiceOfRoom;

public interface ServiceOfRoomRepo extends CrudRepository<ServiceOfRoom, String> {
	@Query(value = "SELECT S.SERVICE_ID, S.SERVICE_NAME, S.PRICE, S.UNIT FROM SERVICE S"
			+ "INNER JOIN SERVICE_OF_ROOM SR"
			+ "ON SR.SERVICE_ID = S.SERVICE_ID"
			+ "WHERE ROOM_ID = ?1", nativeQuery = true)
	public Iterable<Service> findServiceByRoom(String roomId);
	
}

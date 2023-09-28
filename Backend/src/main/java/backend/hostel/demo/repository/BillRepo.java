package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Bill;

public interface BillRepo extends CrudRepository<Bill, String> {
	@Query(value = "SELECT * FROM BILL WHERE ROOM_ID = ?1", nativeQuery = true)
	Iterable<Bill> findAllByRoom(String room_id);
	
	@Query(value = "SELECT * FROM BILL WHERE MONTH = ?1 AND YEAR = ?1", nativeQuery = true)
	Iterable<Bill> findAllByMonth(int month, int year);
	
	@Query(value = "SELECT * FROM BILL WHERE USERNAME = ?1", nativeQuery = true)
	Iterable<Bill> findAllByUser(String username);
	
	
	@Query(value = "SELECT * FROM BILL WHERE BILL_ID = ?1", nativeQuery = true)
	Bill findbyId(String billId);
}

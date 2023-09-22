package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Bill;
import backend.hostel.demo.entity.Billstatus;

public interface BillStatusRepo extends CrudRepository<Billstatus, String> {
	
	@Query(value = "SELECT B.BILL_ID, B.ROOM_ID, B.MONTH, B.YEAR, "
			+ "B.USERNAME, B.CREATED_DATE, B.TOTAL_AMOUNT, B.PAID_DATE "
			+ "FROM BILL B "
			+ "INNER JOIN BILL_STATUS BS "
			+ "ON B.BILL_ID = BS.BILL_ID "
			+ "WHERE BS.STATUS_ID = ?1", nativeQuery = true)
	Iterable<Bill> findAllByStatus(String statusId);

	
}

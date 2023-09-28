package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Contract;
import backend.hostel.demo.entity.StatusContract;

public interface StatusContractRepo extends CrudRepository<StatusContract, String> {

	@Query(value = "SELECT C.CONTRACT_ID, C.TENANT_ID, C.USERNAME, C.START_DATE, C.END_DATE, C.CREATE_DATE, C.NOTE" 
			+ "FROM CONTRACT C "
			+ "INNER JOIN STATUS_CONTRACT SC "
			+ "ON C.CONTRACT_ID = SC.CONTRACT_ID "
			+ "WHERE SC.STATUS_ID = ?1", nativeQuery = true)
	Iterable<Contract> findAllByStatus(String statusId);
}

package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Tenant;
import backend.hostel.demo.entity.TenantStatus;

public interface TenantStatusRepo extends CrudRepository<TenantStatus, String> {
	@Query(value = "SELECT T.TENANT_ID, T.ROOM_ID, T.TENANT_NAME, T.PHONE_NUMBER, T.ADDRESS, T.DATE_OF_BIRTH, T.WORK"
			+ "FROM TENANT T INNER JOIN TENANT_STATUS TS"
			+ "ON T.TENANT_ID = TS.TENANT_ID"
			+ "WHERE TS.STATUS_ID = ?1", nativeQuery = true)
	public Iterable<Tenant> findTenantByStatus(String statusId);
	
}

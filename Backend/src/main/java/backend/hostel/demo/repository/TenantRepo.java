package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Tenant;

public interface TenantRepo extends CrudRepository<Tenant, String> {
	@Query(value = "SELECT * FROM TENANT WHERE TENANT_NAME = ?1", nativeQuery = true)
	public Iterable<Tenant> findAllByName(String fullname);
	
	@Query(value = "SELECT * FROM TENANT WHERE ROOM_ID = ?1", nativeQuery = true)
	public Iterable<Tenant> findAllByRoom(String roomId);
	
}

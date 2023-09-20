package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.TenantStatus;

public interface TenantStatusRepo extends CrudRepository<TenantStatus, String> {

	
}

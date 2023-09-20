package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Tenant;

public interface TenantRepo extends CrudRepository<Tenant, String> {

	
}

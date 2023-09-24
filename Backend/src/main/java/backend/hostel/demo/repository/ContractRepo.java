package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Contract;

public interface ContractRepo extends CrudRepository<Contract, String> {
	@Query(value = "SELECT * FROM CONTRACT WHERE TENANT_ID = ?1", nativeQuery = true)
	public Iterable<Contract> findAllByTenant(String tenantId);
	
	@Query(value = "SELECT * FROM CONTRACT WHERE USERNAME = ?1", nativeQuery = true)
	public Iterable<Contract> findAllByUsername(String username);
	
	@Query(value = "SELECT * FROM CONTRACT WHERE CONTRACT_ID = ?1", nativeQuery = true)
	public Contract findByID(String contractId);
	
}


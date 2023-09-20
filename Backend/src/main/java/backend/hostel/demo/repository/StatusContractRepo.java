package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.StatusContract;

public interface StatusContractRepo extends CrudRepository<StatusContract, String> {

	
}

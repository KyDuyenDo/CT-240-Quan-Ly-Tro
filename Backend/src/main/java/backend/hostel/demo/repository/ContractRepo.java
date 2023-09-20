package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Contract;

public interface ContractRepo extends CrudRepository<Contract, String> {

}

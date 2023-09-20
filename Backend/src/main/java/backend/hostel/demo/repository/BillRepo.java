package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Bill;

public interface BillRepo extends CrudRepository<Bill, String> {

	
}

package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Receipt;

public interface ReceiptRepo extends CrudRepository<Receipt, String> {

	
}

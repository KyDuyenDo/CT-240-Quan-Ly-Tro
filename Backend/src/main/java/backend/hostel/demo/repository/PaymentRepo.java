package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Payment;

public interface PaymentRepo extends CrudRepository<Payment, String> {

	
}

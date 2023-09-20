package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.PaymentMethod;

public interface PaymentMethodRepo extends CrudRepository<PaymentMethod, String> {

}

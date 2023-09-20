package backend.hostel.demo.repository;

import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Billstatus;

public interface BillStatusRepo extends CrudRepository<Billstatus, String> {

	
}

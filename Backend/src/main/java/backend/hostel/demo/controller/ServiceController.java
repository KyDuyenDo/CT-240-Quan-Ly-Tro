package backend.hostel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import backend.hostel.demo.dto.BillDto;
import backend.hostel.demo.service.BillService;

@Controller
@RequestMapping("/service")
public class ServiceController {
	
	@Autowired
	BillService billService;
	
	@GetMapping("")
	public ResponseEntity<?> getBills() {
		return ResponseEntity.ok(billService.getBills());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getBillById(@PathVariable(value = "id") String billId) {
		return ResponseEntity.ok(billService.getBillById(billId));
	}
	
	@PostMapping(value = "", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createbill(BillDto billDto) {
		return ResponseEntity.ok(billService.createBill(billDto));
	}

	@PutMapping(value = "/{id}", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> updatebill(@PathVariable(value = "id") String billId, BillDto billDto) {
		return ResponseEntity.ok(billService.updateBill(billDto));
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deletebill(@PathVariable(value = "id") String billId) {
		return ResponseEntity.ok(billService.deleteBill(billId));
	}
	
	@GetMapping("/confirm/{id}")
	public ResponseEntity<?> confirmPayment(@PathVariable(value = "id") String billId) {
		return ResponseEntity.ok(billService.comfirmPayment(billId));
	}
	
}

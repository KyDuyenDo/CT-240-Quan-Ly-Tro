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
@RequestMapping(value = "/bill")
public class BillController {
	@Autowired
	private BillService billService;
	
	@GetMapping(value = "")
	public ResponseEntity<?> getBills() {
		return ResponseEntity.ok(billService.getBills());
	}
	
	@GetMapping(value = "{id}")
	public ResponseEntity<?> getBillById(@PathVariable(value = "id") String id) {
		return ResponseEntity.ok(billService.getBillById(id));
	}
	
	@PostMapping(value = "", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createBill(BillDto billDto) {
		return ResponseEntity.ok(billService.createBill(billDto));
	}
	
	@PutMapping(value = "{id}", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> updateBill(@PathVariable(value = "id") String id, BillDto billDto) {
		return ResponseEntity.ok(billService.updateBill(billDto));
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<?> deleteBill(@PathVariable(value = "id") String id) {
		return ResponseEntity.ok(billService.deleteBill(id));
	}
	
	
	
}

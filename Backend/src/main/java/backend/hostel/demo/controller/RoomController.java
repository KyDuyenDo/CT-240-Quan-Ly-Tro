package backend.hostel.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.dto.IndexDto;

import backend.hostel.demo.dto.BillDto;
import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.dto.IndexDto;
import backend.hostel.demo.dto.RoomDto;

import backend.hostel.demo.dto.TenantDto;
import backend.hostel.demo.service.BillService;
import backend.hostel.demo.service.ContractService;
import backend.hostel.demo.service.IndexService;
import backend.hostel.demo.service.RoomService;
import backend.hostel.demo.service.ServiceService;
import backend.hostel.demo.service.TenantService;

@Controller
@RequestMapping("/room")
public class RoomController {
	
	@Autowired
	private RoomService roomService;
	
	@Autowired
	private BillService billService;
	
	@Autowired
	private ServiceService serviceService;
	
	@Autowired
	private TenantService tenantService;
	   
	@Autowired
	private IndexService indexService;
	
	@Autowired
	private ContractService contractService;
	
	
	@GetMapping("/")
	public ResponseEntity<?> getRooms() {
		return ResponseEntity.ok(roomService.getRooms());
	}
	   
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getRoomById(@PathVariable(value = "id") String roomId) {
		return ResponseEntity.ok(roomService.getRoomsById(roomId));
	}
	   
	
	@PostMapping(value = "/", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createRoom(RoomDto roomDto) {
		return ResponseEntity.ok(roomService.createRoom(roomDto));
	}
	
	@PutMapping(value = "/{id}", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> updateRoom(@PathVariable(value = "id") String roomId, RoomDto roomDto) {
		return ResponseEntity.ok(roomService.updateRoom(roomDto));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deleteRoom(@PathVariable(value = "id") String roomId) {
		return ResponseEntity.ok(roomService.deleteRoom(roomId));
	}
	
	@PostMapping(value = "/{id}/bill", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createBill(@PathVariable(value = "id") String roomId, BillDto billDto) {
		return ResponseEntity.ok((billService.createBill(billDto)));
	}
	
	@GetMapping(value = "/{id}/bill")
	public ResponseEntity<?> getPaymentHistoryByRooom(@PathVariable(value = "id") String roomId) {
		return ResponseEntity.ok(billService.getBillsByRoom(roomId));
	}

	
	@GetMapping(value = "/{id}/tenant")
    public ResponseEntity<?> getTenants(@PathVariable(value = "id") String roomId) {
    	return ResponseEntity.ok(tenantService.getTenantByRoom(roomId));
    }
	
	@PostMapping(value = "/{id}/tenant", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createTenant(@PathVariable(value = "id") String roomId, TenantDto tenant) {
		return ResponseEntity.ok(tenantService.createTenant(tenant));
	}
	
	@DeleteMapping(value = "/{id}/tenant/{tenant-id}")
	public ResponseEntity<?> deleteTenant(@PathVariable(value = "id") String roomId ,@PathVariable(value = "tenant-id") String tenantId) {
		return ResponseEntity.ok(tenantService.deleteTenant(tenantId));
	}
	   
	@PutMapping(value = "/{id}/service/order", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> orderServices(@PathVariable(value = "id") String roomId, List<String> servicesId) {
		return ResponseEntity.ok(serviceService.orderServiceByRoom(roomId, servicesId));
	}
	
	@PostMapping(value = "/{id}/index/", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createIndexWE(@PathVariable(value = "id") String roomId, IndexDto index) {
		return ResponseEntity.ok(indexService.createIndex(index));
	}
	    
	@PutMapping(value = "/{id}/index/", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> updateIndexWE(String roomId, IndexDto index) {
		return ResponseEntity.ok(indexService.updateIndex(index));
	}
		
}

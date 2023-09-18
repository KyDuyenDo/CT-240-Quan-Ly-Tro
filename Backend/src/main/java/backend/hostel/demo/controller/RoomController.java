package backend.hostel.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

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
public class RoomController {
	private RoomService roomService;
	   
	private BillService billService;
	
	private ServiceService serviceService;
	   
	private TenantService tenantService;
	   
	private IndexService indexService;
	  
	private ContractService contractService;
	   
	public ResponseEntity<?> getRooms() {
		return null;
	}
	   
	  
	public ResponseEntity<?> getRoomById(String roomId) {
		return null;
	}
	   
	
	public ResponseEntity<?> createRoom(RoomDto roomDto) {
		return null;
	}

	public ResponseEntity<?> updateRoom(String roomId, RoomDto roomDto) {
		return null;
	}
	   
	public ResponseEntity<?> deleteRoom(String roomId) {
		return null;
	}
		   
	public ResponseEntity<?> createBill(String roomId, BillDto billDto) {
		return null;
	}

	public ResponseEntity<?> getPaymentHistoryByRooom(String roomId) {
		return null;
	}
	   
	public ResponseEntity<?> getConstracts(String roomId) {
		return null;
	}
	   
    public ResponseEntity<?> createContract(String roomId, ContractDto contract) {
       return null;
    }
	   
    public ResponseEntity<?> getTenants(String roomId) {
    	return null;
    }
	   
	public ResponseEntity<?> createTenant(String roomId, TenantDto tenant) {
		return null;
	}
	   
	public ResponseEntity<?> deleteTenant(String tenantId) {
		return null;
	}
	   
	public ResponseEntity<?> orderServices(String roomId, List<String> servicesId) {
		return null;
	}
	   
	public ResponseEntity<?> createIndexWE(String roomId, IndexDto index) {
		return null;
	}
	   
	public ResponseEntity<?> updateIndexWE(String roomId, IndexDto index) {
		return null;
	}
		
}

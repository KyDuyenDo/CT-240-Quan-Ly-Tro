package backend.hostel.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import backend.hostel.demo.dto.TenantDto;
import backend.hostel.demo.service.TenantService;

public class TennantController {
	@Autowired
	private TenantService TenantService;

	@GetMapping(value = "")
	public ResponseEntity<?> getTenants() {
		return ResponseEntity.ok(TenantService.getTenants());
	}

	@GetMapping(value = "{id}")
	public ResponseEntity<?> getTenantById(@PathVariable(value = "id") String id) {
		return ResponseEntity.ok(TenantService.getTenantById(id));
	}

	@PostMapping(value = "", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createTenant(TenantDto TenantDto) {
		return ResponseEntity.ok(TenantService.createTenant(TenantDto));
	}

	@PutMapping(value = "{id}", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> updateTenant(@PathVariable(value = "id") String id, TenantDto TenantDto) {
		return ResponseEntity.ok(TenantService.updateTenant(TenantDto));
	}

	@DeleteMapping(value = "{id}")
	public ResponseEntity<?> deleteTenant(@PathVariable(value = "id") String id) {
		return ResponseEntity.ok(TenantService.deleteTenant(id));
	}

	public ResponseEntity<?> moveTenant(String tenantId, String roomId) {
		return ResponseEntity.ok(TenantService.moveTenant(tenantId, roomId));
	}
}

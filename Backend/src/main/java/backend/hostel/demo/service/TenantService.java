package backend.hostel.demo.service;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.TenantDto;

@Service
public interface TenantService {
	Iterable<TenantDto> getTenants();
	
	Iterable<TenantDto> getTenantByName(String fullname);
		  
	Iterable<TenantDto> getTenantByRoom(String roomId);
	
	Iterable<TenantDto> getTenantByStatus(String statusId);
	
	TenantDto getTenantById(String tenantId);
	
	TenantDto createTenant(TenantDto newTenant);
	
	TenantDto updateTenant(TenantDto tenant);
	
	TenantDto deleteTenant(String tenantId);
	
	TenantDto moveTenant(String tenantId, String roomId);
	
}

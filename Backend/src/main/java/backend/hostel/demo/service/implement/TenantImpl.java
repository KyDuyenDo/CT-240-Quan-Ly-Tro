package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.TenantDto;
import backend.hostel.demo.repository.TenantRepo;
import backend.hostel.demo.service.TenantService;

@Component
public class TenantImpl implements TenantService {
	
	@Autowired
	private TenantRepo tenantRepo;
	

	@Override
	public Iterable<TenantDto> getTenants() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<TenantDto> getTenantByName(String fullname) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<TenantDto> getTenantByRoom(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<TenantDto> getTenantByStatus(String statusId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TenantDto getTenantById(String tenantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TenantDto createTenant(TenantDto newTenant) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TenantDto updateTenant(TenantDto tenant) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TenantDto deleteTenant(String tenantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TenantDto moveTenant(String tenantId, String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

}

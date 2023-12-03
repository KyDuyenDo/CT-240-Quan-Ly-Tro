package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.TenantDto;
import backend.hostel.demo.entity.Tenant;
import backend.hostel.demo.mapper.TenantMapper;
import backend.hostel.demo.repository.TenantRepo;
import backend.hostel.demo.service.TenantService;

@Component
public class TenantImpl implements TenantService {
	
	@Autowired
	private TenantRepo tenantRepo;
	
	

	@Override
	public Iterable<TenantDto> getTenants() {
		return TenantMapper.toDtoList(tenantRepo.findAll());
	}

	@Override
	public Iterable<TenantDto> getTenantByName(String fullname) {
		return TenantMapper.toDtoList(tenantRepo.findAllByName(fullname));
	}

	@Override
	public Iterable<TenantDto> getTenantByRoom(String roomId) {
		return TenantMapper.toDtoList(tenantRepo.findAllByRoom(roomId));
	}

	@Override
	public Iterable<TenantDto> getTenantByStatus(String statusId) {
		return null;
	}

	@Override
	public TenantDto getTenantById(String tenantId) {
		return TenantMapper.toDto(tenantRepo.findById(tenantId).get());
	}

	@Override
	public TenantDto createTenant(TenantDto tenantDto) {
		Tenant tenant = new Tenant(tenantDto.getTenantId(), tenantDto.getRoomId(), tenantDto.getTenantName(), tenantDto.getPhoneNumber()
				,tenantDto.getAddress(), tenantDto.getDateOfBirth(), tenantDto.getWork());
		
		return TenantMapper.toDto(tenantRepo.save(tenant));
				
	}

	@Override
	public TenantDto updateTenant(TenantDto tenantDto) {
		Tenant tenant = tenantRepo.findById(tenantDto.getTenantId()).orElse(null);
		
		if(tenant == null)
			return null;
		else {
			tenant = TenantMapper.toEntity(tenantDto);
			return TenantMapper.toDto(tenantRepo.save(tenant));
		}
	}

	@Override
	public TenantDto deleteTenant(String tenantId) {
		tenantRepo.deleteById(tenantId);
		return TenantMapper.toDto(tenantRepo.findById(tenantId).get());
	}
	

	@Override
	public TenantDto moveTenant(String tenantId, String roomId) {
		// TODO Auto-generated method stub
		return null;
	}


}

package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.TenantDto;
import backend.hostel.demo.entity.Tenant;

public class TenantMapper {
	public static TenantDto toDto(Tenant from) {
		TenantDto to = new TenantDto();
		
		to.setAddress(from.getAddress());
		to.setDateOfBirth(from.getDateOfBirth());
		to.setPhoneNumber(from.getPhoneNumber());
		to.setRoomId(from.getRoomId());
		to.setTenantId(from.getTenantId());
		to.setTenantName(from.getTenantName());
		to.setWork(from.getWork());
		
		return to;
	}
	
	public static Tenant toEntity(TenantDto from) {
		Tenant to = new Tenant();
		
		to.setAddress(from.getAddress());
		to.setDateOfBirth(from.getDateOfBirth());
		to.setPhoneNumber(from.getPhoneNumber());
		to.setRoomId(from.getRoomId());
		to.setTenantId(from.getTenantId());
		to.setTenantName(from.getTenantName());
		to.setWork(from.getWork());
		
		return to;
	}
	
	public static Iterable<TenantDto> toDtoList(Iterable<Tenant> fromList) {
		List<TenantDto> toList = new ArrayList<TenantDto>();
		
		for(Tenant from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Tenant> toEntityList(Iterable<TenantDto> fromList) {
		List<Tenant> toList = new ArrayList<Tenant>();
		
		for(TenantDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.TenantStatusDto;
import backend.hostel.demo.entity.TenantStatus;

public class TenantStatusMapper {
	public static TenantStatusDto toDto(TenantStatus from) {
		TenantStatusDto to = new TenantStatusDto();
		
		to.setStatusId(from.getStatusId());
		to.setTenantId(from.getTenantId());
		
		return to;
	}
	
	public static TenantStatus toEntity(TenantStatusDto from) {
		TenantStatus to = new TenantStatus();
		
		to.setStatusId(from.getStatusId());
		to.setTenantId(from.getTenantId());
		
		return to;
	}
	
	public static Iterable<TenantStatusDto> toDtoList(Iterable<TenantStatus> fromList) {
		List<TenantStatusDto> toList = new ArrayList<TenantStatusDto>();
		
		for(TenantStatus from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<TenantStatus> toEntityList(Iterable<TenantStatusDto> fromList) {
		List<TenantStatus> toList = new ArrayList<TenantStatus>();
		
		for(TenantStatusDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

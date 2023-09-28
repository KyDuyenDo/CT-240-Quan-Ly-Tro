package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.StatusContractDto;
import backend.hostel.demo.entity.StatusContract;

public class StatusContractMapper {
	public static StatusContractDto toDto(StatusContract from) {
		StatusContractDto to = new StatusContractDto();
		
		to.setContractId(from.getContractId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static StatusContract toEntity(StatusContractDto from) {
		StatusContract to = new StatusContract();
		
		to.setContractId(from.getContractId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static Iterable<StatusContractDto> toDtoList(Iterable<StatusContract> fromList) {
		List<StatusContractDto> toList = new ArrayList<StatusContractDto>();
		
		for(StatusContract from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<StatusContract> toEntityList(Iterable<StatusContractDto> fromList) {
		List<StatusContract> toList = new ArrayList<StatusContract>();
		
		for(StatusContractDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

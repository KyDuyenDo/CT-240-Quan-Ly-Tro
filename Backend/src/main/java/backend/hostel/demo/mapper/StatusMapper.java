package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.StatusDto;
import backend.hostel.demo.entity.Status;

public class StatusMapper {
	public static StatusDto toDto(Status from) {
		StatusDto to = new StatusDto();
		
		to.setStatusId(from.getStatusId());
		to.setStatusName(from.getStatusName());
		to.setStatusNote(from.getStatusNote());
		
		return to;
	}
	
	public static Status toEntity(StatusDto from) {
		Status to = new Status();
		
		to.setStatusId(from.getStatusId());
		to.setStatusName(from.getStatusName());
		to.setStatusNote(from.getStatusNote());
		
		return to;
	}
	
	public static Iterable<StatusDto> toDtoList(Iterable<Status> fromList) {
		List<StatusDto> toList = new ArrayList<StatusDto>();
		
		for(Status from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Status> toEntityList(Iterable<StatusDto> fromList) {
		List<Status> toList = new ArrayList<Status>();
		
		for(StatusDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

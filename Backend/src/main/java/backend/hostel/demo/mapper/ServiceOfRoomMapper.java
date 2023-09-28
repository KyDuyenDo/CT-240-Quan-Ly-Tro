package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.ServiceOfRoomDto;
import backend.hostel.demo.entity.ServiceOfRoom;

public class ServiceOfRoomMapper {
	public static ServiceOfRoomDto toDto(ServiceOfRoom from) {
		ServiceOfRoomDto to = new ServiceOfRoomDto();
		
		to.setRoomId(from.getRoomId());
		to.setServiceId(from.getServiceId());
		
		return to;
	}
	
	public static ServiceOfRoom toEntity(ServiceOfRoomDto from) {
		ServiceOfRoom to = new ServiceOfRoom();
		
		to.setRoomId(from.getRoomId());
		to.setServiceId(from.getServiceId());
		
		return to;
	}
	
	public static Iterable<ServiceOfRoomDto> toDtoList(Iterable<ServiceOfRoom> fromList) {
		List<ServiceOfRoomDto> toList = new ArrayList<ServiceOfRoomDto>();
		
		for(ServiceOfRoom from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<ServiceOfRoom> toEntityList(Iterable<ServiceOfRoomDto> fromList) {
		List<ServiceOfRoom> toList = new ArrayList<ServiceOfRoom>();
		
		for(ServiceOfRoomDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.RoomStatusDto;
import backend.hostel.demo.entity.Roomstatus;

public class RoomStatusMapper {
	public static RoomStatusDto toDto(Roomstatus from) {
		RoomStatusDto to = new RoomStatusDto();
		
		to.setRoomId(from.getRoomId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static Roomstatus toEntity(RoomStatusDto from) {
		Roomstatus to = new Roomstatus();
		
		to.setRoomId(from.getRoomId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static Iterable<RoomStatusDto> toDtoList(Iterable<Roomstatus> fromList) {
		List<RoomStatusDto> toList = new ArrayList<RoomStatusDto>();
		
		for(Roomstatus from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Roomstatus> toEntityList(Iterable<RoomStatusDto> fromList) {
		List<Roomstatus> toList = new ArrayList<Roomstatus>();
		
		for(RoomStatusDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

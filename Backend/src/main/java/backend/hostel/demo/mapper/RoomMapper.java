package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.RoomDto;
import backend.hostel.demo.entity.Room;

public class RoomMapper {
	public static RoomDto toDto(Room from) {
		RoomDto to = new RoomDto();
		
		to.setArea(from.getArea());
		to.setMax(from.getMax());
		to.setRentalPrice(from.getRentalPrice());
		to.setRoomId(from.getRoomId());
		to.setUsed(from.getUsed());
		
		return to;
	}
	
	public static Room toEntity(RoomDto from) {
		Room to = new Room();
		
		to.setArea(from.getArea());
		to.setMax(from.getMax());
		to.setRentalPrice(from.getRentalPrice());
		to.setRoomId(from.getRoomId());
		to.setUsed(from.getUsed());
		
		return to;
	}
	
	public static Iterable<RoomDto> toDtoList(Iterable<Room> fromList) {
		List<RoomDto> toList = new ArrayList<RoomDto>();
		
		for(Room from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Room> toEntityList(Iterable<RoomDto> fromList) {
		List<Room> toList = new ArrayList<Room>();
		
		for(RoomDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

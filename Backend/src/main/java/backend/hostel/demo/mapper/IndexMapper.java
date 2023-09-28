package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.IndexDto;
import backend.hostel.demo.entity.Index;


public class IndexMapper {
	public static IndexDto toDto(Index from) {
		IndexDto to = new IndexDto();
		
		to.setIndexOfElectricity(from.getIndexOfElectricity());
		to.setIndexOfWater(from.getIndexOfWater());
		to.setMonth(from.getMonth());
		to.setRoomId(from.getRoomId());
		to.setYear(from.getYear());
		
		return to;
	}
	
	public static Index toEntity(IndexDto from) {
		Index to = new Index();
		
		to.setIndexOfElectricity(from.getIndexOfElectricity());
		to.setIndexOfWater(from.getIndexOfWater());
		to.setMonth(from.getMonth());
		to.setRoomId(from.getRoomId());
		to.setYear(from.getYear());
		
		return to;
	}
	
	public static Iterable<IndexDto> toDtoList(Iterable<Index> fromList) {
		List<IndexDto> toList = new ArrayList<IndexDto>();
		
		for(Index from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Index> toEntityList(Iterable<IndexDto> fromList) {
		List<Index> toList = new ArrayList<Index>();
		
		for(IndexDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

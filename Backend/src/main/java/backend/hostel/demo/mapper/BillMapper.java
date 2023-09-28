package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.BillDto;
import backend.hostel.demo.entity.Bill;

public class BillMapper {
	
	public static BillDto toDto(Bill from) {
		BillDto to = new BillDto();
		
		to.setBillId(from.getBillId());
		to.setCreatedDate(from.getCreatedDate());
		to.setMonth(from.getMonth());
		to.setPaidDate(from.getPaidDate());
		to.setRoomId(from.getRoomId());
		to.setTotalAmount(from.getTotalAmount());
		to.setUsername(from.getUsername());
		to.setYear(from.getYear());
		
		return to;
	}
	
	public static Bill toEntity(BillDto from) {
		Bill to = new Bill();
		
		to.setBillId(from.getBillId());
		to.setCreatedDate(from.getCreatedDate());
		to.setMonth(from.getMonth());
		to.setPaidDate(from.getPaidDate());
		to.setRoomId(from.getRoomId());
		to.setTotalAmount(from.getTotalAmount());
		to.setUsername(from.getUsername());
		to.setYear(from.getYear());
		
		return to;
	}
	
	public static Iterable<BillDto> toDtoList(Iterable<Bill> fromList) {
		List<BillDto> toList = new ArrayList<BillDto>();
		
		for(Bill from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Bill> toEntityList(Iterable<BillDto> fromList) {
		List<Bill> toList = new ArrayList<Bill>();
		
		for(BillDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

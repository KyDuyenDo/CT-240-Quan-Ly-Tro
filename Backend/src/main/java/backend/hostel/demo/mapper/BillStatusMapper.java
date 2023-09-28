package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.BillStatusDto;
import backend.hostel.demo.entity.Billstatus;



public class BillStatusMapper {
	
	public static BillStatusDto toDto(Billstatus from) {
		BillStatusDto to = new BillStatusDto();
		
		to.setBillId(from.getBillId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static Billstatus toEntity(BillStatusDto from) {
		Billstatus to = new Billstatus();
		
		to.setBillId(from.getBillId());
		to.setStatusId(from.getStatusId());
		
		return to;
	}
	
	public static Iterable<BillStatusDto> toDtoList(Iterable<Billstatus> fromList) {
		List<BillStatusDto> toList = new ArrayList<BillStatusDto>();
		
		for(Billstatus from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Billstatus> toEntityList(Iterable<BillStatusDto> fromList) {
		List<Billstatus> toList = new ArrayList<Billstatus>();
		
		for(BillStatusDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

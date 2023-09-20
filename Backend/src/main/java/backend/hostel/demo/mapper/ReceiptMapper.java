package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.ReceiptDto;
import backend.hostel.demo.entity.Receipt;


public class ReceiptMapper {
	public static ReceiptDto toDto(Receipt from) {
		ReceiptDto to = new ReceiptDto();
		
		to.setAmount(from.getAmount());
		to.setCreatedDate(from.getCreatedDate());
		to.setDescription(from.getDescription());
		to.setMethodId(from.getMethodId());
		to.setReceiptDate(from.getReceiptDate());
		to.setReceiptId(from.getReceiptId());
		to.setTenantId(from.getTenantId());
		to.setUserName(from.getUserName());
		
		return to;
	}
	
	public static Receipt toEntity(ReceiptDto from) {
		Receipt to = new Receipt();
		
		to.setAmount(from.getAmount());
		to.setCreatedDate(from.getCreatedDate());
		to.setDescription(from.getDescription());
		to.setMethodId(from.getMethodId());
		to.setReceiptDate(from.getReceiptDate());
		to.setReceiptId(from.getReceiptId());
		to.setTenantId(from.getTenantId());
		to.setUserName(from.getUserName());
		
		return to;
	}
	
	public static Iterable<ReceiptDto> toDtoList(Iterable<Receipt> fromList) {
		List<ReceiptDto> toList = new ArrayList<ReceiptDto>();
		
		for(Receipt from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Receipt> toEntityList(Iterable<ReceiptDto> fromList) {
		List<Receipt> toList = new ArrayList<Receipt>();
		
		for(ReceiptDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

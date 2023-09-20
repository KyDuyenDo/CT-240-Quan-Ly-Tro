package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.entity.Contract;


public class ContractMapper {
	public static ContractDto toDto(Contract from) {
		ContractDto to = new ContractDto();
		
		to.setContractId(from.getContractId());
		to.setCreateDate(from.getCreateDate());
		to.setEndDate(from.getEndDate());
		to.setNote(from.getNote());
		to.setStartDate(from.getStartDate());
		to.setTenantId(from.getTenantId());
		to.setUserName(from.getUserName());
		
		return to;
	}
	
	public static Contract toEntity(ContractDto from) {
		Contract to = new Contract();
		
		to.setContractId(from.getContractId());
		to.setCreateDate(from.getCreateDate());
		to.setEndDate(from.getEndDate());
		to.setNote(from.getNote());
		to.setStartDate(from.getStartDate());
		to.setTenantId(from.getTenantId());
		to.setUserName(from.getUserName());
		
		return to;
	}
	
	public static Iterable<ContractDto> toDtoList(Iterable<Contract> fromList) {
		List<ContractDto> toList = new ArrayList<ContractDto>();
		
		for(Contract from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Contract> toEntityList(Iterable<ContractDto> fromList) {
		List<Contract> toList = new ArrayList<Contract>();
		
		for(ContractDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

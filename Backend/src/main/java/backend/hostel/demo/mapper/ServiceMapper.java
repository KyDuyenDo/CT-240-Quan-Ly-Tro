package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.ServiceDto;
import backend.hostel.demo.entity.Service;

public class ServiceMapper {
	public static ServiceDto toDto(Service from) {
		ServiceDto to = new ServiceDto();
		
		to.setPrice(from.getPrice());
		to.setServiceId(from.getServiceId());
		to.setServiceName(from.getServiceName());
		to.setUnit(from.getUnit());
		
		return to;
	}
	
	public static Service toEntity(ServiceDto from) {
		Service to = new Service();
		
		to.setPrice(from.getPrice());
		to.setServiceId(from.getServiceId());
		to.setServiceName(from.getServiceName());
		to.setUnit(from.getUnit());
		
		return to;
	}
	
	public static Iterable<ServiceDto> toDtoList(Iterable<Service> fromList) {
		List<ServiceDto> toList = new ArrayList<ServiceDto>();
		
		for(Service from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<Service> toEntityList(Iterable<ServiceDto> fromList) {
		List<Service> toList = new ArrayList<Service>();
		
		for(ServiceDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

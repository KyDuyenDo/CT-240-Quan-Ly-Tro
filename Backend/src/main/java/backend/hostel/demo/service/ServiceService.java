package backend.hostel.demo.service;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.ServiceDto;

@Service
public interface ServiceService {

	Iterable<ServiceDto> getServices();
	
	Iterable<ServiceDto> getServicesByPrice(float price);
	
	Iterable<ServiceDto> getServicesByName(String name);
	
	Iterable<ServiceDto> getServicesByRoom(String roomId);
	
	ServiceDto getServiceById(String serviceId);
	
	ServiceDto createService(ServiceDto serviceDto);
	
	ServiceDto updateService(ServiceDto serviceDto);
	
	ServiceDto deleteService(String serviceId);
}

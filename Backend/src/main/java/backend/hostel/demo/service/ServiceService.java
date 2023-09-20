package backend.hostel.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.ServiceDto;

@Service
public interface ServiceService {

	Iterable<ServiceDto> getServicesByRoom(String roomId);

	Iterable<ServiceDto> orderServiceByRoom(String roomId, List<String> servicesId);

	ServiceDto getServiceById(String serviceId);

	ServiceDto createService(ServiceDto serviceDto);

	ServiceDto updateService(ServiceDto serviceDto);

	ServiceDto deleteService(String serviceId);

}
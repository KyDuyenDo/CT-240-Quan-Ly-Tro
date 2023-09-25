package backend.hostel.demo.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.ServiceDto;
import backend.hostel.demo.entity.Service;
import backend.hostel.demo.entity.ServiceOfRoom;
import backend.hostel.demo.mapper.ServiceMapper;
import backend.hostel.demo.repository.ServiceOfRoomRepo;
import backend.hostel.demo.repository.ServiceRepo;
import backend.hostel.demo.service.ServiceService;

@Component
public class ServiceImpl implements ServiceService {
	@Autowired
	private ServiceRepo serviceRepo; 
	
	@Autowired
	private ServiceOfRoomRepo serviceOfRoomRepo;

	@Override
	public Iterable<ServiceDto> getServicesByRoom(String roomId) {
		return ServiceMapper.toDtoList(serviceOfRoomRepo.findServiceByRoom(roomId));
	}

	@Override
	public Iterable<ServiceDto> orderServiceByRoom(String roomId, List<String> servicesId) {
		for(String item : servicesId) {
			ServiceOfRoom temp = new ServiceOfRoom(roomId, item);
			
			serviceOfRoomRepo.save(temp);
		}
		
		return ServiceMapper.toDtoList(serviceOfRoomRepo.findServiceByRoom(roomId));
	}

	@Override
	public ServiceDto getServiceById(String serviceId) {
		return ServiceMapper.toDto(serviceRepo.findById(serviceId).get());
	}

	@Override
	public ServiceDto createService(ServiceDto serviceDto) {
		Service service = new Service(serviceDto.getServiceId(), serviceDto.getServiceName(), serviceDto.getPrice(), serviceDto.getUnit());
		return ServiceMapper.toDto(serviceRepo.save(service));
	}

	@Override
	public ServiceDto updateService(ServiceDto serviceDto) {
		Service service = serviceRepo.findById(serviceDto.getServiceId()).orElse(null);
		
		if(service == null)
			return null;
		else {
			service = ServiceMapper.toEntity(serviceDto);
			return ServiceMapper.toDto(serviceRepo.save(service));
		}
	}

	@Override
	public ServiceDto deleteService(String serviceId) {
		serviceRepo.deleteById(serviceId);
		return ServiceMapper.toDto(serviceRepo.findById(serviceId).get());
	}

	@Override
	public Iterable<ServiceDto> getService() {
		return ServiceMapper.toDtoList(serviceRepo.findAll());
	}

}

package backend.hostel.demo.service.implement;

import java.util.List;

import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.ServiceDto;
import backend.hostel.demo.service.ServiceService;

@Component
public class ServiceImpl implements ServiceService {

	@Override
	public Iterable<ServiceDto> getServices() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ServiceDto> getServicesByPrice(float price) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ServiceDto> getServicesByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ServiceDto> getServicesByRoom(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceDto getServiceById(String serviceId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceDto createService(ServiceDto serviceDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceDto updateService(ServiceDto serviceDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceDto deleteService(String serviceId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ServiceDto> orderServiceByRoom(String roomId, List<String> servicesId) {
		// TODO Auto-generated method stub
		return null;
	}

}

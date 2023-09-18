package backend.hostel.demo.service.implement;

import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.RoomDto;
import backend.hostel.demo.service.RoomService;

@Component
public class RoomImpl implements RoomService {

	@Override
	public Iterable<RoomDto> getRooms() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<RoomDto> getRoomsByArea(float area) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<RoomDto> getRoomsByPrice(float price) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<RoomDto> getRoomsByUsed(int used) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<RoomDto> getRoomsByStatus(String statusId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<RoomDto> getRoomsById(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RoomDto createRoom(RoomDto newRoom) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RoomDto updateRoom(RoomDto room) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RoomDto deleteRoom(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

}

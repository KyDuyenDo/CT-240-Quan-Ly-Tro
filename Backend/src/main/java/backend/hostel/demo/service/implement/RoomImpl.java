package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.RoomDto;
import backend.hostel.demo.entity.Room;
import backend.hostel.demo.mapper.RoomMapper;
import backend.hostel.demo.repository.RoomRepo;
import backend.hostel.demo.service.RoomService;

@Component
public class RoomImpl implements RoomService {
	@Autowired
	private RoomRepo roomRepo;
	
	@Override
	public Iterable<RoomDto> getRooms() {
		return RoomMapper.toDtoList(roomRepo.findAll());
	}

	@Override
	public Iterable<RoomDto> getRoomsByArea(float area) {
		return RoomMapper.toDtoList(roomRepo.findAllByArea(area));

	}

	@Override
	public Iterable<RoomDto> getRoomsByPrice(float price) {
		return RoomMapper.toDtoList(roomRepo.findAllByPrice(price));	

	}

	@Override
	public Iterable<RoomDto> getRoomsByUsed(int used) {
		return RoomMapper.toDtoList(roomRepo.findAllByUsedNumber(used));
	}

	@Override
	public Iterable<RoomDto> getRoomsByStatus(String statusId) {
		return null;
	}

	@Override
	public RoomDto getRoomsById(String roomId) {
		return RoomMapper.toDto(roomRepo.findRoomById(roomId));
	}

	@Override
	public RoomDto createRoom(RoomDto newRoom) {
		Room room = new Room();
		
		room.setRoomId(newRoom.getRoomId());
		
		room.setArea(newRoom.getArea());
		room.setMax(newRoom.getMax());
		room.setRentalPrice(newRoom.getRentalPrice());
		room.setUsed(newRoom.getUsed());

		return RoomMapper.toDto(roomRepo.save(room));
	}

	@Override
	public RoomDto updateRoom(RoomDto room) {
		Room old_room = roomRepo.findRoomById(room.getRoomId());
		
		if(old_room == null)
			return null;
		else {
			old_room = RoomMapper.toEntity(room);
			
			return RoomMapper.toDto(roomRepo.save(old_room));
		}
	}

	@Override
	public RoomDto deleteRoom(String roomId) {
		roomRepo.deleteById(roomId);
		
		return RoomMapper.toDto(roomRepo.findRoomById(roomId));
	}

}

package backend.hostel.demo.service;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.RoomDto;

@Service
public interface RoomService {
	Iterable<RoomDto> getRooms();

	Iterable<RoomDto> getRoomsByArea(float area);

	Iterable<RoomDto> getRoomsByPrice(float price);

	Iterable<RoomDto> getRoomsByUsed(int used);

	Iterable<RoomDto> getRoomsByStatus(String statusId);

	RoomDto getRoomsById(String roomId);

	RoomDto createRoom(RoomDto newRoom);

	RoomDto updateRoom(RoomDto room);

	RoomDto deleteRoom(String roomId);
}

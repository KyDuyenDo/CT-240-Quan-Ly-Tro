package backend.hostel.demo.mapper;

import java.util.ArrayList;
import java.util.List;

import backend.hostel.demo.dto.UserDto;
import backend.hostel.demo.entity.User;

public class UserMapper {
	public static UserDto toDto(User from) {
		UserDto to = new UserDto();
		
		to.setEmail(from.getEmail());
		to.setFullname(from.getFullname());
		to.setPassword(from.getPassword());
		to.setPhoneNumber(from.getPhoneNumber());
		to.setUsername(from.getUsername());
		
		return to;
	}
	
	public static User toEntity(UserDto from) {
		User to = new User();
		
		to.setEmail(from.getEmail());
		to.setFullname(from.getFullname());
		to.setPassword(from.getPassword());
		to.setPhoneNumber(from.getPhoneNumber());
		to.setUsername(from.getUsername());
		
		return to;
	}
	
	public static Iterable<UserDto> toDtoList(Iterable<User> fromList) {
		List<UserDto> toList = new ArrayList<UserDto>();
		
		for(User from : fromList) {
			toList.add(toDto(from));
		}
		
		return toList;
	}
	
	public static Iterable<User> toEntityList(Iterable<UserDto> fromList) {
		List<User> toList = new ArrayList<User>();
		
		for(UserDto from : fromList) {
			toList.add(toEntity(from));
		}
		
		return toList;
	}
}

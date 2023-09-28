package backend.hostel.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor 

public class UserDto {
	private String username;
	private String fullname;
	private String password;
	private int phoneNumber;
	private String email;

}

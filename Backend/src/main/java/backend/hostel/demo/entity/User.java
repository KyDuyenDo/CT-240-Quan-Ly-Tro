package backend.hostel.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity   
@Table (name = "user")

public class User {
	@Id 
	@Column (name = "username")
	private String username;
	@Column (name = "fullname")
	private String fullname;
	@Column (name = "password")
	private String password;
	@Column (name = "phone_number")
	private int phoneNumber;
	@Column (name = "email")
	private String email;
	

}

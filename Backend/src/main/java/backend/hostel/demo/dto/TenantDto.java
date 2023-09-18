package backend.hostel.demo.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TenantDto {
	private String tenantId;
	
	private String roomId;
	
	private String tenantName;

	private int phoneNumber;
	
	private String address;
	
	private Date dateOfBirth;
	
	private String work;

}

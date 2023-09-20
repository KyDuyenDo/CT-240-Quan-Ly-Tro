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
public class BillDto {
	
	private String billId;
	
	private String roomId;
	
	private String username;
	
	private Date createdDate;
	
	private Date paidDate;
	
	private float totalAmount;
	
	private int month;
	
	private int year;  
	

}

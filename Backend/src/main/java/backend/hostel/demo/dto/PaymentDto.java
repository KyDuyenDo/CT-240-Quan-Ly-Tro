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
public class PaymentDto {
private String paymentId;
	 
	private String methodId;
	
	private String paymentDate;
	
	private String username;
	
	private String amount;
	
	private String description;

	private Date createdDate;

}

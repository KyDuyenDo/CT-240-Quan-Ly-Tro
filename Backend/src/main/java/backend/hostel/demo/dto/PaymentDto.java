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
	
	private String username;

	private Date paymentDate;
	
	private String description;
	
	private String amount;

	private Date createDate;
	
}

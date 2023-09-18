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
public class ReceiptDto {
private String receiptId;
	
	private String tenantId;
	
	private String methodId;
	
	private String userName;
	
	private Date receiptDate;
	
	private String description;
	
	private String amount;
	
	private Date createdDate;

}

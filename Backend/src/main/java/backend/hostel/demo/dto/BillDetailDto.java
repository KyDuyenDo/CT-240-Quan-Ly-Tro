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

public class BillDetailDto {

	private String billId;

	private String serviceId;

	private int quantity;

	private float discount;

	private float tax;  
	
	private float total;
	
}

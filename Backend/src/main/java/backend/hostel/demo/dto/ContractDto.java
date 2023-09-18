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

public class ContractDto {
	private String contractId;
	
	private String tenantId;
	
	private String userName;
	
	private Date startDate;
	
	private Date endDate;
	
	private Date createDate;
	
	private String note;

}

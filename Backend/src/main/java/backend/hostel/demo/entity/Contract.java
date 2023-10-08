package backend.hostel.demo.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "contract")
public class Contract {
	@Id
	@Column(name = "contract_id")
	private String contractId;
	
	@Column(name = "tenant_id")
	private String tenantId;
	
	@Column(name = "username")
	private String userName;
	
	@Column (name = "status_id")
	private String statusId;
	
	@Column(name = "start_date")
	private Date startDate;
	
	@Column(name = "end_date")
	private Date endDate;
	
	@Column(name = "create_date")
	private Date createDate;
	
	@Column(name = "note")
	private String note;




}

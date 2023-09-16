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
@Table(name = "receipt")
public class Receipt {
	@Id
	@Column(name = "receipt_id")
	private String receiptId;
	
	@Column(name = "tenant_id")
	private String tenantId;
	
	@Column(name = "method_id")
	private String methodId;
	
	@Column(name = "username")
	private String userName;
	
	@Column(name = "receipt_date")
	private Date receiptDate;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "amount")
	private String amount;
	
	@Column(name = "created_date")
	private Date createdDate;

}

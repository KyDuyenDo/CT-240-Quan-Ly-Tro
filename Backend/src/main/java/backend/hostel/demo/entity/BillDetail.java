package backend.hostel.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@AllArgsConstructor
@Getter
@NoArgsConstructor
@Entity
@Table (name = "bill_detail")

public class BillDetail {
	@Id
	@Column (name = "bill_id")
	private String billId;
	@Column (name = "service_id")
	private String serviceId;
	@Column (name = "quantity")
	private int quantity; 
	@Column (name = "discount")
	private float discount;
	@Column (name = "tax")
	private float tax;
	@Column (name = "total")
	private float total;
	

}

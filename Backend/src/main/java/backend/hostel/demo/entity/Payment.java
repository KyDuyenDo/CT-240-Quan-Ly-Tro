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
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@Entity
@Table (name ="payment")
public class Payment {
	@Id
	@Column (name = "payment_id")
	private String paymentId;
	
	@Column (name = "method_id")  
	private String methodId;
	
	@Column (name = "payment_date")
	private String paymentDate;
	
	@Column (name = "username")
	private String username;
	
	@Column(name = "amount")
	private String amount;
	
	@Column (name = "description")
	private String description;
	@Column(name = "created_date")
	private Date createdDate;
	

}

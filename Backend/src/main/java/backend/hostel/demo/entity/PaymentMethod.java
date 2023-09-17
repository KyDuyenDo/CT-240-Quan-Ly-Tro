package backend.hostel.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table ( name = "payment_method")
public class PaymentMethod {
	@Id 
	@Column (name = "method_id")
	private String methodId;
	@Column (name = "method_name")
	private String methodName;
	
	

}

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
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "service")
public class Service {
	@Id
	@Column(name = "service_id")
	private  String serviceId;
	
	@Column(name = "service_name")
	private String serviceName;
	
	@Column(name = "price")
	private float price;
	
	@Column(name = "unit")
	private String unit;



}

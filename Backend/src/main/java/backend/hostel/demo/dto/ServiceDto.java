package backend.hostel.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDto {
	private  String serviceId;
	
	private String serviceName;
	
	private float price;
	
	private String unit;
}

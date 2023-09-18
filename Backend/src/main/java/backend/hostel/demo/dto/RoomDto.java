package backend.hostel.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDto {
	private String roomId;
	
	private float area;
	
	private float rentalPrice;
	
	private int max;
	
	private int used;

}

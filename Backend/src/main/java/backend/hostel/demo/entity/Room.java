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
@Table(name = "room")
public class Room {
	@Id
	@Column(name = "room_id")
	private String roomId;
	
	@Column(name = "area")
	private float area;
	
	@Column(name = "rental_price")
	private float rentalPrice;
	
	@Column(name = "max")
	private int max;
	
	@Column(name = "used")
	private int used;

	
}

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
@Table(name = "index_of_we")
public class Index {
	@Id
	@Column(name = "room_id")
	private String roomId;
	
	@Id
	@Column(name = "month")
	private int month;
	
	@Id
	@Column(name = "year")
	private int year;
	
	@Column(name = "index_of_water")
	private int indexOfWater;
	
	@Column(name = "index_of_electricity")
	private int indexOfElectricity;
	
	
}

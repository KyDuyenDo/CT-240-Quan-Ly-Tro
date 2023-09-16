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
@Table(name = "service_of_room")
public class ServiceOfRoom {
	@Id
	@Column(name = "room_id")
	private String roomId;
	
	@Id
	@Column(name = "service_id")
	private String serviceId;

}

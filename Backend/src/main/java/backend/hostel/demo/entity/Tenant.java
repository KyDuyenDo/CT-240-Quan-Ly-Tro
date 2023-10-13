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
@Table(name = "tenant")
public class Tenant {
	@Id
	@Column(name = "tenant_id")
	private String tenantId;
	
	@Column (name = "status_id")
	private String statusId;
	
	@Column(name = "room_id")
	private String roomId;
	
	@Column(name = "tenant_name")
	private String tenantName;
	
	@Column(name = "phone_number")
	private int phoneNumber;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "date_of_birth")
	private Date dateOfBirth;
	
	@Column(name = "work")
	private String work;
}

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
@Table(name = "status_contract")
public class StatusContract {
	@Id
	@Column(name = "contract_id")
	private String contractId;
	
	@Id
	@Column(name = "status_id")
	private String statusId;
}

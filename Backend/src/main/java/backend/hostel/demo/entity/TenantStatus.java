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
@Table(name = "tenant_status")
public class TenantStatus {
	@Id
	@Column(name = "status_id")
	private String statusId;
	
	@Id
	@Column(name = "tenant_id")
	private String tenantId;

}

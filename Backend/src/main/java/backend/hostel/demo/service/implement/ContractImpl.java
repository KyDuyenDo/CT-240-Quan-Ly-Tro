package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.repository.ContractRepo;
import backend.hostel.demo.service.ContractService;

@Component
public class ContractImpl implements ContractService {
	
	@Autowired
	private ContractRepo contractRepo;

	@Override
	public Iterable<ContractDto> getContracts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ContractDto> getContracstByTenant(String tenantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ContractDto> getContractsByUser(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<ContractDto> getContractsByStatus(String statusId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ContractDto getContractsById(String contractId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ContractDto createContract(ContractDto contractDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ContractDto updateContract(ContractDto contractDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ContractDto deleteConstract(String contractId) {
		// TODO Auto-generated method stub
		return null;
	}

}

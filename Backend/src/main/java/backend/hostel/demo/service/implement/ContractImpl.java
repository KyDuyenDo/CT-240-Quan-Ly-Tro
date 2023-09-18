package backend.hostel.demo.service.implement;

import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.service.ContractService;

@Component
public class ContractImpl implements ContractService {

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

package backend.hostel.demo.service;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.ContractDto;

@Service
public interface ContractService {
	Iterable<ContractDto> getContracts();
	
	Iterable<ContractDto> getContracstByTenant(String tenantId);
	
	Iterable<ContractDto> getContractsByUser(String username);
	
	Iterable<ContractDto> getContractsByStatus(String statusId);
	
	ContractDto getContractsById(String contractId);
	
	ContractDto createContract(ContractDto contractDto);
		  
	ContractDto updateContract(ContractDto contractDto);
	
	ContractDto deleteConstract(String contractId);
}
package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.entity.Contract;
import backend.hostel.demo.mapper.ContractMapper;
import backend.hostel.demo.repository.ContractRepo;
import backend.hostel.demo.repository.StatusContractRepo;
import backend.hostel.demo.service.ContractService;

@Component
public class ContractImpl implements ContractService {
	
	@Autowired
	private ContractRepo contractRepo;
	
	@Autowired
	private StatusContractRepo statusContractRepo;

	@Override
	public Iterable<ContractDto> getContracts() {
		return ContractMapper.toDtoList(contractRepo.findAll());
	}

	@Override
	public Iterable<ContractDto> getContracstByTenant(String tenantId) {
		return ContractMapper.toDtoList(contractRepo.findAllByTenant(tenantId));
	}

	@Override
	public Iterable<ContractDto> getContractsByUser(String username) {
		return ContractMapper.toDtoList(contractRepo.findAllByUsername(username));
	}

	@Override
	public Iterable<ContractDto> getContractsByStatus(String statusId) {
		return ContractMapper.toDtoList(statusContractRepo.findAllByStatus(statusId));
	}

	@Override
	public ContractDto getContractsById(String contractId) {
		return ContractMapper.toDto(contractRepo.findByID(contractId));
	}

	@Override
	public ContractDto createContract(ContractDto contractDto) {
		Contract contract = new Contract(contractDto.getContractId(), contractDto.getTenantId(), contractDto.getUserName(), contractDto.getStartDate()
				, contractDto.getEndDate(), contractDto.getCreateDate(), contractDto.getNote());
		
		return ContractMapper.toDto(contractRepo.save(contract));
	}

	@Override
	public ContractDto updateContract(ContractDto contractDto) {
		Contract old_contract = contractRepo.findByID(contractDto.getContractId());
		
		if(old_contract == null)
			return null;
		else {
			old_contract = ContractMapper.toEntity(contractDto);
			
			return ContractMapper.toDto(contractRepo.save(old_contract));
		}
	}

	@Override
	public ContractDto deleteConstract(String contractId) {
		contractRepo.deleteById(contractId);
		return ContractMapper.toDto(contractRepo.findByID(contractId));
		
	}

}

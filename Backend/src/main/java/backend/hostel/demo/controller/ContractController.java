package backend.hostel.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import backend.hostel.demo.dto.ContractDto;
import backend.hostel.demo.service.ContractService;

@Controller
@RequestMapping("/contract")
public class ContractController {
	public ContractService contractService;
   
	@GetMapping("/")
	public ResponseEntity<?> getContracts(){
		return ResponseEntity.ok(contractService.getContracts());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getContractById(@PathVariable("id") String contractId){
		return ResponseEntity.ok(contractService.getContractsById(contractId));
	}

	@PostMapping(value = "", consumes = "application/x-www-form-urlencoded")
	public ResponseEntity<?> createContract(String contractId, ContractDto contractDto){
		return ResponseEntity.ok(contractService.createContract(contractDto));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteContract(@PathVariable("id") String contractId){
		return ResponseEntity.ok(contractService.deleteConstract(contractId));
	}
}

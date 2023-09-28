package backend.hostel.demo.service;

import org.springframework.stereotype.Service;

import backend.hostel.demo.dto.BillDto;

@Service
public interface BillService {
	Iterable<BillDto> getBills();

	Iterable<BillDto> getBillsByRoom(String roomId);

	Iterable<BillDto> getBillsByMonth(int month, int year);

	Iterable<BillDto> getBillByUser(String userId);

	Iterable<BillDto> getBillByStatus(String statusId);

	BillDto getBillById(String billId);

	BillDto createBill(BillDto newBill);

	BillDto updateBill(BillDto bill);

	BillDto deleteBill(String billId);

	BillDto comfirmPayment(String billId);	
}

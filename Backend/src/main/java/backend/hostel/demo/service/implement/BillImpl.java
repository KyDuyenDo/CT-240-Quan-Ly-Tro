package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.BillDto;
import backend.hostel.demo.repository.BillRepo;
import backend.hostel.demo.service.BillService;

@Component
public class BillImpl implements BillService {
	
	@Autowired
	private BillRepo billRepo;

	@Override
	public Iterable<BillDto> getBills() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<BillDto> getBillsByRoom(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<BillDto> getBillsByMonth(int month, int year) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<BillDto> getBillByUser(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<BillDto> getBillByStatus(String statusId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BillDto getRoomById(String billId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BillDto createBill(BillDto newBill) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BillDto updateBill(BillDto bill) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BillDto deleteBill(String billId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BillDto comfirmPayment(String billId) {
		// TODO Auto-generated method stub
		return null;
	}

}

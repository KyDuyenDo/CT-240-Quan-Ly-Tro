package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.BillDto;
import backend.hostel.demo.entity.Bill;
import backend.hostel.demo.entity.Billstatus;
import backend.hostel.demo.entity.Room;
import backend.hostel.demo.mapper.BillMapper;
import backend.hostel.demo.mapper.RoomMapper;
import backend.hostel.demo.repository.BillRepo;
import backend.hostel.demo.repository.BillStatusRepo;
import backend.hostel.demo.service.BillService;

@Component
public class BillImpl implements BillService {
	
	@Autowired
	private BillRepo billRepo;
	
	@Autowired
	private BillStatusRepo billStatusRepo;

	@Override
	public Iterable<BillDto> getBills() {
		return BillMapper.toDtoList(billRepo.findAll());
	}

	@Override
	public Iterable<BillDto> getBillsByRoom(String roomId) {
		return BillMapper.toDtoList(billRepo.findAllByRoom(roomId));
	}

	@Override
	public Iterable<BillDto> getBillsByMonth(int month, int year) {
		return BillMapper.toDtoList(billRepo.findAllByMonth(month, year));
	}

	@Override
	public Iterable<BillDto> getBillByUser(String username) {
		return BillMapper.toDtoList(billRepo.findAllByUser(username));
	}

	@Override
	public Iterable<BillDto> getBillByStatus(String statusId) {
		return BillMapper.toDtoList(billStatusRepo.findAllByStatus(statusId));
	}

	@Override
	public BillDto createBill(BillDto newBill) {
		Bill bill = new Bill();
		
		bill.setBillId(newBill.getBillId());
		bill.setCreatedDate(newBill.getCreatedDate());
		bill.setMonth(newBill.getMonth());
		bill.setPaidDate(newBill.getPaidDate());
		bill.setRoomId(newBill.getRoomId());
		bill.setTotalAmount(newBill.getTotalAmount());
		bill.setUsername(newBill.getUsername());
		bill.setYear(newBill.getYear());
		
		return BillMapper.toDto(billRepo.save(bill));
	}

	@Override
	public BillDto updateBill(BillDto billDto) {
		Bill old_bill = billRepo.findbyId(billDto.getBillId());
		
		if(old_bill == null)
			return null;
		else {
			old_bill = BillMapper.toEntity(billDto);
			
			return BillMapper.toDto(billRepo.save(old_bill));
		}
	}

	@Override
	public BillDto deleteBill(String billId) {
		billRepo.deleteById(billId);
		return BillMapper.toDto(billRepo.findbyId(billId));
	}

	@Override
	public BillDto comfirmPayment(String billId) {
		return null;
	}

	@Override
	public BillDto getBillById(String billId) {
		return BillMapper.toDto(billRepo.findbyId(billId));
	}

}

package backend.hostel.demo.service.implement;

import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.IndexDto;
import backend.hostel.demo.service.IndexService;

@Component
public class IndexImpl implements IndexService {

	@Override
	public Iterable<IndexDto> getIndexes() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<IndexDto> getIndexesByMonth() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndexDto getIndexesByRoom(String roomId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndexDto createIndex(IndexDto indexDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndexDto updateIndex(IndexDto index) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IndexDto deleteIndex(String roomId, int mouth, int year) {
		// TODO Auto-generated method stub
		return null;
	}

}
